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
            <c-button class="py-2 px-3 rounded-2xl" color="blue"
              >Contacter</c-button
            >
          </div>
        </div>
      </div>
      <div id="map-wrap" class="h-96 overflow-hidden rounded-2xl w-1/2">
        <client-only>
          <l-map
            :zoom="13"
            :bounds="[
              [to[1], to[0]],
              [from[1], from[0]],
            ]"
          >
            <l-tile-layer
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            ></l-tile-layer>
            <l-marker :lat-lng="[to[1], to[0]]">
              <l-icon :iconSize="['42']" icon-url="/place.svg"
            /></l-marker>
            <l-marker :lat-lng="[from[1], from[0]]"
              ><l-icon :iconSize="['42']" icon-url="/place.svg"
            /></l-marker>
            <l-polyline
              :lat-lngs="[
                [to[1], to[0]],
                [from[1], from[0]],
              ]"
              color="#EC6834"
            ></l-polyline>
          </l-map>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { trip: Object, from: Array, to: Array },
  methods: {
    async reserveTrip() {
      if (this.$auth.loggedIn) {
        const reservation = await this.$axios.$post(
          `/trips/reserve/${this.trip.id}`
        )
      } else {
        this.$router.push('/connexion')
      }
    },
  },
}
</script>

<style>
</style>