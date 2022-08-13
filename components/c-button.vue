<template>
  <button
    :disabled="disabled"
    @click="$emit('clicked')"
    :class="
      'font-bold text-xl hover:opacity-90 transition-all ' +
      color +
      ' ' +
      classes
    "
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    color: { type: String },
    classes: { type: String },
    disabled: { type: Boolean },
  },
}
</script>

<style lang="scss" scoped>
.orange {
  background-color: var(--orange);
  color: var(--white);
}
.blue {
  background-color: var(--blue);
  color: var(--white);
}
.white {
  background-color: var(--white);
  color: var(--blue);
}
</style>