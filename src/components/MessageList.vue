<template>
  <v-container>
    <v-list>
      <v-list-item
        v-for="item in this.$store.state.messageList"
        :key="item.message"
        link
      >
        <v-list-item-title>{{ item.message }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-text-field
      label="Input your message here."
      prepend-icon="mdi-message-text-outline"
      v-model="inputMessage"
    />
    <v-btn v-on:click="addMessage">Add</v-btn>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function () {
    return {
      //      messageList: [],
      inputMessage: "",
    };
  },
  methods: {
    addMessage: function () {
      //   this.messageList.push({message: this.inputMessage});
      this.$store.commit("addMessageToMessageList", this.inputMessage);
    },
  },
};
</script>
