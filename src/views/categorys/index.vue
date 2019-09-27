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
      <div class="main-content">
        <Bscroll
          :list="{
           ...category,
          refreshDispatch: 'category/pullRefresh',
          loadMoreDispatch: 'category/loadMore'
         }"
        >
          <template v-slot:default="slotProps">
            <div class="main-container">
              <div class="categoryDetail">
                <div>{{ currentCategory.name }}</div>
                <div>{{ currentCategory.front_name }}</div>
              </div>

              <div class="goodsList">

                <div
                  v-for="(itm, index) in slotProps.data"
                  :key="index"
                  @click="()=>{
              $router.push(`/productDetail/${itm.id}`)
              }"
                >
                  <Item :item="itm" />
                </div>
              </div>
            </div>
          </template>
        </Bscroll>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Bscroll from "@/components/betterScroll";
import Item from "@/components/item";
import Scrolls from "@/components/scrolls.vue";
import "./index.scss";
export default {
  name: "category",
  data() {
    return {
      goodsList: [],
      page: 0,
      pageSize: 10
    };
  },
  components: {
    Scrolls,
    Item,
    Bscroll
  },
  methods: {
    
  },
  computed: {
    ...mapState({
      currentCategory: state => state.category.currentCategory,
      goodList: state => state.category.goodList,
      id: state => state.category.id,
      category: state => state.category
    })
  },
  mounted() {
    this.goodsList = this.$store.state.category.goodList;
    this.$store.commit('category/setCategoryId', this.$route.query.id)
    this.$store.dispatch('category/pullRefresh')
  },
  created() {
    this.$store.dispatch("category/_getCategoryList", this.$route.query.id);
    this.$store.dispatch("category/_getGoodsList", {
      page: this.page,
      size: this.pageSize,
      categoryId: this.$route.query.id
    });
  }
};
</script>

<style></style>
