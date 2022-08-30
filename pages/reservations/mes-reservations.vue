<template>
  <c-padding class="min-h-screen flex justify-center items-center">
    <div class="w-full max-w-6xl bg-white text-blue p-6 rounded-2xl">

      <c-reservation-listing :reservations="reservations" />
    </div>
  </c-padding>
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
</style>