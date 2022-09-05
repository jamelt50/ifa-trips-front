<template>
  <form
    ref="form"
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
      :required="true"
    />

    <c-text-input
      label="Password"
      v-model="formData.password"
      placeholder="Password"
      type="password"
      name="password"
      :required="true"
    />
    <c-button
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
