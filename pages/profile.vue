<template>
  <c-padding class="min-h-screen flex justify-center items-center">
    <c-profile-form />
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