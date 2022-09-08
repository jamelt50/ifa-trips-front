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
    <div class="flex justify-between items-center w-full mt-8">
      <c-button
        class="flex justify-center items-center"
        @clicked="$router.back()"
        color="orange"
        ><img class="pr-3" src="/back-arrow.svg" alt="" /> Retour</c-button
      >
      <h1
        class="
          text-xl
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
    <transition name="pop-up">
      <c-trip-details v-if="trip" :trip="trip"
    /></transition>
  </c-padding>
</template>

<script>
export default {
  transition: 'page',
  head() {
    return {
      title:  `${this.trip.from.name} a ${this.trip.to.name} | Ifa trips`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            `voyager de ${this.trip.from.name} a ${this.trip.to.name} avec Ifa trips`,
        },
      ],
    }
  },
  async asyncData({ $axios, route }) {
    const id = route.params.id
    const trip = await $axios.$get('/trips/find/' + id)

    return { trip }
  },
}
</script>

<style>
</style>