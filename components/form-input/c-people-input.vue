<template>
  <div class="flex-grow-0 cursor-pointer relative people-input h-10">
    <button
      class="flex justify-between items-center px-4 h-full hover:opacity-80"
      @click="peopleInputOpen = !peopleInputOpen"
    >
      <img class="w-6 mr-2" src="/avatar.svg" /> <span>{{ people }}</span>
    </button>
    <transition name="pop-up">
      <div
        v-if="peopleInputOpen"
        class="
          absolute
          right-0
          top-full
          bg-white
          flex
          justify-between
          items-center
          py-6
          px-4
          rounded-2xl
          shadow-lg
          z-30
          transform
          translate-y-3
        "
      >
        <span class="text-xl">passager</span>
        <div class="flex justify-between items-center ml-8">
          <button
            class="bg-blue text-white rounded-full w-8 h-8 mx-4"
            @click="decrementPeople"
            :disabled="people === 1 ? true : false"
          >
            -
          </button>
          {{ people }}
          <button
            class="bg-blue text-white rounded-full w-8 h-8 mx-4"
            @click="incrementPeople"
            :disabled="people === 8 ? true : false"
          >
            +
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['default'],
  data() {
    return {
      people: 1,
      peopleInputOpen: false,
    }
  },
  methods: {
    incrementPeople() {
      if (this.people < 8) {
        this.people++
        this.handleInput()
      }
    },
    decrementPeople() {
      if (this.people > 1) {
        this.people--
        this.handleInput()
      }
    },
    handleInput() {
      this.$emit('input', this.people)
    },
  },
  mounted() {
    if (this.default) {
      this.people = this.default
    }
    window.addEventListener('click', (e) => {
      if (!e.target.closest('.people-input') && this.peopleInputOpen) {
        this.peopleInputOpen = false
      }
    })
    window.addEventListener('touchstart', (e) => {
      if (!e.target.closest('.people-input') && this.peopleInputOpen) {
        this.peopleInputOpen = false
      }
    })
  },
}
</script>

<style lang="scss">
.people-input {
  min-width: 70px;
}
</style>