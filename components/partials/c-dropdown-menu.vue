<template>
  <div class="relative dropdown-menu">
    <button
      class="flex justify-between items-center"
      @click="dropdownOpen = !dropdownOpen"
    >
      <div class="bg-white p-1 md:p-2 rounded-full">
        <img src="/avatar.svg" />
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
              class="
                hover:border-orange
                transition-all
                hover:text-orange
                dropdown-menu__item
              "
            >
              <nuxt-link class="py-2 block" to="/profile">Profile</nuxt-link>
            </li>
            <li
              class="
                hover:border-orange
                transition-all
                hover:text-orange
                dropdown-menu__item
              "
            >
              <nuxt-link class="py-2 block" to="/messages">Messages</nuxt-link>
            </li>
            <li
              class="
                hover:border-orange
                transition-all
                hover:text-orange
                dropdown-menu__item
              "
            >
              <nuxt-link class="py-2 block" to="/reservations"
                >Reservations</nuxt-link
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
      await this.$auth.logout()
      this.$router.push('/connexion')
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