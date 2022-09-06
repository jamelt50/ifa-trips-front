<template>
  <div
    class="
      md:flex
      justify-center
      md:justify-between
      items-center
      rounded-2xl
      bg-white
      text-dark-blue
      search-bar
      w-full
      max-w-6xl
    "
  >
    <div class="pt-6 pl-6 pr-6 md:pt-0 md:pr-0 md:flex md:flex-grow">
      <div class="place relative mb-2 md:mb-0 md:flex-grow">
        <c-city-input
          :default="searched ? searched.from : null"
          classes="
            bg-transparent
            border-b border-blue
            md:border-0
            outline-none
            pl-6
            w-full
            h-full
            py-2
          "
          v-model="formData.from"
          placeholder="Départ"
          name="from"
          type="text"
        />
      </div>
      <div class="place relative md:flex-grow">
        <c-city-input
          :default="searched ? searched.to : null"
          classes="
            bg-transparent
            border-b border-blue
            md:border-0
            outline-none
            pl-6
            w-full
            h-full
            py-2
          "
          v-model="formData.to"
          placeholder="Destination"
          name="to"
          type="text"
        />
      </div>
      <div class="flex py-2 md:p-0 md:flex-grow-0">
        <div class="flex-grow md:flex-grow-0">
          <c-datetime-input
            class="bg-transparent border-r border-blue"
            v-model="formData.date"
            :default="searched ? searched.date : null"
          />
        </div>
        <c-people-input
          :default="searched ? searched.people : null"
          v-model="formData.people"
        />
      </div>
    </div>

    <c-button
      :rounded="false"
      class="
        px-14
        py-2
        w-full
        md:w-auto
        rounded-bl-2xl rounded-br-2xl
        md:rounded-tr-2xl md:rounded-bl-none md:h-full md:flex-grow-0
      "
      color="orange"
      @clicked="search"
      >Rechercher</c-button
    >
  </div>
</template>

<script>
import Validator from "../../services/Validator"
export default {
  props: ['searched'],
  data() {
    return {
      formData: {
        from: '',
        to: '',
        date: '',
        people: 1,
      },
    }
  },
  methods: {
    search() {
      if (
        Validator.notEmpty(this.formData)
      ) {
        this.$router.push({
          path: '/trajets/search',
          query: this.formData,
        })
      }
    },
  },
}
</script>

<style scoped lang="scss">
.search-bar {
  filter: drop-shadow(0px 9px 7px rgba(0, 0, 0, 0.15));
  .place {
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      height: 14px;
      width: 14px;
      border: 1px solid var(--blue);
      border-radius: 50%;
      transform: translatey(-50%);
      opacity: 0.5;
    }
  }
}
</style>