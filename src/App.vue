<template>
  <div class="container" id="app">
    <Header />
    <ToDos />
  </div>
</template>

<script>
import ToDos from "./components/ToDos.vue";
import Header from "./components/layout/Header";

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
