<template>
  <div class="w-full mb-2">
    <label class="block mb-2" for="email">{{ label }}</label>
    <input
      v-if="!isTextarea"
      :placeholder="placeholder"
      :class="'rounded-2xl h-9 px-6 w-full text-blue outline-none focus:opacity-100 transition-opacity opacity-80 ' + color"
      :type="type"
      :name="name"
      autocomplete="new-password"
      @input="$emit('input', $refs.input.value)"
      ref="input"
    />
    <textarea
      v-else
      :placeholder="placeholder"
      :class="'rounded-2xl h-24 px-6 py-3 w-full text-blue outline-none focus:opacity-100 transition-opacity opacity-80  ' + color"
      :type="type"
      :name="name"
      autocomplete="new-password"
      @input="$emit('input', $refs.input.value)"
      ref="input"
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
  },
}
</script>
<style lang="scss" scoped>
.outline {
  border: 1px solid var(--blue);
  background-color: var(--white);
}
</style>
