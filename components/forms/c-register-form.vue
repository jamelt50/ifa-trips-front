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
      :required="true"
    />

    <c-text-input
      label="Nom"
      v-model="formData.name"
      placeholder="Nom"
      type="text"
      name="name"
      :required="true"
    />

    <c-text-input
      label="Prenom"
      v-model="formData.surname"
      placeholder="Prenom"
      type="text"
      name="surname"
      :required="true"
    />

    <c-text-input
      label="Mot de passe"
      v-model="formData.password"
      placeholder="Mot de passe"
      type="password"
      name="password"
      :required="true"
    />

    <c-text-input
      label="Confirmer"
      v-model="formData.password_confirmation"
      placeholder="Confirmer"
      type="password"
      name="password_confirmation"
      :required="true"
    />
    <div v-if="error" class="my-4 text-red-700">
      <span>Un des champs de ce formulaire est vide ou incorrect</span>
    </div>
    <c-button
      color="orange"
      class="w-full md:w-auto my-2"
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
      error: false,
    }
  },
  methods: {
    async register() {
      try {
        const result = await this.$axios.$post('/register', this.formData)
        let response = await this.$auth.loginWith('local', {
          data: this.formData,
        })
          this.error = false
      } catch (err) {
        this.error = true
        console.log(err)
      }
    },
  },
}
</script>

<style></style>
