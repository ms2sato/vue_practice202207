const Counter = {
  template: `<button v-on:click="childCountUp">カウントアップ</button>`,
  methods: {
    childCountUp: function () {
      this.$emit("count-up");
    },
  },
};

// このコンポーネントを実装 & 利用できるようにしてみよう
const DecrementCounter = {
  template: `<button v-on:click="childCountDown">カウントダウン</button>`,
  methods: {
    childCountDown: function () {
      this.$emit("count-down");
    },
  },
};

new Vue({
  el: "#app",
  data: {
    count: 0,
  },
  components: {
    counter: Counter,
    "decrement-counter": DecrementCounter,
  },
  methods: {
    countUp: function () {
      this.count += 1;
    },
    countDown: function () {
      this.count -= 1;
    },
  },
});
