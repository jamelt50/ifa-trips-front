<template>
  <div class="flex">
    <img class="w-4" src="/calendar.svg" />
    <input
      class="
        bg-transparent
        border-r border-blue
        outline-none
        flex-grow
        h-12
        md:h-auto
        py-3
        md:py-2
        px-2
      "
      v-model="date"
      @change="handleInput($refs.datePicker.value)"
      placeholder="Aujourd'hui"
      ref="datePicker"
    />
  </div>
</template>

<script>
import flatpickr from 'flatpickr'
import 'flatpickr/dist/themes/dark.css'
export default {
  props: ['default'],
  data() {
    return { date: '' }
  },
  methods: {
    handleInput(data) {
      this.$emit('input', data)
    },
  },
  mounted() {
    flatpickr(this.$refs.datePicker, {
      dateFormat: 'Y-m-d',
      defaultDate: this.default ? this.default : 'today',
      minDate: 'today',
    })
    if (this.default) {
      this.$refs.datePicker.value = this.default
      this.$refs.datePicker.dispatchEvent(new Event('input'))
      this.handleInput(this.default)
    }
  },
}
</script>

<style>
</style>