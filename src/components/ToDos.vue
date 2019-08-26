<template>
  <div class="todos-view">
    <AddTodo />
    <transition name="fade">
      <div v-if="getAllTodos.length >0" class="button-group">
        <button v-on:click="setTodosType('all')">All ({{getAllTodos.length}})</button>
        <button v-on:click="setTodosType('done')">Completed ({{getCompletedTodos.length}})</button>
        <button v-on:click="setTodosType('incomplete')">Incomplete ({{getIncompleteTodos.length}})</button>
      </div>
    </transition>
    <div v-if="this.todostype==='incomplete'">
      <div v-bind:key="todo.id" v-for="todo in getIncompleteTodos">
        <SingleToDo v-bind:todo="todo"></SingleToDo>
      </div>
    </div>
    <div v-else-if="this.todostype==='done'">
      <div v-bind:key="todo.id" v-for="todo in getCompletedTodos">
        <SingleToDo v-bind:todo="todo"></SingleToDo>
      </div>
    </div>
    <div v-else>
      <div v-bind:key="todo.id" v-for="todo in getAllTodos">
        <SingleToDo v-bind:todo="todo"></SingleToDo>
      </div>
    </div>
  </div>
</template>
<script>
import SingleToDo from "./SingleToDo";
import AddTodo from "./AddTodo";

import { mapGetters } from "vuex";
export default {
  name: "ToDos",
  components: {
    AddTodo,
    SingleToDo
  },
  computed: {
    ...mapGetters(["getAllTodos", "getCompletedTodos", "getIncompleteTodos"])
  },
  methods: {
    setTodosType(todostype) {
      this.todostype = todostype;
    }
  },
  data() {
    return {
      todostype: "all"
    };
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
.button-group {
  padding: 1px 0;
  max-width: 97%;
  margin: auto;
}
button {
  font-size: 1.2rem;
  padding: 6px 8px;
  border-radius: 4px;
  border: 2px solid rgba(0, 0, 0, 0.1);
}
button:hover,
button:focus {
  background-color: slategray;
  color: white;
}

.todos-view {
  max-width: 90%;
  margin: auto;
  padding: 6px;
  border-radius: 4px;
  border: 2px solid rgba(0, 0, 0, 0.1);
}
fade-enter-active,
.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>