<template>
  <div class="container">
    <header class="header">
      <div class="header-left">
        <span>&lt;</span>
      </div>
      <div class="header-right">
        <span>{{detailList.info.name}}</span>
      </div>
    </header>
    <main class="main">
      <div class="content">
        <div class="swiperCon">
          <swiper :options="swiperOption">
            <swiper-slide>Slide 1</swiper-slide>
            <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </main>
    <footer class="footer"></footer>
  </div>
</template>
<script>
import { mapState } from "vuex";
import 'swiper/dist/js/swiper.min.js'
import {swiper,swiperSlide} from 'vue-awesome-swiper'

export default {
  data() {
    return {
       swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          autoplay:true,
        }
    }
  },
  computed: mapState({
    detailList:store=>store.detail.detailList
  }),
  mounted() {
    let id = this.$route.params.id;
    this.$store.dispatch("detail/_getDetailList", id);
  },
  components:{
    swiper,
    swiperSlide
  }
};
</script>
<style lang="scss">
@import "index.scss";
</style>