<template>
  <form
    class="
      flex flex-col
      justify-center
      items-center
      w-full
      max-w-md
      bg-white
      text-blue
      p-6
      rounded-2xl
    "
    @submit.prevent="updateUser"
    method="POST"
  >
    <div class="flex flex-col justify-center items-center">
      <c-image-input v-model="formData.profile_pic" />
      <h1 class="text-xl font-bold my-3">
        {{ `${$auth.user.surname} ${$auth.user.name}` }}
      </h1>
    </div>
    <c-text-input
      label="Nom"
      v-model="formData.name"
      placeholder="Nom"
      type="text"
      name="name"
      color="outline"
      :default="$auth.user.name"
      :required="true"
    />

    <c-text-input
      label="Prenom"
      v-model="formData.surname"
      placeholder="Prenom"
      type="text"
      name="surname"
      color="outline"
      :default="$auth.user.surname"
      :required="true"
    />
    <c-text-input
      label="Nouveau mot de passe"
      v-model="formData.password"
      placeholder="Mot de passe"
      type="password"
      name="password"
      autocomplete="new-password"
      color="outline"
    />

    <c-text-input
      label="Confirmer"
      v-model="formData.password_confirmation"
      placeholder="Confirmer"
      type="password"
      name="password_confirmation"
      autocomplete="new-password"
      color="outline"
    />
    <div v-if="error" class="my-4 text-red-700">
      <span>Un des champs de ce formulaire est vide ou incorrect</span>
    </div>
    <c-button
      color="blue"
      class="w-full md:w-auto px-6 py-1 my-3 rounded-2xl"
      :disabled="updating"
    >
      <span v-if="!updating">Enrengistrer</span>
      <c-loader v-else size="22px" color="var(--white)" :loading="true"
    /></c-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        profile_pic: null,
        name: '',
        surname: '',
        password: '',
        password_confirmation: '',
      },
      updating: false,
      error: false,
    }
  },
  methods: {
    async updateUser() {
      let formData = new FormData()
      for (const key in this.formData) {
        formData.append(key, this.formData[key])
      }
      try {
        this.updating = true
        this.$axios.setHeader('Content-Type', 'multipart/formdata')
        const result = await this.$axios.$post('/profile/update', formData)

        this.updating = false
        this.error = false
      } catch (error) {
        this.error = true
        console.log(error)
      }
    },
  },
}
</script>

<style></style>
