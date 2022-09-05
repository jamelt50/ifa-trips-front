<template>
  <nuxt-link
    :to="'/trajets/details/' + trip.id"
    class="
      block
      bg-white
      rounded-2xl
      p-8
      w-full
      my-6
      text-blue
      hover:opacity-90
      cursor-pointer
      transition-all
      max-w-3xl
      z-0
    "
  >
    <div class="flex justify-between items-center">
      <div class="w-3/4">
        <c-trip-from-to :from="trip.from.nom" :to="trip.to.nom" />
      </div>

      <div>
        <span class="text-xl font-bold">{{ trip.price }}€</span>
      </div>
    </div>
    <div class="flex justify-between items-center mt-10">
      <c-person :person="trip.driver" />
      <c-seats-indicator :seats="trip.seats" />
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['trip'],
}
</script>

<style></style>
