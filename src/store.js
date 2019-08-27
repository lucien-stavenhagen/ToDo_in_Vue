import Vue from "vue";
import Vuex from "vuex";
import uuidv1 from "uuid/v1";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    todosls: "todosls"
  },
  getters: {
    getToDoLocalStorageKey(state) {
      return state.todosls;
    },
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
  //
  // persisting state in local storage
  // https://www.mikestreety.co.uk/blog/vue-js-using-localstorage-with-the-vuex-store
  //
  mutations: {
    deleteAll(state) {
      state.todos = [];
    },
    initStore(state) {
      let init = JSON.parse(localStorage.getItem(state.todosls));
      if (init) {
        state.todos = [...init];
      }
    },
    mutateMultipleNewToDos(state, newtodos) {
      state.todos = [...state.todos, ...newtodos];
    },
    mutateNewToDo(state, newtodo) {
      state.todos = [...state.todos, { ...newtodo, id: uuidv1() }];
    },
    mutateToggleToDo(state, id) {
      const index = state.todos.findIndex(todo => todo.id === id);
      Vue.set(state.todos[index], "completed", !state.todos[index].completed);
    },
    mutateDeleteToDo(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
    mutateMarkAllDone(state) {
      state.todos = state.todos.map(todo => {
        return {
          ...todo,
          completed: true
        };
      });
    },
    mutateMarkAllToDo(state) {
      state.todos = state.todos.map(todo => {
        return {
          ...todo,
          completed: false
        };
      });
    }
  },
  actions: {
    //
    // destructure addToDo(context)...{context.commit(...)}
    //
    dispatchDeleteAll({ commit }) {
      commit("deleteAll");
    },
    dispatchMarkAllToDo({ commit }) {
      commit("mutateMarkAllToDo");
    },
    dispatchMarkAllDone({ commit }) {
      commit("mutateMarkAllDone");
    },
    dispatchMultipleNewToDos({ commit }, newtodos) {
      commit("mutateMultipleNewToDos", newtodos);
    },
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
