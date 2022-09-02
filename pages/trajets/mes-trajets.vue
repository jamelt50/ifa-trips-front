<template>
  <c-padding class="min-h-screen flex justify-center items-center">
    <div class="w-full max-w-6xl bg-white text-blue p-6 rounded-2xl">
      <div class="mb-3">
        <c-button @clicked="$router.push('/trajets/cree')" color="orange">{{
          'Proposer'
        }}</c-button>
      </div>

      <c-trip-listing v-if="trips.length" :trips="trips" />
    </div>
  </c-padding>
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
</style>