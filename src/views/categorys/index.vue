<template>
  <div class="container">
    <header class="header">
      <div></div>
      <div>奇趣分类</div>
      <div></div>
    </header>
    <nav class="nav">
      <div v-for="(item, index) in navLink" :key="index">
        <span>{{ item.name }}</span>
      </div>
    </nav>
    <main class="main"></main>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "category",
  computed: {
    ...mapState({
      navLink: state => state.category.navLink
    })
  },
  created() {
    this.$store.dispatch("category/_getCategoryList", this.$route.query.id);
  }
};
</script>

<style></style>
