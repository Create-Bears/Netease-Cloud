<template>
  <div class="main">
    <div class="main-container">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in swiperSlides" :key="index">
          <img width="100%" v-lazy="item.image_url" alt />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="channe">
        <div
          class="channe-item"
          v-for="(item, index) in channels"
          :key="index"
          @click="jumpCategorys(item.id)"
        >
          <span>
            <img v-lazy="item.icon_url" alt />
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
            <div
              v-for="(item, index) in brandList"
              :key="index"
              @click="
                () => {
                  $router.push(`/homeDetail/${item.id}`);
                }
              "
            >
              <span class="names">{{ item.name }}</span>
              <span>
                <img v-lazy="item.new_pic_url" alt />
              </span>
              <span class="price">{{ item.floor_price }}元起</span>
            </div>
          </div>
        </div>
        <div class="smallTwo">
          <div class="title">
            <h3>新品首发</h3>
          </div>
          <div class="content">
            <div
              v-for="(item, index) in newGoodsList"
              :key="index"
              @click="
                () => {
                  $router.push(`/productDetail/${item.id}`);
                }
              "
            >
              <Item :Item="item" />
            </div>
          </div>
        </div>
        <div class="smallThree">
          <div class="title">
            <h3>人气推荐</h3>
          </div>
          <div class="content">
            <div
              v-for="(item, index) in hotGoodsList"
              :key="index"
              @click="
                () => {
                  $router.push(`/productDetail/${item.id}`);
                }
              "
            >
              <div class="imgs">
                <span>
                  <img v-lazy="item.list_pic_url" alt />
                </span>
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
              <div
                v-for="(itm, index) in item.goodsList"
                :key="index"
                @click="
                  () => {
                    $router.push(`/productDetail/${itm.id}`);
                  }
                "
              >
                <Item :Item="itm" />
              </div>
              <div class="last" @click="jumpCategorys(item.id)">
                <span>更多{{ item.name }}好物</span>
                <span>
                  <img src="@/static/images/back.png" alt />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Item from "@/components/item";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { mapState } from "vuex";
import scroll from "@/components/scroll.vue";
import "swiper/dist/css/swiper.css";
import "./index.scss";
export default {
  name: "Home",
  components: {
    swiper,
    swiperSlide,
    scroll,
    Item
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  created() {
    this.$store.dispatch("main/_getFirstList");
  },
  computed: mapState({
    swiperSlides: store => store.main.swiperSlides,
    channels: store => store.main.channels,
    brandList: store => store.main.brandList,
    newGoodsList: store => store.main.newGoodsList,
    hotGoodsList: store => store.main.hotGoodsList,
    topicList: store => store.main.topicList,
    categoryList: store => store.main.categoryList
  }),
  methods: {
    jumpCategorys(id) {
      this.$router.push({ path: "/categorys/", query: { id } });
    }
  }
};
</script>

<style></style>
