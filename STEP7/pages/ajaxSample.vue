<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.message }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios }) { // ①
    const url = "/json/messages.json"
    const posts = await $axios.$get(url); // ②
    return { posts: posts };
  }
}
</script>