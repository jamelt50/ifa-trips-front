<template>
  <div class="relative group">
    <div
      class="
        w-28
        h-28
        bg-cover
        rounded-full
        hover:opacity-80
        transition-opacity
        cursor-pointer
      "
      :style="{
        'background-image': `url(${
          previewImage ? previewImage: $auth.user.profile_pic
        })`,
      }"
      @click="selectImage"
    ></div>
    <img class="absolute bottom-0 right-0 pointer-events-none transform group-hover:-translate-1/2" src="/pen.svg" />
    <input class="hidden" ref="fileInput" type="file" @input="pickFile" />
  </div>
</template>
<script>
export default {
  props: ['default'],
  data() {
    return {
      previewImage: null,
    }
  },
  methods: {
    selectImage() {
      this.$refs.fileInput.click()
    },
    pickFile() {
      let input = this.$refs.fileInput
      let file = input.files
      if (file && file[0]) {
        let reader = new FileReader()
        reader.onload = (e) => {
          this.previewImage =  e.target.result
        }
        reader.readAsDataURL(file[0])
        this.$emit('input', file[0])
      }
    },
  },
}
</script>
 
