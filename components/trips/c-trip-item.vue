<template>
  <nuxt-link
    :to="'/trajets/details/' + trip.id"
    class="
      block
      bg-white
      rounded-2xl
      p-8
      w-full
      my-6
      text-blue
      hover:opacity-90
      cursor-pointer
      transition-all
      max-w-3xl
      z-0
    "
  >
    <div class="flex justify-between items-center">
      <div class="w-3/4">
        <c-trip-from-to :from="from.nom" :to="to.nom" />
      </div>

      <div>
        <span class="text-xl font-bold">{{ trip.price }}€</span>
      </div>
    </div>
    <div class="flex justify-between items-center mt-10">
      <c-trip-driver :driver="trip.driver" />
      <c-seats-indicator :seats="trip.seats" />
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['trip'],
  data() {
    return {
      from: '',
      to: '',
    }
  },
  async mounted() {
    const from = await this.$axios.get(
      process.env.GEO_API_URL + 'communes/' + this.trip.from_city_id
    )
    const to = await this.$axios.get(
      process.env.GEO_API_URL + 'communes/' + this.trip.to_city_id
    )
    this.from = from.data
    this.to = to.data
  },
}
</script>

<style></style>
