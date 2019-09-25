<template>
  <div class="container">
    <header class="header">
      <div></div>
      <div>奇趣分类</div>
      <div></div>
    </header>
    <nav class="nav">
      <div v-for="(item, index) in navList" :key="index">
        <span>{{ item.name }}</span>
      </div>
    </nav>
    <main class="main"></main>
  </div>
</template>

<script>
import "./index.scss";
export default {
  name: "category",
  data() {
    return {
      navList: []
    };
  },
  created() {
    this.$store.dispatch("category/_getCategoryList", this.$route.query.id);
  },
  mounted() {
    this.navList = this.$store.state.category.categorys.brotherCategory;
    // eslint-disable-next-line no-console
    console.log(this.$store.state.category.categorys);
  }
};
</script>

<style></style>
