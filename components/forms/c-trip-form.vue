<template>
  <form
    @submit.prevent
    class="w-full flex flex-col-reverse md:flex-row justify-between"
  >
    <div class="md:aw-1/2 p-4">
      <div class="w-full flex flex-wrap md:my-2 justify-between items-center">
        <div class="w-full md:w-1/2 mb-2">
          <c-city-input
            classes="
            bg-transparent
            outline-none
            border border-blue
            rounded-xl
            pl-6
            w-full
            h-full
            py-2
          "
            v-model="formData.from_city_id"
            placeholder="Départ"
            name="from"
            type="text"
          />
        </div>
        <div class="w-full md:w-1/2 md:pl-3 mb-2">
          <c-city-input
            classes="
            bg-transparent
            border border-blue
            rounded-xl
            outline-none
            pl-6
            w-full
            h-full
            py-2
          "
            v-model="formData.to_city_id"
            placeholder="Destination"
            name="to"
            type="text"
          />
        </div>
      </div>
      <div class="flex flex-wrap justify-between items-stretch">
        <div class="w-full md:w-3/5 mb-2">
          <c-datetime-input
            class="border border-blue rounded-xl"
            v-model="formData.date"
            full="true"
          />
        </div>
        <div class="w-full md:w-1/5 md:px-3 mb-2">
          <c-people-input
            class="bg-transparent border py-2 border-blue rounded-xl"
            v-model="formData.seats"
          />
        </div>
        <div class="w-full md:w-1/5 mb-2">
          <input
            class="
              bg-transparent
              border border-blue
              rounded-xl
              outline-none
              pl-6
              w-full
              h-10
              py-2
            "
            v-model="formData.price"
            type="number"
            name="price"
            id="price"
          />
        </div>
      </div>
      <div class="flex justify-between items-stretch">
        <div class="w-full">
          <c-text-input
            color="outline"
            label="Description"
            v-model="formData.description"
            :isTextarea="true"
          />
        </div>
      </div>
      <div class="flex justify-center items-center py-4">
        <c-button @clicked="saveTrip" color="orange" classes=""
          >Crée un nouveau trajet</c-button
        >
      </div>
    </div>
    <div class="md:w-1/2 p-4">
      <h2 class="text-2xl mb-3">Régle d'utilisations</h2>
      <p class="opacity-80 text-sm mb-2">
        Le lorem ipsum est, en imprimerie, une suite de mots sans signification
        utilisée à titre provisoire pour calibrer une mise en page, le texte
        définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
        mise en page est achevée. Généralement, on utilise un texte en faux
        latin, le Lorem ipsum ou Lipsum.
      </p>
      <p class="opacity-80 text-sm mb-2">
        Le lorem ipsum est, en imprimerie, une suite de mots sans signification
        utilisée à titre provisoire pour calibrer une mise en page, le texte
        définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
        mise en page est achevée. Généralement, on utilise un texte en faux
        latin, le Lorem ipsum ou Lipsum.
      </p>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        from_city_id: '',
        to_city_id: '',
        date: '',
        description: '',
        price: 0,
        seats: 1,
      },
    }
  },
  methods: {
    async saveTrip() {
      const trip = await this.$axios.$post('/trips/create', this.formData)
      this.$router.push({
        path: '/trajets/mes-trajets',
        query: { trajets: trip.id },
      })
    },
  },
}
</script>

<style></style>
