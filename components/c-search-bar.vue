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
    "
  >
    <div class="pt-6 pl-6 pr-6 md:pt-0 md:pr-0 md:flex md:flex-grow">
      <div class="place relative mb-2 md:mb-0 md:flex-grow">
        <input
          class="
            bg-transparent
            border-b border-blue
            md:border-0
            outline-none
            pl-6
            w-full
            h-full
            py-2
          "
          placeholder="Départ"
          name="from"
          type="text"
        />
      </div>
      <div class="place relative md:flex-grow">
        <input
          class="
            bg-transparent
            border-b border-blue
            md:border-0
            outline-none
            pl-6
            w-full
            h-full
            py-2
          "
          placeholder="Destination"
          name="to"
          type="text"
        />
      </div>
      <div class="flex py-2 md:p-0 md:flex-grow-0">
        <div class="flex flex-grow md:flex-grow-0">
          <img class="w-4" src="/calendar.svg" />
          <input
            class="
              bg-transparent
              border-r border-blue
              outline-none
              flex-grow
              h-12
              md:h-auto
              py-3
              md:py-2
              px-2
            "
            placeholder="Aujourd'hui"
            ref="datePicker"
          />
        </div>
        <c-people-input />
      </div>
    </div>

    <c-button
      classes="px-6 py-1 lg:px-14 md:py-2 w-full md:w-auto  rounded-bl-2xl rounded-br-2xl md:rounded-tr-2xl md:rounded-bl-none  md:h-full md:flex-grow-0"
      color="orange"
      >Rechercher</c-button
    >
  </div>
</template>

<script>
import flatpickr from 'flatpickr'
import 'flatpickr/dist/themes/dark.css'
export default {
  mounted() {
    flatpickr(this.$refs.datePicker, {
      enableTime: true,
      dateFormat: 'Y-m-d H:i',
    })
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