<template>
  <div>
    <div class="border border-dark rounded d-flex flex-row justify-content-between p-2 m-0 alert alert-info" >
      <button
        v-if="todo.completed"
        v-bind:id="todo.id"
        class="btn btn-primary border border-dark
"        v-on:click="markCompleted"
      >Revert</button>
      <button v-else v-bind:id="todo.id" class="btn btn-primary border border-dark" v-on:click="markCompleted">Done</button>
      <span v-bind:class="{linethru: todo.completed}">{{todo.title}}</span>
    <button class="btn btn-danger border border-dark" v-on:click="deleteTodo">Delete</button>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "SingleTodo",
  props: ["todo"],
  methods: {
    ...mapActions(["dispatchToggleToDo", "dispatchDeleteToDo"]),
    markCompleted() {
      this.dispatchToggleToDo(this.todo.id);
    },
    deleteTodo() {
      this.dispatchDeleteToDo(this.todo.id);
    }
  }
};
</script>
<style scoped>
.linethru {
  text-decoration: line-through;
}
</style>