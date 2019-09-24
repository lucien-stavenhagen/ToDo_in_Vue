<template>
  <div class="card p-2">
    <form v-on:submit.prevent="addTodo">
      <div class="form-group">
        <input class="form-control" type="text" v-model="todo.title" />
          <span v-if="this.formerrors.title.length > 0">{{this.formerrors.title}}</span>
      </div>
        <button class="btn btn-primary border border-dark" type="submit">Submit todo</button>
        <input
          class="btn btn-primary border border-dark"
          type="button"
          v-on:click="this.dispatchMarkAllDone"
          value="Mark All Done"
        />
        <input
          class="btn btn-primary border border-dark"
          type="button"
          v-on:click="this.dispatchMarkAllToDo"
          value="Reset All"
        />
        <input
          class="btn btn-danger border border-dark"
          type="button"
          v-on:click="this.dispatchDeleteAll"
          value="Delete All"
        />
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

</style>