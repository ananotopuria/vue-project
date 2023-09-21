<template>
  <div class="about">
    <h1>ეს არის ჩვენ შესახებ გვერდი</h1>
    <AboutForm @theText="catchtheText" buttonText="click" />

    <p>{{ aboutText }}</p>
  </div>
</template>

<script>
import AboutForm from "@/components/AboutForm.vue";
// import { mapGetters } from "vuex";
export default {
  components: {
    AboutForm,
  },
  data() {
    return {
      aboutText: null,
    };
  },
  // computed: {
  //   ...mapGetters({
  //     ena: `getLang`,
  //   }),
  // },
  methods: {
    catchtheText(event) {
      this.aboutText = event;
    },
  },
};
</script>
