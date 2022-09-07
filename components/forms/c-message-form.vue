<template>
  <div class="py-3 px-2 w-full">
    <div
      @submit.prevent
      class="
        flex
        justify-between
        items-center
        w-full
        border border-blue
        rounded-2xl
        overflow-hidden
        isolate
      "
    >
      <input
        @keyup.enter="send"
        class="flex-grow bg-transparent h-10 pl-6 outline-none"
        type="text"
        v-model="message"
        required
        placeholder="Votre message..."
      />
      <c-button
        @clicked="send"
        class="flex-grow-0 h-10"
        :rounded="false"
        color="blue"
        >Envoyer</c-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
    }
  },
  methods: {
    send() {
      this.$emit('send', this.message)
      this.message = ''
    },
  },
}
</script>

<style>
</style>