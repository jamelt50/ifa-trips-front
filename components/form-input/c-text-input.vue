<template>
  <div class="w-full mb-1 md:mb-2">
    <label class="block  mb-1 md:mb-2 text-sm md:text-md" for="email">{{ label }}</label>
    <input
      v-if="!isTextarea"
      :placeholder="placeholder"
      :class="`rounded-2xl h-10 px-6 w-full text-blue outline-none focus:opacity-100 transition-opacity opacity-80 ${color} ${
        error ? 'error' : ''
      }`"
      :type="type"
      :name="name"
      autocomplete="new-password"
      @input="$emit('input', $refs.input.value)"
      ref="input"
      :required="required"
    />
    <textarea
      v-else
      :placeholder="placeholder"
      :class="
        'rounded-2xl h-24 px-6 py-3 w-full text-blue outline-none focus:opacity-100 transition-opacity opacity-80  ' +
        color
      "
      :type="type"
      :name="name"
      autocomplete="new-password"
      @input="$emit('input', $refs.input.value)"
      ref="input"
      :required="required"
    >
    </textarea>
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
    isTextarea: { type: Boolean },
    error: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
  },
}
</script>
<style lang="scss" scoped>
.outline {
  border: 1px solid var(--blue);
  background-color: var(--white);
}
.error {
  border: 1px solid var(--red) !important;
  color: var(--red) !important;
  &::placeholder {
    color: var(--red) !important;
  }
}
</style>
