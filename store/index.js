import { io } from 'socket.io-client'

export const state = () => ({
  conversations: [],
  activeConversation: null,
})

export const mutations = {
  selectConversation(state, conv) {
    state.activeConversation = conv
  },
  notify(state, conv) {
    const index = state.conversations.indexOf(conv)
    state.conversations[index].notify = true
  },
  sort(state) {
    let sorted = state.conversations

    sorted = sorted.sort((a, b) => {
      if (a.messages.length && b.messages.length) {
        if (a.messages[0].createdAt < b.messages[0].createdAt) {
          return -1
        }
        if (a.messages[0].createdAt > b.messages[0].createdAt) {
          return 1
        }
        return 0
      } else if (a.messages.length && !b.messages.length) {
        return -1
      } else {
        return 1
      }
    })
    state.conversations = sorted
  },
  pushConversation(state, conv) {
    state.conversations.push(conv)
  },
  pushMessage(state, { conversation, message }) {
    const index = state.conversations.indexOf(conversation)
    state.conversations[index].messages.push(message)
  },

  setConversations(state, value) {
    state.conversations = value
  },
}

export const actions = {
  async init({ state, dispatch, commit }) {
    try {
      let conversations = await this.$axios.$get('/messages/list')
      commit('setConversations', conversations)
      commit('sort')
      commit('selectConversation', state.conversations[0])
      const socket = io(process.env.BACK_URL)
      socket.on('connect', async () => {
        dispatch('joinRooms', socket)
      })
      socket.on('new-message', (message) => {
        dispatch('newMessage', message)
      })
      socket.on('new-conversation', (conversation) => {
        dispatch('newConversation', conversation)
      })
    } catch (error) {
      console.log(error)
    }
  },
  async joinRooms({ commit, state }, socket) {
    if (state.conversations) {
      const rooms = []
      state.conversations.forEach((conversation) => {
        rooms.push(conversation.id)
      })
      try {
        await this.$axios.$post('/messages/join-room', {
          rooms: rooms,
          socket: socket.id,
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  newMessage({ commit, state }, message) {
    state.conversations.forEach((conversation) => {
      if (conversation.id === message.conversation_id) {
        if (
          message.from_id != state.auth.user.id &&
          conversation != state.activeConversation
        ) {
          commit('notify', conversation)
        }

        commit('pushMessage', { conversation, message })
        commit('sort')
      }
    })
  },
  newConversation({ commit }, conversation) {
    commit('pushConversation', conversation)
    commit('sort')
    commit('notify', conversation)
  },
  async getConversations({ commit }) {
    let conversations = await $axios.$get('/messages/list')
    dispatch('setConversations', conversations)
  },
  async sendMessage({ commit }, { message, room }) {
    try {
      await this.$axios.$post('/messages/send', {
        message: message,
        room: room,
      })
    } catch (error) {
      console.log(error)
    }
  },
}
