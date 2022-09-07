<template>
  <div class="flex justify-between items-center h-full md:h-96 py-3 relative">
    <div
      v-if="$store.state.conversations.length"
      class="
        w-full
        md:w-1/4 md:border-r
        border-dark-blue
        pr-3
        h-full
        overflow-scroll
      "
    >
      <ul>
        <li
          v-for="conversation in $store.state.conversations"
          :key="conversation.id"
        >
          <button
            @click="$store.commit('selectConversation', conversation)"
            class="
              hover:opacity-75
              transition-all
              w-full
              cursor-pointer
              py-2
              border-b border-blue
            "
          >
            <div class="flex justify-between items-center">
              <c-person
                :person="
                  conversation.userTwo.id === $auth.user.id
                    ? conversation.userOne
                    : conversation.userTwo
                "
              />
              <div
                v-if="conversation.notify"
                class="w-4 h-4 bg-orange rounded-full"
              ></div>
            </div>

            <p class="text-left py-2">
              {{
                conversation.messages.length > 0
                  ? conversation.messages[conversation.messages.length - 1]
                      .content
                  : ''
              }}
            </p>
          </button>
        </li>
      </ul>
    </div>
      <div class="w-full justify-center items-center flex" v-else><p class="text-xl md:text-2xl">Vous n'avez pas encore de conversation</p></div>
    <transition name="switch">
      <div
        v-if="$store.state.activeConversation"
        class="
          absolute
          bg-white
          md:bg-transparent
          top-0
          left-0
          w-full
          md:static md:w-3/4 md:px-6
          h-full
          pb-20
        "
      >
        <div class="flex justify-between items-center">
          <c-button
            v-if="$store.state.activeConversation"
            class="md:hidden"
            @clicked="$store.commit('selectConversation', null)"
            color="orange"
            >Retour</c-button
          >
          <c-person
            class="mb-2"
            :person="
              $store.state.activeConversation.userTwo.id === $auth.user.id
                ? $store.state.activeConversation.userOne
                : $store.state.activeConversation.userTwo
            "
          />
        </div>
        <c-message-conversation v-if="$store.state.activeConversation" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>