<template>
  <div :class="classes" class="w-full">
    <c-padding>
      <slot />
    </c-padding>
  </div>
</template>

<script>
export default {
  props: ['classes'],
}
</script>

<style>
</style>