<template>
  <div class="flex flex-col justify-center items-center">
    <h1 class="text-6xl text-center mb-16 font-bold">Inscription</h1>
    <c-register-form />
  </div>
</template>

<script>
export default {
  transition: 'page',
  middleware: 'auth',
  auth: 'guest'

}
</script>

<style>
</style>