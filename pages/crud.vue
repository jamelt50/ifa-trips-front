<template>
  <div
    class="
      w-full
      min-h-screen
      bg-green-600
      flex
      justify-center
      items-center
      pt-32
    "
  >
    <div class="max-w-4xl w-full min-h-screen bg-white relative pt-20 text-blue">
      <nav class="absolute top-0 left-0 bg-gray-300 w-full h-20">
        <ul class="flex h-full justify-around items-center">
          <li
            class="cursor-pointer h-full flex justify-center items-center w-1/4"
            :class="{ 'underline bg-gray-100': currentTab === 1 }"
            @click="navigate(1)"
          >
            trips
          </li>
          <li
            class="cursor-pointer h-full flex justify-center items-center w-1/4"
            :class="{ 'underline bg-gray-100': currentTab === 2 }"
            @click="navigate(2)"
          >
            users
          </li>
          <li
            class="cursor-pointer h-full flex justify-center items-center w-1/4"
            :class="{ 'underline bg-gray-100': currentTab === 3 }"
            @click="navigate(3)"
          >
            reservations
          </li>
          <li
            class="cursor-pointer h-full flex justify-center items-center w-1/4"
            :class="{ 'underline bg-gray-100': currentTab === 4 }"
            @click="navigate(4)"
          >
            messages
          </li>
        </ul>
      </nav>
      <div v-if="currentTab === 2">
        <div class="w-full p-5" v-for="user in users" :key="user.id">
          <h4>{{ user.email }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from '../services/UserService.js'
export default {
  name: 'IndexPage',
  middleware: 'auth',
  data() {
    return { currentTab: 1 }
  },
  async asyncData(context) {
   const data = await  UserService.list()
    return {
      users: data.users,
    }
  },
  methods: {
    navigate(tab) {
      this.currentTab = tab
    },
  },
}
</script>
