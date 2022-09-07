<template>
  <div class="flex justify-between items-center h-full md:h-96 py-3 relative">
    <div
      class="
        w-full
        md:w-1/4 md:border-r
        border-dark-blue
        pr-3
        h-full
        overflow-scroll
      "
    >
      <ul v-if="reservations.length">
        <li v-for="reservation in reservations" :key="reservation.id">
          <button
            @click="selectReservation(reservation)"
            class="
              hover:opacity-75
              transition-all
              w-full
              cursor-pointer
              py-2
              border-b border-blue
            "
          >
            <c-person class="my-3" :person="reservation.trip.driver" />
            <c-trip-from-to
              :from="reservation.trip.from.name"
              :to="reservation.trip.to.name"
            />
          </button>
        </li>
      </ul>
      <div v-else><p>Vous n'avez pas encore de réervation</p></div>
    </div>
    <transition name="switch">
      <div
        v-if="activeReservation"
        class="
          absolute
          bg-white
          md:bg-transparent
          top-0
          left-0
          w-full
          md:static md:w-3/4 md:px-6
          h-full
          pb-20
        "
      >
        <div class="flex justify-between items-center mb-8">
          <c-button
            v-if="activeReservation"
            class="md:hidden my-4"
            @clicked="activeReservation = null"
            color="orange"
            >Retour</c-button
          >
          <c-button @clicked="mapActive = true" color="blue">
            Voir la carte</c-button
          >
        </div>

        <c-trip-from-to
          :from="activeReservation.trip.from.name"
          :to="activeReservation.trip.to.name"
        />
        <div
          class="flex justify-between md:items-center flex-col md:flex-row my-8"
        >
          <div class="my-3">
            <span class="text-xl"
              >Prix par passager:
              <span class="font-bold">{{
                activeReservation.trip.price
              }}</span></span
            >
          </div>
          <c-seats-indicator
            class="my-3"
            :seats="activeReservation.trip.seats"
          />
          <div class="flex md:justify-between items-center my-3">
            <span class="mx-3">Status:</span>
            <c-state
              v-if="activeReservation.state == 'pending'"
              color="outline"
              class="mr-2"
              >Attente</c-state
            >
            <c-state
              v-if="activeReservation.state == 'accepted'"
              color="green-outline"
              class="mr-2"
              >Accepté</c-state
            >
            <c-state
              v-if="activeReservation.state == 'canceled'"
              color="red-outline"
              class="mr-2"
              >Annulé</c-state
            >
            <c-button
              v-if="activeReservation.state == 'pending'"
              @clicked="cancel(activeReservation)"
              color="red"
              >Annuler</c-button
            >
          </div>
        </div>
      </div>
    </transition>
    <transition name="pop-up">
      <c-trip-map-modal
        @close="mapActive = false"
        v-if="mapActive"
        :from_city_id="activeReservation.trip.from_city_id"
        :to_city_id="activeReservation.trip.to_city_id"
      />
    </transition>
  </div>
</template>

<script>
export default {
  props: ['reservations'],
  data() {
    return {
      activeReservation: null,
      mapActive: false,
    }
  },
  mounted() {
    if (this.reservations.length) {
      this.selectReservation(this.reservations[0])
    }
  },
  methods: {
    selectReservation(reservation) {
      this.activeReservation = reservation
    },
    async cancel() {
      try {
        let reservation = await this.$axios.$put(
          `/reservations/cancel/${this.activeReservation.id}`
        )
        this.activeReservation = reservation
        this.reservations.splice(
          this.reservations.indexOf(this.activeReservation),
          1,
          reservation
        )
      } catch (error) {}
    },
  },
}
</script>

<style>
</style>