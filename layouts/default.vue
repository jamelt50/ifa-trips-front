<template>
  <div>
    <c-navbar class="px-4 md:px-10 lg:px-12"/>
    <Nuxt class="min-h-screen mt-20" />
    <c-footer/>
  </div>
</template>

<script>
export default {
mounted(){
// console.log(this.$auth.strategy.refreshToken.status());
}
}
</script>

<style>
</style>