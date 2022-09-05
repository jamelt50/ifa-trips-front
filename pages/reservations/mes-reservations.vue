<template>
  <div class="min-h-screen flex justify-center items-center">
    <div class="w-full h-screen max-h-5-6 md:h-auto max-w-6xl bg-white text-blue p-3 md:p-6 md:rounded-2xl">

      <c-reservation-listing v-if="reservations.length" :reservations="reservations" />
    </div>
  </div>
</template>

<script>
export default {
  transition: 'page',
  middleware: 'auth',
  async asyncData({ $axios }) {
    const reservations = await $axios.$get('/reservations/my-reservations')
    return { reservations }
  },
}
</script>

<style>
.max-h-5-6 {
max-height: 80vh;
}
</style>