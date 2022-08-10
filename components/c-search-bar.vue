<template>
  <div
    class="
      lg:flex
      justify-center
      lg:justify-between
      items-center
      rounded-2xl
      bg-white
      text-dark-blue
      search-bar
      max-w-sm
      w-3/4
      md:max-w-6xl
    "
  >
    <div class="pt-6 pl-6 pr-6 lg:pt-0 lg:pr-0 lg:flex lg:flex-grow">
      <div class="place relative mb-2 lg:mb-0 lg:flex-grow">
        <input
          class="
            bg-transparent
            border-b border-blue
            lg:border-0
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
      <div class="place relative lg:flex-grow">
        <input
          class="
            bg-transparent
            border-b border-blue
            lg:border-0
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
      <div class="flex py-2 lg:p-0 lg:flex-grow-0">
        <div class="flex flex-grow lg:flex-grow-0">
          <img class="w-4" src="/calendar.svg" />
          <input
            class="
              bg-transparent
              border-r border-blue
              outline-none
              flex-grow
              h-12
              lg:h-auto
              py-3
              lg:py-2
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
      classes="px-6 py-1 lg:px-14 lg:py-2 w-full lg:w-auto  rounded-bl-2xl rounded-br-2xl lg:rounded-tr-2xl lg:rounded-bl-none  lg:h-full lg:flex-grow-0"
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