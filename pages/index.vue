<template>
  <div>
    <c-header></c-header>
    <c-two-col></c-two-col>
    <c-one-col></c-one-col>
  </div>
</template>

<script>
export default {
  transition: 'page',
  head: {
    title: 'Un voyage meilleur | Ifa trips',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Ifa trips est un service de mise en relation entre particulier vous permettant de faire des trajets ecoresponsable',
      },
    ],
  },
}
</script>

<style>
</style>