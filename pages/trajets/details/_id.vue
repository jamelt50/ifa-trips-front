<template>
  <c-padding
    class="
      min-h-screen
      flex flex-col
      justify-center
      items-cente
      max-w-screen-lg
      mx-auto
    "
  >
    <div class="flex justify-between items-center w-full">
      <c-button @click.prevent="$router.back()" color="orange py-2 px-4 rounded-2xl flex items-center"
        ><img class="pr-3" src="/back-arrow.svg" alt="" /> Retour</c-button
      >
      <h1
        class="
          text-3xl
          sm:text-4xl
          md:text-6xl
          text-center
          md:text-left
          font-bold
        "
      >
        {{
          new Date(trip.date).toLocaleString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        }}
      </h1>
    </div>
    <c-trip-details :trip="trip" />
  </c-padding>
</template>

<script>
export default {
  transition: 'page',
  middleware: 'auth',
  async asyncData({ $axios, route }) {
    const id = route.params.id
    const trip = await $axios.$get('/trips/find/' + id)
    const from = await $axios.get(
      process.env.GEO_API_URL + 'communes/' + trip.from_city_id
    )
    const to = await $axios.get(
      process.env.GEO_API_URL + 'communes/' + trip.to_city_id
    )
    trip.from = from.data
    trip.to = to.data
    return { trip }
  },
}
</script>

<style>
</style>