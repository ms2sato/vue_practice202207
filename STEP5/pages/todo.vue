<template>
  <div>
    <input type="text" v-model="todoText" /><button v-on:click="addTodo">
      登録
    </button>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <div v-if="!todo.done">
          <input
            type="checkbox"
            v-bind:checked="todo.done"
            v-on:change="changeStatus(todo)"
          />
          {{ todo.text }}
        </div>
        <div v-else class="done">
          {{ todo.text }}
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .done {
    text-decoration: line-through;
  }
</style>

<script>
export default {
  data: function () {
    return {
      todoText: "",
      todos: []
    };
  },
  methods: {
    addTodo: function () {
      this.todos.push({
        text: this.todoText,
        id: this.todos.length + 1,
        done: false,
      });

      this.todoText = "";
    },
    changeStatus: function (todo) {
      todo.done = !todo.done;
    },
  },
  async asyncData({ $axios }) { // ①
    const url = "/json/todos.json"
    const todos = await $axios.$get(url); // ②
    return { todos };
  }
};
</script>
