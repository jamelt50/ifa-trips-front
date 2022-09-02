<template>
  <div
    class="border flex flex-col justify-between border-blue h-64 rounded-2xl"
  >
    <div
      ref="container"
      class="overflow-scroll w-full pt-12"
      v-if="conversation"
    >
      <c-single-message
        :message="message"
        v-for="message in conversation.messages"
        :key="message.id"
      />
    </div>
    <div v-else class="h-64"></div>
    <c-message-form @send="send" />
  </div>
</template>

<script>
export default {
  props: { io: { type: Object }, conversation: { type: Object }},
  data() {
    return {
      mounted: false,
    }
  },
  mounted() {
    this.mounted = true
    this.scrollDown()
  },
  watch: {
    conversation: {
      immediate: true,
      deep: true,
      handler() {
        if (this.mounted) {
          this.scrollDown()
        }
      },
    },
  },
  methods: {
    scrollDown() {
      if (this.$refs.container) {
        setTimeout(() => {
          this.$refs.container.scrollTop = this.$refs.container.scrollHeight
        }, 200)
      }
    },
    async send(message) {
      if (this.conversation) {
        await this.$axios.$post('/messages/send', {
          message: message,
          room: this.conversation.id,
        })
      } 
    },
  },
}
</script>

<style>
</style>