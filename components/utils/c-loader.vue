<template>
  <div class="c-loader flex justify-center items-center" v-show="loading">
    <div class="c-clip" v-bind:style="spinnerStyle"></div>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
      default: '35px',
    },
  },
  computed: {
    spinnerStyle() {
      return {
        height: this.size,
        width: this.size,
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: this.color + ' ' + this.color + ' transparent',
        borderRadius: '50%',
        background: 'transparent',
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.c-loader {
  text-align: center;
}
.c-loader .c-clip {
  animation: c-clipDelay 0.75s 0s infinite linear;

  animation-fill-mode: both;
  display: inline-block;
}
@-webkit-keyframes c-clipDelay {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes c-clipDelay {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>