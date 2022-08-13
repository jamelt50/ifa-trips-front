<template>
  <form
    class="flex flex-col justify-center items-center w-full max-w-md"
    @submit.prevent="register"
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
      label="Nom"
      v-model="formData.name"
        placeholder="Nom"
        type="text"
        name="name"
    />

    <c-text-input
      label="Prenom"
      v-model="formData.surname"
        placeholder="Prenom"
        type="text"
        name="surname"
    />

    <c-text-input
      label="Mot de passe"
      v-model="formData.password"
        placeholder="Mot de passe"
        type="password"
        name="password"
    />

    <c-text-input
      label="Confirmer"
      v-model="formData.password_confirmation"
        placeholder="Confirmer"
        type="password"
        name="password_confirmation"
    />
    <c-button
      classes="px-6 py-1 my-3 rounded-2xl"
      color="orange"
      class="w-full md:w-auto"
      >S’inscrire</c-button
    >
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: '',
        name: '',
        surname: '',
        password: '',
        password_confirmation: '',
      },
    }
  },
  methods: {
    async register() {
      try {
        const result = await this.$axios.$post('/register', this.formData)
        let response = await this.$auth.loginWith('local', {
          data: this.formData,
        })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style></style>
