<template>
  <div class="main">
    <div class="main-container">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in swiperSlides" :key="index">
          <img width="100%" v-lazy="item.image_url" alt="" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="channe">
        <div class="channe-item" v-for="(item, index) in channels" :key="index">
          <span>
            <img v-lazy="item.icon_url" alt="" />
          </span>
          <span>{{ item.name }}</span>
        </div>
      </div>
      <div class="bigContent">
        <div class="smallOne">
          <div class="title">
            <h3>品牌制造商直供</h3>
          </div>
          <div class="content">
            <div v-for="(item, index) in brandList" :key="index">
              <span class="names">{{ item.name }}</span>
              <span><img v-lazy="item.new_pic_url" alt=""/></span>
              <span class="price">{{ item.floor_price }}元起</span>
            </div>
          </div>
        </div>
        <div class="smallTwo">
          <div class="title">
            <h3>新品首发</h3>
          </div>
          <div class="content">
            <div v-for="(item, index) in newGoodsList" :key="index">
              <span><img v-lazy="item.list_pic_url" alt=""/></span>
              <span class="names">{{ item.name }}</span>
              <span class="price">{{ item.retail_price }}元起</span>
            </div>
          </div>
        </div>
        <div class="smallThree">
          <div class="title">
            <h3>人气推荐</h3>
          </div>
          <div class="content">
            <div v-for="(item, index) in hotGoodsList" :key="index">
              <div class="imgs">
                <span><img v-lazy="item.list_pic_url" alt=""/></span>
              </div>
              <div class="fonts">
                <span class="names">{{ item.name }}</span>
                <span class="descript">{{ item.goods_brief }}</span>
                <span class="price">{{ item.retail_price }}元起</span>
              </div>
            </div>
          </div>
        </div>
        <div class="smallFour">
          <div class="title">
            <h3>专题精选</h3>
          </div>
          <div>
            <scroll></scroll>
          </div>
        </div>
        <div class="smallFive">
          <div
            class="bigWrapper"
            v-for="(item, index) in categoryList"
            :key="index"
          >
            <div class="title">
              <h3>{{ item.name }}</h3>
            </div>
            <div class="content">
              <div v-for="(itm, index) in item.goodsList" :key="index">
                <span><img v-lazy="itm.list_pic_url" alt=""/></span>
                <span class="names">{{ itm.name }}</span>
                <span class="price">{{ itm.retail_price }}元起</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import scroll from "@/components/scroll.vue";
import "swiper/dist/css/swiper.css";
import "./index.scss";
export default {
  name: "Home",
  components: {
    swiper,
    swiperSlide,
    scroll
  },
  data() {
    return {
      channels: [],
      brandList: [],
      newGoodsList: [],
      hotGoodsList: [],
      categoryList: [],
      swiperOption: {
        autoplay: true,
        pagination: {
          el: ".swiper-pagination"
        }
      },
      swiperSlides: []
    };
  },
  created() {
    this.$store.dispatch("main/_getFirstList");
  },
  mounted() {
    this.swiperSlides = this.$store.state.main.getList.banner;
    this.channels = this.$store.state.main.getList.channel;
    this.brandList = this.$store.state.main.getList.brandList;
    this.newGoodsList = this.$store.state.main.getList.newGoodsList;
    this.hotGoodsList = this.$store.state.main.getList.hotGoodsList;
    this.categoryList = this.$store.state.main.getList.categoryList;
    // eslint-disable-next-line no-console
    console.log(this.$store.state.main);
  }
};
</script>

<style></style>
