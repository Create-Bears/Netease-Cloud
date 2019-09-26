<template>
  <div class="container">
    <header class="header">
      <div @click="()=>{this.$router.go(-1)}">&lt;</div>
      <div>奇趣分类</div>
      <div></div>
    </header>
    <nav class="nav">
      <Scrolls></Scrolls>
    </nav>
    <main class="main">
      <div class="main-container">
        <div class="categoryDetail">
          <div>{{ currentCategory.name }}</div>
          <div>{{ currentCategory.front_name }}</div>
        </div>
        <div class="goodsList">
          <div
            v-for="(itm, index) in goodList"
            :key="index"
            @click="()=>{
              $router.push(`/productDetail/${itm.id}`)
              }"
          >
            <Item :item="itm" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Item from "@/components/item";
import Scrolls from "@/components/scrolls.vue";
import "./index.scss";
export default {
  name: "category",
  components: {
    Scrolls,
    Item
  },
  computed: {
    ...mapState({
      currentCategory: state => state.category.currentCategory,
      goodList: state => state.category.goodList
    })
  },
  created() {
    this.$store.dispatch("category/_getCategoryList", this.$route.query.id);
    this.$store.dispatch("category/_getGoodsList", {
      page: 1,
      size: 1000,
      categoryId: this.$route.query.id
    });
  }
};
</script>

<style></style>
