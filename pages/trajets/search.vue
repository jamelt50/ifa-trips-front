<template>
  <c-container>
    <div class="mt-28 md:mt-48 flex justify-center">
      <div class="w-full max-w-6xl">
        <div class="md:flex justify-between items-center">
          <div class="w-full md:w-1/2">
            <transition name="mobile-nav-fade">
              <h1
                class="
                  text-3xl
                  sm:text-4xl
                  md:text-6xl
                  text-center
                  md:text-left
                  mb-8
                  md:mb-0
                  font-bold
                "
              >
                Chercher un trajet
              </h1>
            </transition>
          </div>
          <div class="w-full flex justify-center items-center md:w-1/2">
            <img class="w-5/6 md:w-full max-w-md" src="/offroad.svg" />
          </div>
        </div>
        <div class="my-16">
          <transition name="pop-in">
            <c-search-bar :searched="searched" class="mx-auto"
          /></transition>
        </div>
        <transition-group name="switch">
          <c-trip-item
            class="mx-auto"
            v-for="trip in trips"
            :key="trip.id"
            :trip="trip"
          />
        </transition-group>
      </div>
    </div>
  </c-container>
</template>

<script>
export default {
  transition: 'page',
  watchQuery: true,
  head: {
    title: 'Rechercher un trajet | Ifa trips',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'rechercher et reserver un trajets simplement avec Ifa trips',
      },
    ],
  },

  async asyncData({ query, $axios }) {
    const searched = {
      from: query.from,
      to: query.to,
      date: query.date,
      people: query.people,
    }
    let trips
    if (
      !Object.values(searched).some(
        (x) => x === null || x === '' || x === undefined
      )
    ) {
      trips = await $axios.$get('/trips/search', {
        params: searched,
      })
    } else {
      trips = { search: [] }
    }
    return { trips: trips.data, searched }
  },
}
</script>

<style></style>
