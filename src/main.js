import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;
//
// persisting state in local storage
// https://www.mikestreety.co.uk/blog/vue-js-using-localstorage-with-the-vuex-store
//
store.subscribe((mutation, state) => {
  localStorage.setItem(store.state.todosls, JSON.stringify(state.todos));
});
new Vue({
  store,
  beforeCreate() {
    this.$store.commit("initStore");
  },
  render: h => h(App)
}).$mount("#app");
