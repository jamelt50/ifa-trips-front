<template>
  <div
    class="fixed h-screen w-full top-0 left-0 justify-center items-center flex"
  >
    <div
      class="bg-black opacity-90 w-full h-full fixed top-0 left-0 z-40"
    ></div>
    <div class="relative z-50">
      <c-button
        color="orange"
        @clicked="$emit('close')"
        class="absolute -top-12 right-2 "
        >X</c-button
      >
      <c-trip-map
        :style="{ height: height + 'px', width: width + 'px' }"
        :to_city_id="to_city_id"
        :from_city_id="from_city_id"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: { to_city_id: String, from_city_id: String },
  data() {
    return {
      width: 0,
      height: 0,
      handler: null,
    }
  },
  mounted() {
    this.resize()
    this.handler = this.resize.bind(this)
    window.addEventListener('resize', this.handler)
  },
  destroy() {
    window.removeEventListener('resize', this.handler)
  },
  methods: {
    resize() {
      if (window.innerWidth > 1300) {
        this.width = window.innerWidth - window.innerWidth / 2
        this.height = this.width / (16 / 9)
      } else if (window.innerWidth > 998) {
        this.width = window.innerWidth - window.innerWidth / 4
        this.height = this.width / (16 / 9)
      } else if (window.innerWidth > 768) {
        this.width = window.innerWidth - window.innerWidth / 8
        this.height = this.width / (16 / 9)
      } else {
        this.width = window.innerWidth - 30
        this.height = window.innerHeight / 2
      }
    },
  },
}
</script>

<style>
</style>