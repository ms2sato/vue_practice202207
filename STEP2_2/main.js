app = new Vue({
  // ③
  el: "#app", // ④
  data: {
    // ⑤
    count: 0,
    list: [1, 4, 7, 11, 14, 15],
  },
  methods: {
    pushRandom: function () {
      this.list.push(Math.floor(Math.random() * 10) + 1);
    },
    isDisplay: function () {
      return false;
    },
  },
});
