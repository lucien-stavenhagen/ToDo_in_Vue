<template>
  <div class="addtodo-view">
    <form v-on:submit.prevent="addTodo">
      <div class="form-group">
        <input type="text" v-model="todo.title" />
        <transition name="fade">
          <span v-if="this.formerrors.title.length > 0">{{this.formerrors.title}}</span>
        </transition>
      </div>
      <div class="button-group">
        <button type="submit">Submit todo</button>
        <input
          class="from-web"
          type="button"
          v-on:click="this.dispatchMarkAllDone"
          value="Mark All Done"
        />
        <input
          class="from-web"
          type="button"
          v-on:click="this.dispatchMarkAllToDo"
          value="Reset All"
        />
        <input
          class="from-web"
          type="button"
          v-on:click="this.dispatchDeleteAll"
          value="Delete All"
        />
      </div>
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  computed: {},
  methods: {
    ...mapActions([
      "dispatchNewToDo",
      "dispatchMultipleNewToDos",
      "dispatchMarkAllToDo",
      "dispatchMarkAllDone",
      "dispatchDeleteAll"
    ]),
    checkForm() {
      if (this.todo.title.length > 0) {
        this.formerrors.title = "";
        return true;
      }
      this.formerrors.title = "";
      if (this.todo.title.length === 0) {
        this.formerrors.title = "Todo can't be empty";
      }
      return false;
    },
    addTodo() {
      if (this.checkForm()) {
        this.dispatchNewToDo(this.todo);
        this.todo.title = "";
      }
    }
  },

  data() {
    return {
      todo: {
        id: null,
        title: "",
        completed: false
      },
      formerrors: {
        title: ""
      }
    };
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 1.3rem;
}
.addtodo-view {
  overflow: auto;
  max-width: 97%;
  margin: auto;
  padding: 10px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  background-color: rgb(116, 215, 245);
  border-radius: 4px;
}
.form-group span {
  display: block;
}
.form-group input {
  padding: 5px;
  border-radius: 3px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  width: 100%;
}

button,
.from-web {
  margin: 2px 0;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0);
  border-radius: 3px;
  background-color: rgb(13, 51, 87);
  color: white;
}
.from-web:hover,
.from-web:focus,
button:hover,
button:focus {
  background-color: rgb(21, 78, 131);
}
form {
  padding: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>