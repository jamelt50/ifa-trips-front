<template>
<c-container class="bg-dark-blue">
  <div class="md:flex justify-between py-6">
    <c-logo class="mt-6 md:mt-0"></c-logo>
    <div
      class="
        md:flex
        justify-between
        items-center
        text-center
        md:text-left
        mb-3
        mt-8
        md:mb-0 md:mt-0
      "
    >
      <span>Suivez Nous</span>
      <div
        class="
          my-1
          md:ml-3
          flex
          justify-between
          items-center
          social
          mx-auto
          md:mx-0
        "
      >
        <c-icon-link link="#" svg="/facebook.svg" />
        <c-icon-link link="#" svg="/instagram.svg" />
        <c-icon-link link="#" svg="/twitter.svg" />
      </div>
    </div>
  </div>
</c-container>
</template>

<script>
export default {}
</script>

<style lang="scss">
.social {
  max-width: 190px;
}
</style>