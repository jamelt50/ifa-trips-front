<template>
  <div class="flex justify-between items-center h-96 py-3">
    <div class="w-1/4 border-r border-dark-blue pr-3 h-full overflow-scroll">
      <ul v-if="conversations">
        <li v-for="conversation in conversations" :key="conversation.id">
          <button
            @click="selectConversation(conversation)"
            class="
              hover:opacity-75
              transition-all
              w-full
              cursor-pointer
              py-2
              border-b border-blue
            "
          >
            <c-person
              :person="
                conversation.userTwo === $auth.user.id
                  ? conversation.userOne
                  : conversation.userTwo
              "
            />
          </button>
        </li>
      </ul>
      <div v-else><p>Vous n'avez pas encore de conversation</p></div>
    </div>
    <div class="w-3/4 px-6 h-full">
      <div v-if="activeConversation" class="flex justify-end items-center">
        <c-person
          class="mb-2"
          :person="
            activeConversation.userTwo === $auth.user.id
              ? activeConversation.userOne
              : activeConversation.userTwo
          "
        />
      </div>
      <c-message-conversation
        :io="io"
        v-if="activeConversation"
        :conversation="activeConversation"
      />
    </div>
  </div>
</template>

<script>
import { io } from 'socket.io-client'
export default {
  props: { conversations: { type: Array } },
  data() {
    return {
      io: null,
      activeConversation: null,
    }
  },
  methods: {
    selectConversation(conv) {
      this.activeConversation = conv
    },
  },
  async mounted() {
    this.io = io(process.env.BACK_URL)
    this.io.on('connect', async (socket) => {
      if (this.conversations) {
        const rooms = []
        this.conversations.forEach((conversation) => {
          rooms.push(conversation.id)
        })
        await this.$axios.$post('/messages/join-room', {
          rooms: rooms,
          socket: this.io.id,
        })
      }
    })
    this.io.on('new-message', (message) => {
      this.conversations.forEach((conversation) => {
        if (conversation.id === message.conversation_id) {
          conversation.messages.push(message)
        }
      })
    })
    this.io.on('new-conversation', (conversation) => {
      console.log(conversation)
      // this.conversations.push(conversation)
    })
  },
}
</script>

<style>
</style>