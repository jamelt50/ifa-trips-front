<template>
  <div class="mt-48 flex justify-center px-12">
    <div class="w-full max-w-6xl">
      <div class="flex justify-between items-center mb-16">
        <h1 class="text-6xl text-center font-bold">Chercher un trajet</h1>
        <img src="/offroad.svg" />
      </div>
      <div class="my-16">
        <c-search-bar class="mx-auto" />
      </div>

      <c-single-trip class="mx-auto" v-for="n in 10" :key="n" />
    </div>
  </div>
</template>

<script>
export default {
  transition: 'page',
}
</script>

<style></style>
