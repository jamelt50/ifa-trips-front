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
    <div v-if="error" class="my-4 text-red-700">
      <span>Un des champs de ce formulaire est vide ou incorrect</span>
    </div>
    <c-button color="orange" class="w-full md:w-auto my-2"
      >Se Connecter</c-button
    >
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: { email: '', password: '' },
      error: false,
    }
  },
  methods: {
    async userLogin() {
      if (this.$refs.form.checkValidity()) {
        try {
          let response = await this.$auth.loginWith('local', {
            data: this.formData,
          })
          this.error = false
        } catch (err) {
          this.error = true
          console.log(err)
        }
      }
    },
  },
}
</script>

<style></style>
