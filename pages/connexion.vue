<template>
  <c-padding class="flex flex-col justify-center items-center">
    <h1 class="lg:text-6xl md:text-4xl text-3xl text-center lg:mb-16 md:mb-12  font-bold">Se Connecter</h1>
    <c-login-form />
  </c-padding>
</template>

<script>
export default {
  transition: 'page',
  middleware: 'auth',
  auth: 'guest',
  head: {
    title: 'Connexion | Ifa trips',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Connectez vous maintenant pour effectuer votre premier trajet',
      },
    ],
  },
}
</script>

<style>
</style>