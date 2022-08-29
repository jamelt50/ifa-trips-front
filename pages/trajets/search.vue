<template>
  <c-container>
    <div class="mt-48 flex justify-center">
      <div class="w-full max-w-6xl">
        <div class="md:flex justify-between items-center mb-22">
          <div class="w-full md:w-1/2">
            <h1
              class="
                text-3xl
                sm:text-4xl
                md:text-6xl
                text-center
                md:text-left
                mb-12
                font-bold
              "
            >
              Chercher un trajet
            </h1>
          </div>
          <div class="w-full flex justify-center items-center md:w-1/2">
            <img class="w-full max-w-md" src="/offroad.svg" />
          </div>
        </div>
        <div class="my-16">
          <c-search-bar :searched="searched" class="mx-auto" />
        </div>

        <c-trip-item
          class="mx-auto"
          v-for="trip in trips"
          :key="trip.id"
          :trip="trip"
        />
      </div>
    </div>
  </c-container>
</template>

<script>
export default {
  transition: 'page',
  watchQuery: true,

  async asyncData({ query, $axios }) {
    const searched = {
      from: query.from,
      to: query.to,
      date: query.date,
      people: query.people,
    }
    let trips
    if (!Object.values(searched).some((x) => x === null || x === '' ||x === undefined)) {
      trips = await $axios.$get('/trips/search', {
        params: searched,
      })
    } else {
      trips = { search: [] }
    }
    return { trips: trips.search, searched }
  },
}
</script>

<style></style>
