<template>
  <div>
    <p>{{ count }}</p>
    <button v-on:click="countUp">カウントアップ</button>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      count: 0
    }
  },
  methods: {
    countUp: function() {
      this.count += 1;
    }
  }
}
</script>