<template>
  <div class="container">
    <Header :title="title" />
    <main class="main">
      <div class="content">
        <div class="collect-co">
          <div class="collect-item" v-for="item in collectList" :key="item.id">
            <div>
              <img v-lazy="item.list_pic_url" alt />
            </div>
            <div>
              <p>{{item.name}}</p>
              <p>{{item.goods_brief}}</p>
              <p>￥{{item.retail_price}}</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from "@/components/header";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      title: "easyLikeGoods"
    };
  },
  computed: mapState({
    collectList: store => store.detail.collectList
  }),
  mounted() {
    this.$store.dispatch("detail/_getCollect", { id: 0 });
  },

  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main{
  flex: 1;
  overflow: auto;
}
.collect-item {
  display: flex;
  padding: 0.1rem;
  border-bottom: 1px solid #ededed;
  div {
    font-size: 0.16rem;
    &:nth-child(1) {
      img {
        width: 1.05rem;
        height: 1.05rem;
      }
    }
    &:nth-child(2) {
      line-height: 0.4rem;
      p {
        &:nth-child(2) {
          color: darkgrey;
        }
        &:nth-child(3) {
          color: red;
        }
      }
    }
  }
}
</style>