<template>
  <a class="block w-8 md:w-10 mx-1 hover:opacity-80 transition-opacity" :href="link"><img :src="svg" alt="icone"></a>
</template>

<script>
export default {
props:["svg","link"]
}
</script>

<style>

</style>