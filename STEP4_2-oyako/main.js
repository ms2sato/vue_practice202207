const Counter = {
  props: ["cnt"], // ①
  template: `<p>{{ cnt }}<button v-on:click="childCountUp" >カウントアップ</button></p>`,
  methods: {
    childCountUp: function () {
      this.$emit("count-up"); // ②
    },
  },
};
new Vue({
  el: "#app",
  data: {
    // ③
    count: 0,
  },
  components: {
    counter: Counter,
  },
  methods: {
    // ④
    countUp: function () {
      this.count += 1;
    },
  },
});
