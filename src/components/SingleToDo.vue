<template>
  <div class="todo-view">
    <div class="checkbox-group" v-bind:class="{linethru: todo.completed}">
      <button v-bind:id="todo.id" class="done-btn" v-on:click="markCompleted">Done</button>
      {{todo.title}}
    </div>
    <button class="del-btn" v-on:click="deleteTodo">Delete</button>
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
      if (this.todo.completed) {
        document.getElementById(this.todo.id).innerHTML = "Revert";
      } else {
        document.getElementById(this.todo.id).innerHTML = "Done";
      }
    },
    deleteTodo() {
      this.dispatchDeleteToDo(this.todo.id);
    }
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 1.4rem;
}
.todo-view {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 97%;
  margin: auto;
  padding: 10px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  background-color: rgb(116, 215, 245);
  border-radius: 4px;
}

.linethru {
  text-decoration: line-through;
}
.del-btn {
  background-color: red;
  padding: 5px 9px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  color: white;
}
.done-btn {
  padding: 5px 9px;
  margin-right: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
}
.del-btn:hover,
.done-btn:hover {
  cursor: pointer;
  background-color: slategray;
  color: white;
}
</style>