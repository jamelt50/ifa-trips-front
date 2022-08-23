<template>
      <div class="flex justify-between items-center">
        <div>
          <h2 class="text-xl font-bold">{{ from }}</h2>
        </div>
        <div>
          <h2 class="text-xl font-bold">{{ to }}</h2>
        </div>
      </div>
</template>

<script>
export default {
props:{from:String,to:String}
}
</script>

<style>

</style>