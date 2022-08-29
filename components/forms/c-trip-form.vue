<template>
  <form @submit.prevent class="w-full">
    <div class="w-full flex my-2 justify-between items-center">
      <div class="w-full">
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
      <div class="w-full pl-3">
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
    <div class="flex justify-between items-stretch">
      <div class="w-3/5">
        <c-datetime-input
          class="border border-blue rounded-xl"
          v-model="formData.date"
          full="true"
        />
      </div>
      <div class="w-1/5 px-3">
        <c-people-input
          class="bg-transparent border py-2 border-blue rounded-xl"
          v-model="formData.seats"
        />
      </div>
      <div class="w-1/5">
        <input
          class="
            bg-transparent
            border border-blue
            rounded-xl
            outline-none
            pl-6
            w-full
            h-full
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
      this.$router.push({path:'/trajets/mes-trajets',query:{trajets:trip.id}})

    },
  },
}
</script>

<style></style>
