<template>
  <div
    class="
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
      <div class="w-3/4 flex justify-between items-center">
        <div>
          <h2 class="text-xl font-bold">{{ from.nom }}</h2>
        </div>
        <div>
          <h2 class="text-xl font-bold">{{ to.nom }}</h2>
        </div>
      </div>
      <div><span class="text-xl font-bold">{{ trip.price }}€</span></div>
    </div>
    <div class="flex justify-between items-center mt-10">
      <div class="flex justify-between items-center">
        <img src="/avatar-filled.svg" />
        <h3 class="mx-3 text-2xl font-bold">Virginie</h3>
      </div>
      <div class="flex justify-between items-center">
        <img src="/available.svg" />
        <h3 class="mx-3 text-2xl font-bold">{{ trip.seats }}</h3>
      </div>
    </div>
  </div>
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

<style>
</style>