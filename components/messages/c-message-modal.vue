<template>
  <div
    class="
      fixed
      top-0
      left-0
      h-screen
      w-full
      modal-z-index
      flex
      justify-center
      items-center
    "
  >
    <div
      class="bg-black opacity-90 w-full h-full fixed top-0 left-0 modal-z-index"
    ></div>
    <c-padding class="flex justify-center items-center">
      <div
        class="
          bg-white
          rounded-2xl
          modal-z-index
          flex flex-col
          justify-center
          p-3
          md:p-8
          relative
          max-w-md
        "
      >
        <h2 class="text-3xl font-bold my-2">Contacter</h2>
        <p class="opacity-70 mb-3">
          Contacter le conducteur pour des informations additionels
        </p>
        <c-person class="my-6" v-if="trip" :person="trip.driver" />
        <c-message-form @send="send" />
        <c-button @clicked="$emit('close')" class="absolute top-0 right-0"
          >X</c-button
        >
      </div>
    </c-padding>
  </div>
</template>

<script>
export default {
  props: { trip: { type: Object } },
  data() {
    return {
      message: '',
    }
  },
  methods: {
    async send(message) {
      this.$store.dispatch('sendMessage', { message, room: this.trip.id })
      this.$router.push({
        path: '/messages',
      })
    },
  },
}
</script>

<style  lang="scss">
.modal-z-index {
  z-index: 4000;
}
</style>