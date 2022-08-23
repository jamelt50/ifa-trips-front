<template>
  <div class="flex justify-between items-center w-max">
    <img src="/available.svg" />
    <h3 class="mx-3 text-2xl font-bold">{{ seats }}</h3>
  </div>
</template>

<script>
export default {
  props: { seats: Number },
}
</script>

<style>
</style>