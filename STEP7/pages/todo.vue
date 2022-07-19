<template>
  <com-todo :defTodos="todos"></com-todo>
</template>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>

<script>
import ComTodo from "../components/ComTodo.vue";
export default {
  components: { ComTodo },
  data: function () {
    return { todos: [] };
  },
  async asyncData({ $axios }) {
    // ①
    const url = "/json/todos.json";
    const todos = await $axios.$get(url); // ②
    return { todos };
  },
};
</script>
