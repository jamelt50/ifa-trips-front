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
      <c-button
        class="flex justify-center items-center"
        @clicked="$router.back()"
        color="orange"
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
  async asyncData({ $axios, route }) {
    const id = route.params.id
    const trip = await $axios.$get('/trips/find/' + id)

    return { trip}
  },
}
</script>

<style>
</style>