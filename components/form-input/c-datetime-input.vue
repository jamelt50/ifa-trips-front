<template>
  <div class="flex h-10">
    <img class="w-4 ml-2" src="/calendar.svg" />
    <input
      class="outline-none flex-grow h-full py-2 pl-3 bg-transparent"
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
  props: ['default', 'full'],
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
      dateFormat: this.full ? 'Y-m-d H:i' : 'Y-m-d',
      enableTime: this.full ? true : false,
      defaultDate: this.default ? this.default : 'today',
      minDate: 'today',
    })
    if (this.default) {
      this.$refs.datePicker.value = this.default
      this.$refs.datePicker.dispatchEvent(new Event('input'))
      this.handleInput(this.default)
    }else{
      this.$refs.datePicker.dispatchEvent(new Event('input'))
       this.$emit('input', this.date)
    }
  },
}
</script>

<style>
</style>