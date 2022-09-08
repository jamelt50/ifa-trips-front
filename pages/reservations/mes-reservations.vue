<template>
  <div class="min-h-screen md:flex justify-center items-center md:p-6">
    <div
      class="
        w-full
        h-screen
        md:h-auto
        max-w-6xl
        bg-white
        text-blue
        p-3
        md:p-6 md:rounded-2xl
        overflow-hidden
      "
    >
      <c-reservation-listing
        :reservations="reservations"
      />
    </div>
  </div>
</template>

<script>
export default {
  transition: 'page',
  middleware: 'auth',
  head: {
    title: 'Mes réservations | Ifa trips',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Liste de votre dernieres réservations',
      },
    ],
  },
  async asyncData({ $axios }) {
    try {
      const reservations = await $axios.$get('/reservations/my-reservations')
      return { reservations }
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style>

</style>