<template>
  <div
    class="
      flex
      justify-between
      items-center
      py-6
      fixed
      top-0
      left-0
      w-full
      z-20
      transition-all
    "
    ref="navbar"
  >
    <button
      class="
        md:hidden
        w-6
        h-6
        flex flex-col
        justify-around
        items-center
        navbar__mobile-toggler
      "
    >
      <div class="w-full bg-white navbar__mobile-toggler-line"></div>
      <div class="w-full bg-white navbar__mobile-toggler-line"></div>
      <div class="w-full bg-white navbar__mobile-toggler-line"></div>
    </button>
    <c-logo></c-logo>

    <div class="flex justify-between items-center">
      <nav class="hidden md:block">
        <ul class="flex">
          <li class="mx-4 cursor-pointer hover:text-orange transition-all">
            <nuxt-link class="text-xl" to="/">Acceuil</nuxt-link>
          </li>
          <li class="mx-4 cursor-pointer hover:text-orange transition-all">
            <nuxt-link class="text-xl" to="/trajets/search">Trajets</nuxt-link>
          </li>
          <li
            v-if="!$auth.loggedIn"
            class="mx-4 cursor-pointer hover:text-orange transition-all"
          >
            <nuxt-link class="text-xl" to="/inscription">Inscription</nuxt-link>
          </li>
          <li
            v-if="!$auth.loggedIn"
            class="mx-4 cursor-pointer hover:text-orange transition-all"
          >
            <nuxt-link class="text-xl" to="/connexion">Connexion</nuxt-link>
          </li>
        </ul>
      </nav>

      <c-dropdown-menu class="ml-3" v-if="$auth.loggedIn" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbarBackground: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll.bind(this))
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 0 && !this.navbarBackground) {
        this.$refs.navbar.classList.add('bg-dark-blue')
        this.navbarBackground = true
      } else if (window.scrollY === 0 && this.navbarBackground) {
        this.$refs.navbar.classList.remove('bg-dark-blue')
        this.navbarBackground = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  &__mobile-toggler {
    &-line {
      height: 2px;
    }
  }
}
</style>