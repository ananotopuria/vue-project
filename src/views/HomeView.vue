<template>
  <button @click="changeLang(`GE`)">GE</button>
  <button @click="changeLang(`EN`)">EN</button>

  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="ეს არის მთავარი გვერდი" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  methods: {
    changeLang(lang) {
      this.$store.dispatch(`setLang`, lang);
    },
  },
};
</script>
