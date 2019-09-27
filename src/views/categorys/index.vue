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
          :handleRefresh="handleRefresh"
          :handleLoadMore="handleLoadMore"
          :value="goodList"
          :page="page"
          :pageSize="pageSize"
          :categoryId="$route.query.id"
          @changePage="handChange"
        >
          <div class="main-container">
            <div class="categoryDetail">
              <div>{{ currentCategory.name }}</div>
              <div>{{ currentCategory.front_name }}</div>
            </div>

            <div class="goodsList">
              <!-- {{goodList}} -->
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
    handleRefresh() {
      // console.log("handleRefresh");
      // setTimeout(() => {
      //   this.goodsList = [
      //     { id: 1, name: "1234" },
      //     { id: 2, name: "2234" },
      //     { id: 3, name: "3234" },
      //     { id: 4, name: "4234" }
      //   ];
      //   console.log(this.goodsList.length);
      // }, 2000);
    },
    handleLoadMore() {
      this.page++;
    },
    handChange(page) {
      this.page = page;
    }
  },
  computed: {
    ...mapState({
      currentCategory: state => state.category.currentCategory,
      goodList: state => state.category.goodList,
      id: state => state.category.id
    })
  },
  mounted() {
    this.goodsList = this.$store.state.category.goodList;
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
