<template>
  <c-padding>
    <div
      class="
        flex flex-col-reverse
        md:mx-auto md:w-5/6 md:flex-row
        justify-center
        h-screen
        md:justify-between
        items-center
      "
    >
      <transition name="mobile-nav-fade">
        <div v-if="loaded" class="flex flex-col justify-center items-start p-4">
          <h1 class="lg:text-6xl md:text-5xl text-3xl">Page introuvable</h1>
          <c-button class="mt-8" color="orange" @clicked="$router.push('/')"
            >Retourner a l’acceuil</c-button
          >
        </div>
      </transition>
      <transition name="pop-up">
        <div v-if="loaded" class="flex justify-center items-center p-4">
          <img class="w-4/5" src="/error.svg" />
        </div>
      </transition>
    </div>
  </c-padding>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default',
  data() {
    return { loaded: false }
  },
  mounted() {
    this.loaded = true
  },
}
</script>