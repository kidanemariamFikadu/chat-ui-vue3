<template>
  <div class="chat-user-item">
    <div class="chat-user-info">
      <div class="material-symbols-outlined chat-display-back-btn" @click="toggleChatDisplay()">arrow_circle_left</div>
      <div>User name</div>
    </div>
    <div class="chat-user-status active"></div>
  </div>
  <div class="chat-wrapper">
    <div class="chat-list chat-container">
      <div
        v-for="(chat, index) in ChatList"
        :key="index"
        :class="['chat-message', chat.direction]"
      >
        <p>{{ chat.message }}</p>
        <span class="timestamp">{{ chat.time.toLocaleString() }}</span>
      </div>
    </div>
    <form class="compose-form" @submit.prevent="sendMessage">
      <input
        type="text"
        placeholder="Type your message here..."
        v-model="newMessageText"
      />
      <input type="file" ref="attachment" @change="handleAttachment" />
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  mounted() {
    this.generateRandomChatList();
  },props: {
    chatSelected: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      ChatList: [],
    };
  },
  methods: {
    generateRandomChatList() {
      const directions = ["inbound", "outbound"];
      const messages = [
        "Hey there!",
        "How are you?",
        "What are you up to?",
        "Nice to meet you!",
        "See you later!",
        "Goodbye!",
      ];
      const now = Date.now();
      const chats = [];

      for (let i = 0; i < 15; i++) {
        const direction =
          directions[Math.floor(Math.random() * directions.length)];
        const message = messages[Math.floor(Math.random() * messages.length)];
        const time = new Date(now - Math.floor(Math.random() * 10000000));

        chats.push({
          id: i,
          direction: direction,
          message,
          time,
        });
      }
      return (this.ChatList = chats);
    }, toggleChatDisplay() {
      this.$emit("update-show-chat-selected", !this.chatSelected);
    },
  },
};
</script>
