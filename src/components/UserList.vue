<template>
  <ul class="chat-user-list chat-list">
    <li v-for="user in sortedUsers" :key="user.name" class="chat-user-item">
      <div class="chat-user-info" v-tooltip="'Click me!'">
        <div
          :style="{ backgroundColor: generateColor(user.name) }"
          class="chat-avatar"
        >
          {{ user.name.charAt(0) }}
        </div>
        <div class="chat-user-name">{{ user.name }}</div>
      </div>
      <div class="chat-user-status" :class="user.status"></div>
    </li>
  </ul>
</template>

<script>
import firstnameData from "../data/firstname.json";
export default {
  props: {
    showChatWindow: {
      type: Boolean,
      required: true,
    },
  },
  mounted() {
    this.generateUsers();
  },
  computed: {
    sortedUsers() {
      return this.users.slice().sort((a, b) => {
        if (a.status < b.status) return -1;
        if (a.status > b.status) return 1;
        return 0;
      });
    },
    firstName() {
      return firstnameData.firstName;
    },
  },
  data() {
    return {
      selectedTab: "chatMember",
      users: [],
    };
  },
  methods: {
    toggleChatWindow() {
      this.$emit("update-show-chat-window", !this.showChatWindow);
    },
    generateColor(name) {
      // Generate a unique color based on the user's name
      let hash = 0;
      for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
      }
      const color = Math.abs(hash).toString(16).substring(0, 6);
      return "#" + "0".repeat(6 - color.length) + color;
    },
    async generateUsers() {
      for (let i = 0; i < 26; i++) {
        const firstNames = firstnameData.names;
        const lastNames = firstnameData.names;
        const possibleStatus = ["active", "inactive", "busy"];
        const firstName =
          firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastName =
          lastNames[Math.floor(Math.random() * lastNames.length)];
        const status =
          possibleStatus[Math.floor(Math.random() * possibleStatus.length)];
        if (firstName != lastName) {
          this.users.push({
            id: i + 1,
            name: `${firstName} ${lastName}`,
            status: status,
          });
        }
      }
    },
  },
};
</script>
