<template>
  <div>
    <form>
      <div>
        <input v-model="email" type="email" placeholder="email" />
      </div>
      <div>
        <textarea v-model="message"></textarea>
      </div>
      <div>
        <button type="button" @click="sendMessage()">
          {{ buttonTextVal }}
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: {
    buttonTextVal: String,
  },
  data() {
    return {
      email: null,
      message: null,
    };
  },
  methods: {
    sendMessage() {
      console.log(this.email, this.message);
    },
  },
};
</script>
