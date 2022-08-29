<template>
  <div
    class="bg-white rounded-2xl p-8 my-6 text-blue max-w-screen-lg z-0 w-full"
  >
    <div class="mb-12">
      <c-trip-from-to :from="trip.from.nom" :to="trip.to.nom" />
    </div>

    <div class="mb-12">
      <p class="text-xl">
        Prix par passager: <span class="font-bold">{{ trip.price }}€</span>
      </p>
    </div>
<div><p>{{trip.description}}</p></div>
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <c-person :person="trip.driver" />
        <c-seats-indicator :seats="trip.seats" />
      </div>

      <div class="flex items-center">
        <c-button
          @clicked="reserveTrip"
          class="py-2 px-3 mx-2 rounded-2xl"
          color="orange"
          >Resever</c-button
        >
        <c-button class="py-2 px-3 rounded-2xl" color="blue"
          >Contacter</c-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { trip: Object },
  methods: {
    async reserveTrip() {
      if (this.$auth.loggedIn) {
        const reservation = await this.$axios.$post(`/trips/reserve/${this.trip.id}`)
      } else {
        this.$router.push('/connexion')
      }
    },
  },
}
</script>

<style>
</style>