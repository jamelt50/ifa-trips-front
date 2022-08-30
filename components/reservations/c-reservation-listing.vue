<template>
  <div class="flex justify-between items-center h-96 py-3">
    <div class="w-1/4 border-r border-dark-blue pr-3 h-full overflow-scroll">
      <ul v-if="reservations.length">
        <li v-for="reservation in reservations" :key="reservation.id">
          <button
            @click="activeReservation = reservation"
            class="
              hover:opacity-75
              transition-all
              w-full
              cursor-pointer
              py-2
              border-b border-blue
            "
          >
            <c-person class="my-2" :person="reservation.trip.driver" />
            <c-trip-from-to
              :from="reservation.trip.from.name"
              :to="reservation.trip.to.name"
            />
          </button>
        </li>
      </ul>
      <div v-else><p>Vous n'avez pas encore crée de trajets</p></div>
    </div>
    <div v-if="activeReservation" class="w-3/4 px-6 h-full overflow-scroll">
      <c-trip-from-to
        :from="activeReservation.trip.from.name"
        :to="activeReservation.trip.to.name"
      />
      <div class="flex justify-between items-center my-8">
        <div>
          <span class="text-xl"
            >Prix par passager:
            <span class="font-bold">{{
              activeReservation.trip.price
            }}</span></span
          >
        </div>
        <c-seats-indicator :seats="activeReservation.trip.seats" />
        <div class="flex justify-between items-center">
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
            >Annuler</c-state
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
  </div>
</template>

<script>
export default {
  props: ['reservations'],
  data() {
    return {
      activeReservation: null,
    }
  },
  methods: {
    async cancel(trip) {
      let reservation = await this.$axios.$put(
        `/reservations/cancel/${this.activeReservation.id}`
      )
      this.activeReservation = reservation
      this.reservations.splice(
        this.reservations.indexOf(this.activeReservation),
        1,
        reservation
      )
    },
  },
}
</script>

<style>
</style>