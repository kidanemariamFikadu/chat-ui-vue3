<template>
  <div v-if="showChatWindow" class="chat-view chat-gradient-div">
    <button class="chat-close-button" @click="toggleChatWindow()">X</button>
    <ChatDisplay v-if="chatSelected" :chatSelected="chatSelected"
    @update-show-chat-selected="updateChatSelected"/>
    <div v-else>
      <div class="chat-tabs" v-if="!chatSelected">
        <div
          class="chat-tab"
          :class="{ active: selectedTab === 'chatMember' }"
          @click="selectedTab = 'chatMember'"
        >
          <span class="material-symbols-outlined"> group </span>
        </div>
        <div
          class="chat-tab"
          :class="{ active: selectedTab === 'chatView' }"
          @click="selectedTab = 'chatView'"
        >
          <span class="material-symbols-outlined white"> chat </span>
        </div>
      </div>
      <div v-if="selectedTab === 'chatMember'">
        <UserList v-if="!chatSelected" />
      </div>
      <div v-if="selectedTab === 'chatView'">
        <ChatList v-if="!chatSelected" />
      </div>
    </div>
  </div>
</template>

<script>
import UserList from "./UserList.vue";
import ChatList from "./ChatList.vue";
import ChatDisplay from "./ChatDisplay.vue";
export default {
  components: {
    UserList,
    ChatList,
    ChatDisplay,
  },
  props: {
    showChatWindow: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      selectedTab: "chatMember",
      chatSelected: true,
    };
  },
  methods: {
    toggleChatWindow() {
      this.$emit("update-show-chat-window", !this.showChatWindow);
    },
    updateChatSelected(newValue) {
      this.chatSelected = newValue;
    },
  },
};
</script>
