<template>
  <div id="app">
    <Header />
    <ToDos />
  </div>
</template>

<script>
import ToDos from "./components/ToDos.vue";
import Header from "./components/Header";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "app",
  components: {
    ToDos,
    Header
  }
};
</script>

<style scoped>
</style>
