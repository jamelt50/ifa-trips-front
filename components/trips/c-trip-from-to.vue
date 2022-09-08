<template>
  <div class="flex justify-between items-center">
    <div class="flex-grow-0">
      <h2 class="xl:text-xl font-bold">{{ from }}</h2>
    </div>
    <div class="flex-grow flex justify-between items-center h-1 bg-blue mx-3">
      <div class="h-2 w-2 bg-blue rounded-full"></div>
      <div class="h-2 w-2 bg-blue rounded-full"></div>
    </div>
    <div class="flex-grow-0">
      <h2 class="xl:text-xl font-bold">{{ to }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: { from: String, to: String },
}
</script>

<style>
</style>