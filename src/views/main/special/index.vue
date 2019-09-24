<template>
  <div class="main">
    <div class="main-container">
      <div class="lists" v-for="(item, index) in getTop" :key="index">
        <div class="fonts">
          <span><img v-lazy="item.scene_pic_url" alt=""/></span>
          <span class="title">{{ item.title }}</span>
          <span class="subtitle">{{ item.subtitle }}</span>
          <span class="price">￥{{ item.price_info }}元起</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./index.scss";
export default {
  name: "Special",
  data() {
    return {
      getTop: []
    };
  },
  created() {
    this.$store.dispatch("main/_getTopLists");
  },
  mounted() {
    this.getTop = this.$store.state.main.getTop.data;
  }
};
</script>

<style></style>
