<template>
  <div class="flex justify-between items-center px-10 py-6">
    <c-logo></c-logo>
    <button class="md:hidden w-8">
      <div class="h-1 w-full bg-orange my-1"></div>
      <div class="h-1 w-full bg-orange my-1"></div>
      <div class="h-1 w-full bg-orange my-1"></div>
    </button>
    <nav class="hidden md:block">
      <ul class="flex">
        <li class="mx-4 cursor-pointer hover:text-orange transition-all">
          <nuxt-link class="text-xl" to="/">Acceuil</nuxt-link>
        </li>
        <li class="mx-4 cursor-pointer hover:text-orange transition-all">
          <nuxt-link class="text-xl" to="/trajets">Trajets</nuxt-link>
        </li>
        <li class="mx-4 cursor-pointer hover:text-orange transition-all">
          <nuxt-link class="text-xl" to="/inscription">Inscription</nuxt-link>
        </li>
        <li class="mx-4 cursor-pointer hover:text-orange transition-all">
          <nuxt-link class="text-xl" to="/connexion">Connexion</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

