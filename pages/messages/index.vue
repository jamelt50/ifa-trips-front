<template>
  <c-padding class="min-h-screen flex justify-center items-center">
    <div class="w-full max-w-6xl bg-white text-blue p-6 rounded-2xl">
      <div class="mb-3">
        <c-button @clicked="$router.push('/')" color="orange">Retour</c-button>
      </div>
      <client-only>
        <c-message-conversation-listing
          :conversations="conversations"
        />
      </client-only>
    </div>
  </c-padding>
</template>

<script>
export default {
  transition: 'page',
  middleware: 'auth',
  async asyncData({ $axios, route }) {
    let conversations = await $axios.$get('/messages/list')
    return {
      conversations: conversations,
    }
  },
}
</script>

<style>
</style>