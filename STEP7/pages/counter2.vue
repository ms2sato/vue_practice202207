<template>
  <div>
    <p>{{ count }}</p>
    <button v-on:click="countUp">カウントアップ</button>
    <button v-on:click="countDown">カウントダウン</button>
  </div>
</template>
<script>
import { ref } from "@vue/composition-api"; // ①
export default {
  setup() { // ②
    const count = ref(0); // ③

    const countUp = function() {
      count.value += 1; // ④
    }

    const countDown = function() {
      count.value -= 1;
    }

    return { // ⑤
      count,
      countUp,
      countDown
    }
  }
}
</script>