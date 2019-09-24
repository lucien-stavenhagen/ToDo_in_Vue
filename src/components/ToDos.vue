<template>
  <div>
    <AddTodo />
      <div class="border rounded p-2" v-if="getAllTodos.length >0">
        <button class="btn btn-secondary border border-dark" v-on:click="setTodosType('all')">All ({{getAllTodos.length}})</button>
        <button class="btn btn-secondary border border-dark" v-on:click="setTodosType('done')">Completed ({{getCompletedTodos.length}})</button>
        <button class="btn btn-secondary border border-dark" v-on:click="setTodosType('incomplete')">Incomplete ({{getIncompleteTodos.length}})</button>
      </div>
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

</style>