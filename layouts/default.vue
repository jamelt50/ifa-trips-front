<template>
  <div>
    <c-navbar class="fixed top-0 left-0 w-full bg-blue z-20"></c-navbar>
    <Nuxt class="min-h-screen my-20" />
    <c-footer></c-footer>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>