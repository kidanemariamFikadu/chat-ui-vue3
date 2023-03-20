<template>
  <ChatBox
    :showChatWindow="showChatWindow"
    @update-show-chat-window="updateShowChatWindow"
  ></ChatBox>
  <div class="floating-button" @click="showChatWindow = !showChatWindow">
    <div class="circle material-symbols-outlined">chat</div>
  </div>
</template>
<script>
import ChatBox from "./ChatBox.vue";

export default {
  name: "App",
  components: {
    ChatBox,
  },
  data() {
    return {
      showChatWindow: false,
    };
  },
  methods: {
    toggleChatWindow() {
      this.showChatWindow = !this.showChatWindow;
    },
    updateShowChatWindow(newValue) {
      this.showChatWindow = newValue;
    },
  },
};
</script>
<style>
.floating-button {
  position: fixed;
  bottom: 1em;
  right: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
  width: 3em;
  height: 3em;
  border-radius:3em;
  cursor: pointer;
}

.circle {
  color: #fff;
}
</style>
