<template>
  <div
    class="border flex flex-col justify-between border-blue h-full md:h-80  rounded-2xl"
  >
    <div
      ref="container"
      class="overflow-scroll w-full pt-12 scroll"
      v-if="$store.state.activeConversation"
    >
      <c-single-message
        :message="message"
        v-for="message in $store.state.activeConversation.messages"
        :key="message.id"
      />
    </div>
    <div v-else class="h-full md:h-80"></div>
    <c-message-form @send="send" />
  </div>
</template>

<script>
export default {
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
    '$store.state.activeConversation.messages': {
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
        }, 400)
      }
    },
    async send(message) {
      if (this.$store.state.activeConversation) {
        this.$store.dispatch('sendMessage', {
          message,
          room: this.$store.state.activeConversation.id,
        })
      }
    },
  },
}
</script>

<style scoped>
.scroll {
  scroll-behavior: smooth;
}
</style>