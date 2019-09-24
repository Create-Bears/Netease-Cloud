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
        <div class="smallFout">
          <div class="title">
            <h3>专题精选</h3>
          </div>
          <swiper :options="swiperOption">
            <swiper-slide v-for="(item, index) in topicList" :key="index">
              <img width="100%" v-lazy="item.scene_pic_url" alt="" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import {mapState} from 'vuex'
import "swiper/dist/css/swiper.css";
import "./index.scss";
export default {
  name: "Home",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        pagination: {
          el: ".swiper-pagination"
        }
      },
    };
  },
  created() {
    this.$store.dispatch("main/_getFirstList");
  },
  computed: mapState({
    swiperSlides:store=>store.main.swiperSlides,
    channels:store=>store.main.channels,
    brandList:store=>store.main.brandList,
    newGoodsList:store=>store.main.newGoodsList,
    hotGoodsList:store=>store.main.hotGoodsList,
    topicList:store=>store.main.topicList,
  }),
};
</script>

<style></style>
