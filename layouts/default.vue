<template>
  <div>
    <c-navbar class="px-4 md:px-10 lg:px-12" />
    <Nuxt class="min-h-screen mt-20" />
    <c-footer />
  </div>
</template>

<script>
export default {
  watch: {
    '$auth.loggedIn': {
      immediate: true,
      deep: true,
      handler() {
        if (this.$auth.loggedIn) {
          this.$store.dispatch('init')
        }
      },
    },
    $route() {
      if (
        this.$route.name != 'messages' &&
        this.$store.state.activeConversation
      ) {
        this.$store.commit('selectConversation', null)
      }
    },
  },
}
</script>

<style>
</style>