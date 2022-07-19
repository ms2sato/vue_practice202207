
const Counter = {
  props: ['childCount'], // ①
  template: `<div><p>{{ childCount }}</p><button v-on:click="childCountUp">カウントアップ</button></div>`,
  methods: {
      childCountUp: function () {
          this.$emit('count-up'); // ②
      }
  }
}

new Vue({
  el: '#app',
  data: { // ③
    count: 0
  },
  components: {
    'counter': Counter,
  },
  methods: { // ④
    countUp: function () {
        this.count += 1;
    }
  }
});
