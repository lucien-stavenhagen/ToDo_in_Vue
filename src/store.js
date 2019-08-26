import Vue from "vue";
import Vuex from "vuex";
import uuidv1 from "uuid/v1";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: "1",
        title: "patch holes",
        completed: false
      },
      {
        id: "2",
        title: "clean stove",
        completed: false
      },
      {
        id: "3",
        title: "pick up meds",
        completed: false
      }
    ]
  },
  getters: {
    getAllTodos(state) {
      return state.todos;
    },
    getCompletedTodos(state) {
      return state.todos.filter(todo => todo.completed);
    },
    getIncompleteTodos(state) {
      return state.todos.filter(todo => !todo.completed);
    }
  },
  mutations: {
    mutateNewToDo(state, newtodo) {
      state.todos = [...state.todos, { ...newtodo, id: uuidv1() }];
    },
    mutateToggleToDo(state, id) {
      const index = state.todos.findIndex(todo => todo.id === id);
      Vue.set(state.todos[index], "completed", !state.todos[index].completed);
    },
    mutateDeleteToDo(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id);
    }
  },
  actions: {
    //
    // destructure addToDo(context)...{context.commit(...)}
    //
    dispatchNewToDo({ commit }, newtodo) {
      commit("mutateNewToDo", newtodo);
    },
    dispatchToggleToDo({ commit }, id) {
      commit("mutateToggleToDo", id);
    },
    dispatchDeleteToDo({ commit }, id) {
      commit("mutateDeleteToDo", id);
    }
  }
});
