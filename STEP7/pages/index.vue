<template>
  <div>
    <h1>{{ message }}</h1>
    <h1 class="headLine">見出しです</h1>
  </div>
</template>

<style>
.headLine { /* 追加 ~ */
    color: red;
  } /* ~ 追加　*/
</style>

<script>
export default {
  data: function () {
    // 追加 ~
    return {
      message: "Hello Nuxt",
    };
  }, // ~ 追加
};
</script>
