<template>
  <div class="md:min-h-screen md:flex justify-center items-center md:p-6">
    <div
      class="
        w-full
        h-screen
        md:h-auto
        max-w-6xl
        bg-white
        text-blue
        p-3
        md:p-6 md:rounded-2xl
        overflow-hidden
      "
    >
      <client-only>
        <c-message-conversation-listing :conversations="conversations" />
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'page',
  middleware: 'auth',
  head: {
    title: 'Mes messages | Ifa trips',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Liste de votre derniers messages',
      },
    ],
  },
  async asyncData({ $axios }) {
    try {
      let conversations = await $axios.$get('/messages/list')
      return {
        conversations: conversations,
      }
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style>

</style>