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
      @click="toggleMobileNav"
      :class="{ cross: mobileNavOpen }"
      class="
        md:hidden
        w-6
        h-6
        flex flex-col
        justify-around
        items-center
        navbar__mobile-toggler
        z-20
      "
    >
      <div class="w-full bg-white navbar__mobile-toggler-line"></div>
      <div class="w-full bg-white navbar__mobile-toggler-line"></div>
      <div class="w-full bg-white navbar__mobile-toggler-line"></div>
    </button>
    <c-logo></c-logo>

    <div class="flex justify-between z-10">
      <transition  name="pop-up">
        <nav
          v-if="mobileNavOpen"
          class="
            flex
            bg-blue
            md:bg-transparent
            top-0
            left-0
            md:left-auto md:top-auto
            fixed
            h-screen
            md:h-auto
            w-full
            md:w-auto md:static
            items-center
            justify-center
          "
        >
          <ul class="flex flex-col md:flex-row items-center w-full">
            <li class="m-4 cursor-pointer hover:text-orange transition-all">
              <nuxt-link class="text-3xl md:text-xl" to="/">Accueil</nuxt-link>
            </li>
            <li class="m-4 cursor-pointer hover:text-orange transition-all">
              <nuxt-link class="text-3xl md:text-xl" to="/trajets/search"
                >Trajets</nuxt-link
              >
            </li>
            <li
              v-if="!$auth.loggedIn"
              class="m-4 cursor-pointer hover:text-orange transition-all"
            >
              <nuxt-link class="text-3xl md:text-xl" to="/inscription"
                >Inscription</nuxt-link
              >
            </li>
            <li
              v-if="!$auth.loggedIn"
              class="m-4 cursor-pointer hover:text-orange transition-all"
            >
              <nuxt-link class="text-3xl md:text-xl" to="/connexion">Connexion</nuxt-link>
            </li>
          </ul>
        </nav>
      </transition>
      <c-dropdown-menu class="ml-3" v-if="$auth.loggedIn" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbarBackground: false,
      mobileNavOpen: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll.bind(this))
    window.addEventListener('resize', this.handleResize.bind(this))
    this.handleResize()
  },
  watch: {
    $route() {
      if (!window.matchMedia('(min-width:768px)').matches) {
        this.mobileNavOpen = false
      }
    },
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
    handleResize() {
      if (window.matchMedia('(min-width:768px)').matches) {
        this.mobileNavOpen = true
      } else if (
        window.matchMedia('(max-width:768px)').matches &&
        this.mobileNavOpen
      ) {
        this.mobileNavOpen = false
      }
    },
    toggleMobileNav() {
      this.mobileNavOpen = !this.mobileNavOpen
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  &__mobile-toggler {
    &.cross {
      .navbar__mobile-toggler-line {
        &:first-of-type {
          transform: translateY(0.5rem) rotate(45deg);
        }
        &:last-of-type {
          transform: translateY(-0.5rem) rotate(-45deg);
        }
        &:nth-last-of-type(2) {
          transform: translateX(115px);
          opacity: 0;
        }
      }
    }
    &-line {
      height: 2px;
      transform-origin: center;
      transition: all 0.4s ease-in-out;
    }
  }
}

</style>