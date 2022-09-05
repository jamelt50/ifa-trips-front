<template>
  <span
    :class="
      'font-bold block md:text-xl hover:opacity-90 transition-all px-6 py-1 rounded-2xl ' +
      color
    "
  >
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    color: { type: String },
  },
}
</script>

<style lang="scss" scoped>
.red-outline {
  border: 1px solid var(--red);
  color: var(--red);
}
.green-outline {
  border: 1px solid var(--green);
  color: var(--green);
}
.outline {
  border: 1px solid var(--blue);
  color: var(--blue);
}
</style>