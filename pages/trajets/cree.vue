<template>
  <div class="min-h-screen flex justify-center items-center">
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
}
</script>

<style>
</style>