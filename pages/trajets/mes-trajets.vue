<template>
  <div class="min-h-screen flex justify-center items-center md:p-6">
    <div class="w-full h-screen max-h-5-6 md:h-auto max-w-6xl bg-white text-blue p-3 md:p-6 md:rounded-2xl overflow-hidden">
      <div class="mb-1">
        <c-button @clicked="$router.push('/trajets/cree')" color="blue">{{
          'Proposer'
        }}</c-button>
      </div>

      <c-trip-listing v-if="trips.length" :trips="trips" />
    </div>
  </div>
</template>

<script>
export default {
  transition: 'page',
  middleware: 'auth',
  async asyncData({ $axios }) {
    const trips = await $axios.$get('/trips/my-trips')
    return { trips }
  },
}
</script>

<style>
.max-h-5-6 {
max-height: 80vh;
}
</style>