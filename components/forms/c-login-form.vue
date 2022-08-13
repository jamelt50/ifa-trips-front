<template>
  <form
    class="flex flex-col justify-center items-center w-full max-w-md"
    @submit.prevent="userLogin"
    method="POST"
  >
    <c-text-input
      label="Email"
      v-model="formData.email"
      placeholder="Email"
      type="email"
      name="email"
    />

    <c-text-input
      label="Password"
      v-model="formData.password"
      placeholder="Password"
      type="text"
      name="password"
    />
    <c-button
      classes="px-6 py-1 my-3 rounded-2xl"
      color="orange"
      class="w-full md:w-auto"
      >Se Connecter</c-button
    >
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: { email: '', password: '' },
    }
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith('local', {
          data: this.formData,
        })
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style></style>
