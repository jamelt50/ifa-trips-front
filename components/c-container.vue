<template>
  <div :class="bg" class="w-full">
    <div class="px-4 md:px-10 lg:px-12 w-full">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ['bg'],
}
</script>

<style>
</style>