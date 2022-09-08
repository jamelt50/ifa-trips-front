<template>
  <div class="min-h-screen md:flex justify-center items-center">
    <div class="w-full max-w-6xl bg-white text-blue p-3 md:p-6 md:rounded-2xl">
      <div class="mb-3">
        <c-button @clicked="$router.push('/trajets/mes-trajets')" color="orange">{{'Retour'}}</c-button>
      </div>
        <c-trip-form  />
    </div>
  </div>
</template>

<script>
export default {
  transition: 'page',
  middleware: 'auth',
  head: {
    title: 'Crée votre trajets | Ifa trips',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Crée votre trajets et partez sans inquietude, vos trajets contribue a une planète plus propre',
      },
    ],
  },
}
</script>

<style>
</style>