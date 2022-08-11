<template>
  <form
    class="flex flex-col justify-center items-center w-full max-w-md"
    @submit.prevent="register"
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
      <label class="block mb-2" for="email">Nom</label>
      <input
        placeholder="Nom"
        class="rounded-2xl h-9 px-6 w-full text-blue"
        type="text"
        name="name"
        v-model="credentials.name"
      />
    </div>
    <div class="w-full mb-2">
      <label class="block mb-2" for="email">Prenom</label>
      <input
        placeholder="Prenom"
        class="rounded-2xl h-9 px-6 w-full text-blue"
        type="text"
        name="surname"
        v-model="credentials.surname"
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
    <div class="w-full mb-2">
      <label class="block mb-2" for="password">Confirmer</label>
      <input
        placeholder="Confirmer"
        class="rounded-2xl h-9 px-6 w-full text-blue"
        type="text"
        name="password_confirmation"
        v-model="credentials.password_confirmation"
      />
    </div>
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
      credentials: {
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
        const result = await this.$axios.$post('/register', this.credentials)
        let response = await this.$auth.loginWith('local', {
          data: this.credentials,
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
