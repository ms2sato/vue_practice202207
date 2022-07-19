
new Vue({
  el: '#app',
  data: {
    message: "Hello Vue"
  },
  created: function () {
    console.log(this.message); // インスタンスの作成完了後、ブラウザのコンソールに「Hello Vue」と表示されう
  }
});