<template>
  <div>
    <input type="text" v-model="todoText" />
    <button v-on:click="addTodo">登録</button>
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
import { ref, reactive } from "@vue/composition-api";
export default {
  props: ["defTodos"],
  setup(props) {
    const todoText = ref("");
    const todos = reactive(props.defTodos);
    const addTodo = function () {
      todos.push({
        text: todoText.value,
        id: todos.length + 1,
        done: false,
      });

      todoText.value = "";
    };

    const changeStatus = function (todo) {
      todo.done = !todo.done;
    };

    return {
      addTodo,
      changeStatus,
      todoText,
      todos,
    };
  },
};
</script>
