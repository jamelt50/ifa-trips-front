<template>
  <c-padding class="min-h-screen flex justify-center items-center">
    <div class="w-full max-w-6xl bg-white text-blue p-6 rounded-2xl">
      <div class="mb-3">
        <c-button @clicked="$router.push('/trajets/mes-trajets')" color="orange">{{'Retour'}}</c-button>
      </div>
        <c-trip-form  />
    </div>
  </c-padding>
</template>

<script>
export default {
  transition: 'page',
  middleware: 'auth',
}
</script>

<style>
</style>