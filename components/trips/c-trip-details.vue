<template>
  <div
    class="bg-white rounded-2xl p-8 my-6 text-blue max-w-screen-lg z-0 w-full"
  >
    <div class="mb-12">
      <c-trip-from-to :from="trip.from.name" :to="trip.to.name" />
    </div>

    <div class="flex my-4">
      <div class="w-1/2 p-3 flex flex-col justify-center">
        <div class="flex justify-between items-center mb-6">
          <c-person :person="trip.driver" />
          <c-seats-indicator :seats="trip.seats" />
        </div>
        <div class="mb-12">
          <p class="text-xl">
            Prix par passager: <span class="font-bold">{{ trip.price }}€</span>
          </p>
        </div>
        <p>{{ trip.description }}</p>
        <div class="flex justify-between items-center my-8">
          <div class="flex items-center">
            <c-button
              @clicked="reserveTrip"
              class="py-2 px-3 mr-2 rounded-2xl"
              color="orange"
              >Resever</c-button
            >
            <c-button
              @clicked="modalOpen = true"
              class="py-2 px-3 rounded-2xl"
              color="blue"
              >Contacter</c-button
            >
          </div>
        </div>
      </div>

      <c-trip-map
        class="w-1/2 h-96"
        :from_city_id="trip.from_city_id"
        :to_city_id="trip.to_city_id"
      />
      <transition name="switch">
        <c-message-modal
          @close="modalOpen = false"
          :trip="trip"
          v-if="modalOpen"
        />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: { trip: Object },
  data() {
    return {
      modalOpen: false,
    }
  },
  methods: {
    async reserveTrip() {
      if (this.$auth.loggedIn) {
        const reservation = await this.$axios.$post(
          `/trips/reserve/${this.trip.id}`
        )
        this.$router.push('/trajets/mes-trajets')
      } else {
        this.$router.push('/connexion')
      }
    },
  },
}
</script>

<style>
</style>