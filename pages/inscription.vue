<template>
  <c-padding class="flex flex-col justify-center items-center">
    <h1 class="lg:text-6xl md:text-4xl text-3xl text-center lg:mb-16 md:mb-12  font-bold">Inscription</h1>
    <c-register-form />
  </c-padding>
</template>

<script>
export default {
  transition: 'page',
  middleware: 'auth',
  auth: 'guest',
  head: {
    title: 'Inscription | Ifa trips',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Inscrivez vous maintenant pour effectuer votre premier trajet',
      },
    ],
  },

}
</script>

<style>
</style>