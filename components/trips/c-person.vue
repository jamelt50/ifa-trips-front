<template>
  <div class="flex justify-between items-center w-max">
    <img src="/avatar-filled.svg" />
    <h3 class="mx-3 text-2xl font-bold">{{person.name}}</h3>
  </div>
</template>

<script>
export default {
  props: { person: Object },
}
</script>

<style>
</style>