<template>
  <div class="relative justify-center items-center flex dropdown-menu">
    <button
      class="flex justify-between items-center relative"
      @click="dropdownOpen = !dropdownOpen"
    >
      <transition name="pop-up">
        <div
          v-if="$store.state.notification"
          class="
            w-5
            h-5
            bg-orange
            rounded-full
            absolute
            bottom-0
            left-0
            flex
            justify-center
            items-center
          "
        >
          <img class="w-43" src="/notification.svg" /></div
      ></transition>
      <div
        v-if="$auth.user.profile_pic"
        class="bg-white rounded-full overflow-hidden"
      >
        <img class="w-10 h-10" :src="$auth.user.profile_pic" />
      </div>
      <div v-else class="bg-white  rounded-full w-10 h-10 justify-center items-center flex">
        <img  src="/avatar.svg" />
      </div>

      <img
        class="transform transition-transform w-4 md:w-6 ml-2"
        :class="{ 'rotate-180': dropdownOpen }"
        src="/arrow.svg"
      />
    </button>
    <transition name="pop-up">
      <div
        class="
          absolute
          top-full
          right-0
          bg-white
          text-blue
          px-6
          py-2
          rounded-2xl
          max-w-sm
          shadow-xl
          transform
          translate-y-3
          dropdown-menu__dropdown
        "
        v-if="dropdownOpen"
      >
        <nav>
          <ul>
            <li
              :class="{
                'text-orange': $router.currentRoute.path == '/profile',
              }"
              class="
                hover:border-orange
                transition-all
                hover:text-orange
                dropdown-menu__item
              "
            >
              <nuxt-link class="py-2 block" to="/profile"
                >Mon Profile</nuxt-link
              >
            </li>
            <li
              :class="{
                'text-orange': $router.currentRoute.path == '/messages',
              }"
              class="
                hover:border-orange
                transition-all
                hover:text-orange
                dropdown-menu__item
              "
            >
              <nuxt-link class="py-2                 justify-between
                items-center
                flex" to="/messages"
                >Mes messages
                <div
                  v-if="$store.state.notification"
                  class="
                    w-5
                    h-5
                    bg-orange
                    rounded-full
                    flex
                    justify-center
                    items-center
                  "
                >
                  <img class="w-3" src="/notification.svg" /></div
              ></nuxt-link>
            </li>
            <li
              :class="{
                'text-orange':
                  $router.currentRoute.path == '/reservations/mes-reservations',
              }"
              class="
                hover:border-orange
                transition-all
                hover:text-orange
                dropdown-menu__item
              "
            >
              <nuxt-link class="py-2 block" to="/reservations/mes-reservations"
                >Mes reservations</nuxt-link
              >
            </li>
            <li
              :class="{
                'text-orange':
                  $router.currentRoute.path == '/trajets/mes-trajets',
              }"
              class="
                hover:border-orange
                transition-all
                hover:text-orange
                dropdown-menu__item
              "
            >
              <nuxt-link class="py-2 block" to="/trajets/mes-trajets"
                >Mes trajets</nuxt-link
              >
            </li>
            <li
              class="
                hover:border-orange
                transition-all
                hover:text-orange
                dropdown-menu__item
              "
            >
              <button class="py-2 block w-full text-left" @click="logout">
                Déconnexion
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownOpen: false,
    }
  },
  methods: {
    async logout() {
      try {
        await this.$auth.logout()
        this.$router.push('/connexion')
      } catch (error) {
        console.log(err)
      }
    },
  },

  watch: {
    $route(to, from) {
      this.dropdownOpen = false
    },
  },
  mounted() {
    window.addEventListener('click', (e) => {
      if (!e.target.closest('.dropdown-menu') && this.dropdownOpen) {
        this.dropdownOpen = false
      }
    })
  },
}
</script>

<style lang="scss" scoped>
.dropdown-menu {
  &__item {
    &:not(:last-of-type) {
      border-bottom: 1px solid var(--blue);
      &:hover {
        border-bottom: 1px solid var(--orange);
      }
    }
  }
  &__dropdown {
    width: calc(100vw - 36px);
  }
}
</style>