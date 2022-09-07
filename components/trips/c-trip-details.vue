<template>
  <div
    class="
      bg-white
      rounded-2xl
      p-3
      md:p-8
      my-6
      text-blue
      max-w-screen-lg
      z-0
      w-full
    "
  >
    <div class="mb-12">
      <c-trip-from-to :from="trip.from.name" :to="trip.to.name" />
    </div>

    <div class="flex flex-col md:flex-row my-4">
      <div class="w-full md:w-1/2 p-3 flex flex-col justify-center">
        <div class="flex justify-between items-center mb-6">
          <c-person :person="trip.driver" />
          <c-seats-indicator :seats="trip.seats" />
        </div>
        <div class="mb-6 md:mb-12">
          <p class="text-xl">
            Prix par passager: <span class="font-bold">{{ trip.price }}€</span>
          </p>
        </div>
        <p>{{ trip.description }}</p>
        <div
          v-if="($auth.user && trip.driver_id != $auth.user.id) || !$auth.user"
          class="flex justify-between items-center my-8"
        >
          <div class="flex items-center">
            <c-button
              @clicked="reserveTrip"
              class="py-2 px-3 mr-2 rounded-2xl"
              color="orange"
              >Resever</c-button
            >
            <c-button
              v-if="$auth.user"
              @clicked="modalOpen = true"
              class="py-2 px-3 rounded-2xl"
              color="blue"
              >Contacter</c-button
            >
          </div>
        </div>
      </div>

      <c-trip-map
        class="w-full md:w-1/2 h-80 md:h-96"
        :from_city_id="trip.from_city_id"
        :to_city_id="trip.to_city_id"
      />
      <transition name="pop-up">
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
        try {
          const reservation = await this.$axios.$post(
            `/trips/reserve/${this.trip.id}`
          )
          this.$router.push('/trajets/mes-trajets')
        } catch (error) {
          console.log(error)
        }
      } else {
        this.$router.push('/connexion')
      }
    },
  },
}
</script>

<style>
</style>