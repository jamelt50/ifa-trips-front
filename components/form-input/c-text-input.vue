<template>
  <div class="w-full mb-2">
    <label class="block mb-2" for="email">{{ label }}</label>
    <input
      :placeholder="placeholder"
      :class="'rounded-2xl h-9 px-6 w-full text-blue ' + color"
      :type="type"
      :name="name"
      autocomplete="new-password"
      @input="$emit('input', $refs.input.value)"
      ref="input"
    />
  </div>
</template>

<script>
export default {
  mounted() {
    if (this.default) {
      this.$refs.input.value = this.default
      this.$refs.input.dispatchEvent(new Event('input'))
    }
  },
  props: {
    type: { type: String, default: 'text' },
    name: { type: String },
    placeholder: { type: String },
    label: { type: String },
    color: { type: String },
    default: { type: String },
    autocomplete: { type: String, default: 'off' },
  },
}
</script>
<style lang="scss" scoped>
.outline {
  border: 2px solid var(--blue);
  background-color: var(--white);
}
</style>
