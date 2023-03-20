<template>
  <ul class="chat-user-list chat-list chat-item">
    <li v-for="chat in ChatList" :key="chat.id" class="chat-item-li">
      <div class="chat-item">
        <div class="username">{{ chat.username }}</div>
        <div class="message">{{ chat.message }}</div>
        <div class="time">{{ chat.time }}</div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  mounted() {
    this.generateRandomChatList();
  },
  data() {
    return {
      ChatList: [],
    };
  },
  methods: {
    generateRandomChatList() {
      const usernames = [
        "Alice",
        "Bob",
        "Charlie",
        "Dave",
        "Eve",
        "Frank",
        "Grace",
        "Heidi",
        "Ivan",
        "Judy",
      ];
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
        const username =
          usernames[Math.floor(Math.random() * usernames.length)];
        const message = messages[Math.floor(Math.random() * messages.length)];
        const time = new Date(now - Math.floor(Math.random() * 10000000));

        chats.push({
          id: i,
          username,
          message,
          time,
        });
      }
      console.log(chats);
      this.ChatList = chats;
    },
  },
};
</script>
