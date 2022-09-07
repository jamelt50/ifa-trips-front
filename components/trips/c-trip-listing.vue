<template>
  <div class="flex justify-between items-center h-screen md:h-96 md:py-3 relative">
    <div
      v-if="trips.length"
      class="
        w-full
        md:w-1/4 md:border-r
        border-dark-blue
        pr-3
        h-5/6
        overflow-scroll
      "
    >
      <ul>
        <li v-for="trip in trips" :key="trip.id">
          <button
            @click="selectTrip(trip)"
            class="
              hover:opacity-75
              transition-all
              w-full
              cursor-pointer
              py-2
              border-b border-blue
            "
          >
            <c-trip-from-to :from="trip.from.name" :to="trip.to.name" />
            <p class="text-left py-3">
              {{
                new Date(trip.date).toLocaleDateString('en-us', {
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                })
              }}
            </p>
          </button>
        </li>
      </ul>
    </div>
    <div class="w-full justify-center items-center flex" v-else>
      <p class="text-xl md:text-2xl">Vous n'avez pas encore de trajet</p>
    </div>
    <transition name="switch">
      <div
        v-if="activeTrip"
        class="
          absolute
          bg-white
          md:bg-transparent
          top-0
          left-0
          w-full
          md:static md:w-3/4 md:px-6 overflow-y-scroll
          h-5/6
        "
      >
        <div class="flex justify-between items-center mb-8">
          <c-button
            v-if="activeTrip"
            class="md:hidden my-4"
            @clicked="activeTrip = null"
            color="orange"
            >Retour</c-button
          >
          <c-button @clicked="mapActive = true" color="blue">
            Voir la carte</c-button
          >
        </div>

        <c-trip-from-to :from="activeTrip.from.name" :to="activeTrip.to.name" />
        <div class="flex justify-between items-center my-8">
          <div>
            <span class="text-xl"
              >Prix par passager:
              <span class="font-bold">{{ activeTrip.price }}€</span></span
            >
          </div>
          <c-seats-indicator :seats="activeTrip.seats" />
        </div>
        <div class="h-5/6 md:h-auto">
          <span class="text-xl">Passager:</span>
          <ul
            class="my-3 overflow-scroll md:overflow-hidden h-5/6 md:h-auto"
            v-if="activeTrip.reservations"
          >
            <li
              v-for="reservation in activeTrip.reservations"
              :key="reservation.id"
              class="
                border-t border-blue
                py-1
                md:py-3
                flex
                justify-between
                md:items-center
                flex-col
                md:flex-row
              "
            >
              <c-person :person="reservation.passenger" />
              <div class="flex md:justify-between items-center my-1">
                <span class="mx-3">Status:</span>
                <c-button
                  v-if="reservation.state == 'pending'"
                  @clicked="cancel(reservation.id)"
                  color="red"
                  >Annuler</c-button
                >

                <c-button
                  v-if="reservation.state == 'pending'"
                  @clicked="accept(reservation.id)"
                  color="green"
                  class="ml-2"
                  >Accepter</c-button
                >
                <c-state
                  v-if="reservation.state == 'canceled'"
                  color="red-outline"
                  class="mr-2"
                  >Annuler</c-state
                >
                <c-state
                  v-if="reservation.state == 'accepted'"
                  color="outline"
                  class="ml-2"
                  >Accepté</c-state
                >
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <transition name="pop-up">
      <c-trip-map-modal
        @close="mapActive = false"
        v-if="mapActive"
        :from_city_id="activeTrip.from_city_id"
        :to_city_id="activeTrip.to_city_id"
      />
    </transition>
  </div>
</template>

<script>
export default {
  props: ['trips'],
  data() {
    return {
      activeTrip: null,
      mapActive: false,
    }
  },
  mounted() {
    if (this.trips.length) {
      this.selectTrip(this.trips[0])
    }
  },
  methods: {
    async selectTrip(trip) {
      this.activeTrip = trip
      try {
        let reservations = await this.$axios.$get(
          `/trips/${trip.id}/reservations`
        )
        this.$set(this.activeTrip, 'reservations', reservations)
      } catch (error) {
        console.log(error)
      }
    },
    toggleMap() {
      this.mapActive = !this.mapActive
    },
    async accept(id) {
      try {
        let updatedtTrip = await this.$axios.$post(`/trips/accept/${id}`)
        this.replacetrip(updatedtTrip)
      } catch (error) {
        console.log(error)
      }
    },
    async cancel(id) {
      try {
        let updatedtTrip = await this.$axios.$post(`/trips/cancel/${id}`)
        this.replacetrip(updatedtTrip)
      } catch (error) {
        console.log(error)
      }
    },
    replacetrip(updatedtTrip) {
      this.trips.splice(this.trips.indexOf(this.activeTrip), 1, updatedtTrip)
      this.activeTrip = updatedtTrip
      this.selectTrip(this.activeTrip)
    },
  },
}
</script>

<style>
</style>