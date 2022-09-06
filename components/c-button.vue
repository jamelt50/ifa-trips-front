<template>
  <button
    v-if="!to"
    :disabled="disabled"
    @click="$emit('clicked')"
    :class="
      'font-bold block md:text-xl hover:opacity-90 transition-all px-6 py-1 ' +
      color +
      (rounded ? ' rounded-2xl' : '')
    "
  >
    <slot></slot>
  </button>
  <nuxt-link
    :class="
      'font-bold block md:text-xl hover:opacity-90 transition-all px-6 py-1 ' +
      color +
      (rounded ? ' rounded-2xl' : '')
    "
    :to="to"
    v-else
  >
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    color: { type: String },
    to: { type: String },
    classes: { type: String },
    disabled: { type: Boolean },
    rounded: { type: Boolean, default: true },
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
.red {
  background-color: var(--red);
  color: var(--white);
}
.green {
  background-color: var(--green);
  color: var(--white);
}
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