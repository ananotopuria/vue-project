<template>
  <button @click="changeLang(`GE`)">GE</button>
  <button @click="changeLang(`EN`)">EN</button>

  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="ეს არის მთავარი გვერდი" /> -->
    <h1>fdfs {{ ena }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  computed: {
    ...mapGetters({
      ena: `getLang`,
    }),
  },
  methods: {
    changeLang(lang) {
      this.$store.dispatch(`setLang`, lang);
    },
  },
};
</script>
