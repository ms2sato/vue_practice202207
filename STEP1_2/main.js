
new Vue({
  el: '#app',
  data: {
    count: 0
  },
  methods: { // ②
    countUp: function() { // ③
      this.count += 1;
    },
    countDown: function() { // ③
      this.count -= 1;
    }
  }
});
