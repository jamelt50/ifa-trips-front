<template>
  <div class="flex justify-between items-center h-96 py-3">
    <div class="w-1/4 border-r border-dark-blue pr-3 h-full overflow-scroll">
      <ul v-if="trips.length">
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
      <div v-else><p>Vous n'avez pas encore crée de trajets</p></div>
    </div>
    <div v-if="activeTrip" class="w-3/4 px-6 h-full overflow-scroll">
      <c-trip-from-to :from="activeTrip.from.name" :to="activeTrip.to.name" />
      <div class="flex justify-between items-center my-8">
        <div>
          <span class="text-xl"
            >Prix par passager:
            <span class="font-bold">{{ activeTrip.price }}</span></span
          >
        </div>
        <c-seats-indicator :seats="activeTrip.seats" />
      </div>

      <div>
        <span class="text-xl">Passager:</span>
        <ul class="my-3" v-if="activeTrip.reservations">
          <li
            v-for="reservation in activeTrip.reservations"
            :key="reservation.id"
            class="flex justify-between items-center border-t border-blue py-3"
          >
            <c-person :person="reservation.passenger" class="mb-2" />
            <div class="flex justify-between items-center">
              <span class="mx-3">Status:</span>
              <c-button
                v-if="reservation.state == 'pending'"
                @click="cancel(activeTrip)"
                color="red"
                >Annuler</c-button
              >
              <c-button
                v-if="reservation.state == 'pending'"
                @click="accept(activeTrip)"
                color="green"
                class="ml-2"
                >Accepter</c-button
              >
              <c-button
                v-if="reservation.state == 'canceled'"
                color="red-outline"
                class="mr-2"
                >Annuler</c-button
              >
              <c-button
                v-if="reservation.state == 'accepted'"
                color="outline"
                class="ml-2"
                >Accepté</c-button
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['trips'],
  data() {
    return {
      activeTrip: null,
    }
  },
  methods: {
    async selectTrip(trip) {
      this.activeTrip = trip
      let reservations = await this.$axios.$get(
        `/trips/${trip.id}/reservations`
      )
      this.$set(this.activeTrip, 'reservations', reservations)
    },

    async accept(trip) {
      let updatedtTrip = await this.$axios.$post(`/trips/accept/${trip.id}`)
    },
    async cancel(trip) {
      let updatedtTrip = await this.$axios.$post(`/trips/cancel/${trip.id}`)
    },
  },
}
</script>

<style>
</style>