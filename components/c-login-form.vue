<template>
  <form
    class="flex flex-col justify-center items-center w-full max-w-md"
    @submit.prevent="userLogin"
    method="POST"
  >
    <div class="w-full mb-2">
      <label class="block mb-2" for="email">Email</label>
      <input
        placeholder="Email"
        class="rounded-2xl h-9 px-6 w-full text-blue"
        type="email"
        name="email"
        v-model="credentials.email"
      />
    </div>
    <div class="w-full mb-2">
      <label class="block mb-2" for="password">Password</label>
      <input
        placeholder="Password"
        class="rounded-2xl h-9 px-6 w-full text-blue"
        type="text"
        name="password"
        v-model="credentials.password"
      />
    </div>

    <c-button
      classes="px-6 py-1 my-3 rounded-2xl"
      color="orange"
      class="w-full md:w-auto"
      >Se Connecter</c-button
    >
  </form>
</template>

<script>
import AuthService from './../services/AuthService'
export default {
  data() {
    return {
      credentials: { email: '', password: '' },
    }
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith('local', { data: this.credentials })
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style></style>
