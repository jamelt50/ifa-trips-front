<template>
  <button :class="'font-bold text-xl hover:opacity-90 transition-all ' + color + ' ' + classes">
    <slot></slot>
  </button>
</template>

<script>
export default {
props:['color','classes']
}
</script>

<style lang="scss" scoped>
.orange{
background-color: var(--orange);
color: var(--white);
}
.blue{
background-color: var(--blue);
color: var(--white);
}
.white{
background-color: var(--white);
color: var(--blue);
}
</style>