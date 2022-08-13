<template>
  <div class="relative h-full">
    <input
      @focus="showSuggestions"
      @input="searchCities"
      :class="classes"
      v-model="search"
      ref="input"
      autocomplete="off"
      type="text"
      :placeholder="placeholder"
      :name="name"
    />
    <c-loader
      color="var(--orange)"
      size="18px"
      :loading="loading"
      class="absolute top-1/2 right-6 transform -translate-y-1/2"
    />
    <transition name="pop-up">
      <div
        v-if="show && cities.length"
        class="
          absolute
          top-full
          right-0
          bg-white
          text-blue
          py-2
          rounded-b-2xl
          w-full
          shadow-xl
          cities-suggestions
          z-20
        "
      >
        <ul>
          <li v-for="city in cities" :key="city.code">
            <button
              @click="choose(city)"
              class="
                px-6
                py-3
                hover:bg-gray-300
                transition-colors
                text-left
                w-full
              "
            >
              {{ city.nom }}
            </button>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['classes', 'placeholder', 'name', 'default'],
  data() {
    return {
      search: '',
      show: false,
      cities: [],
      loading: false,
    }
  },

  methods: {
    clickOustide(e) {
      if (
        !e.target.closest('.cities-suggestions') &&
        e.target !== this.$refs.input &&
        this.show &&
        this.cities.length > 0
      ) {
        this.hideSuggestions()
      }
    },
    searchCities() {
      clearTimeout(this.timeOut)
      this.timeOut = setTimeout(async () => {
        try {
          this.loading = true
          const result = await this.$axios.get(
            process.env.GEO_API_URL +
              'communes?boost=population&nom=' +
              this.search
          )
          this.cities = result.data.sort((a, b) => a > b)
          this.cities = this.cities.slice(0, 5)
          this.loading = false
        } catch (error) {
          console.log(error)
        }
      }, 300)
    },
    showSuggestions() {
      this.show = true
      this.clickListener = this.clickOustide.bind(this)
      window.addEventListener('click', this.clickListener)
    },
    hideSuggestions() {
      this.show = false
      if (this.clickListener) {
        window.removeEventListener('click', this.clickListener)
        this.clickListener = null
      }
    },
    choose(city) {
      this.$refs.input.value = city.nom
      this.$refs.input.dispatchEvent(new Event('input'))
      this.handleInput(city.code)
      this.hideSuggestions()
    },
    handleInput(data) {
      this.$emit('input', data)
    },
    async fetchCity() {
      const result = await this.$axios.get(
        process.env.GEO_API_URL + 'communes/' + this.default
      )

      this.choose(result.data);
    },
  },
  mounted() {
    if (this.default) {
      this.fetchCity()
    }
  },
}
</script>

<style>
</style>