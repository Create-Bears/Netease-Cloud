<template>
  <div class="container">
    <header class="header">
      <div class="header-left">
        <span @click="()=>{
          this.$router.go(-1)
          }">&lt;</span>
      </div>
      <div class="header-right">
        <span>{{info.name}}</span>
      </div>
    </header>
    <main class="main">
      <div class="content">
        <div class="swiperCon">
          <swiper :options="swiperOption">
            <swiper-slide v-for="item in detailList.gallery" :key="item.id">
              <img v-lazy="item.img_url" alt />
            </swiper-slide>
            <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
          </swiper>
          <div class="swiper-bottom">
            <p>
              <span>★</span>
              <span>30天无忧退货</span>
            </p>
            <p>
              <span>★</span>
              <span>48小时快速退款</span>
            </p>
            <p>
              <span>★</span>
              <span>满88元免邮费</span>
            </p>
          </div>
        </div>
        <div class="goodMsgWrap">
          <div class="goodMsgName">{{info.name}}</div>
          <div class="goodMsgBrief">{{info.goods_brief}}</div>
          <div class="goodMsgPrice">￥{{info.retail_price}}</div>
          <div class="goodMsgBrandName" v-if="name">
            <div>{{name}}</div>
          </div>
        </div>
        <div class="goodsSize" @click="handDialogShow">
          <div>1.5m床垫*1+枕头*2、浅杏粉</div>
          <div>X 0</div>
          <div>选择规格 &gt;</div>
        </div>
        <div class="goodsComment">
          <div class="goodsCommentTitle">
            <div>评论({{comment.count}})</div>
            <div @click="handCommentDetail">查看全部 &gt;</div>
          </div>
          <div class="commentList">
            <div class="commentItem" v-for="(item,index) in commentData.pic_list" :key="index">
              <div class="userInfo">
                <span>匿名函数</span>
                <span>{{comment.data.add_time}}</span>
              </div>
              <div class="userComment">
                <span>{{comment.data.content}}</span>
              </div>
              <div class="commentPicList">
                <img width="100" height="100" :src="item.pic_url" alt />
              </div>
            </div>
          </div>
        </div>
        <div class="goodsAttribute">
          <div class="goodsAttributeLine">
            <span>-- 商品参数 --</span>
          </div>
          <div class="goodsAttributeList">
            <div class="goodsAttributeItem" v-for="(item,index) in attribute" :key="index">
              <div>{{item.name}}</div>
              <div>{{item.value}}</div>
            </div>
          </div>
        </div>
        <div class="goodsDetailImg" v-html="info.goods_desc"></div>
        <div class="goodsAttribute">
          <div class="goodsAttributeLine">
            <span>-- 常见问题 --</span>
          </div>
          <div class="problemWrap" v-for="item in issue" :key="item.id">
            <div class="problemLabel">
              <span>√</span>
              {{item.question}}
            </div>
            <div class="problemContent">{{item.answer}}</div>
          </div>
        </div>
        <div class="goodsAttribute">
          <div class="goodsAttributeLine">
            <span>-- 大家都在看 --</span>
          </div>
          <div class="goodsList">
            <div class="goodsItem" v-for="item in productList" :key="item.id">
              <item :item="item" />
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="footer">
      <div class="islike">
        <span :class="addorFlag?'active':'null'" @click="handAdd">☆</span>
        <!-- <span v-if="!addorFlag" :class="addorFlag?'active':'null'">★</span> -->
      </div>
      <div class="cartNum">
        <span class="iconfont" @click="handShopcarDetail">&#xf0179;</span>
        <p>{{goodsCount}}</p>
      </div>
      <div class="addCart" @click="()=>{
        this.dialogShow=true
        }">加入购物车</div>
      <div class="payGoods">立即购买</div>
    </footer>
    <AddShopDialog v-show="dialogShow" @listenDialog="handDialog" />
  </div>
</template>
<script>
import { mapState } from "vuex";
import Item from "@/components/item";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import AddShopDialog from "@/components/addShopDialog";
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        //滑动速度
        speed: 1000,
        // delay:1000
        autoplay: {
          delay: 1000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        mousewheelControl: true
      },
      dialogShow: false,
      
    };
  },
  computed: mapState({
    detailList: store => store.detail.detailList,
    name: store => store.detail.name,
    info: store => store.detail.info,
    comment: store => store.detail.comment,
    commentData: store => store.detail.commentData,
    attribute: store => store.detail.attribute,
    issue: store => store.detail.issue,
    productList: store => store.detail.productList,
    goodsCount:store=>store.shopcar.goodsCount,
    addorFlag:store=>store.detail.addorFlag
  }),
  mounted() {
    let id = this.$route.params.id;
    this.$store.dispatch("detail/_getDetailList", id);
    this.$store.dispatch("detail/_goodsListData", id);
     this.$store.dispatch('shopcar/_cartCount')
  },
  methods: {
    //进入详情页面
    handCommentDetail() {
      let id = this.$route.params.id;
      this.$router.push(`/commentDetail/${id}`);
      this.$store.dispatch("detail/_getCommentList", {
        valueId: id,
        typeId: 0,
        page: 1,
        size: 100
      });
    },
    handShopcarDetail() {
      this.$router.push('/main/shopcar')
    },
    //弹出框的显示
    handDialogShow() {
      this.dialogShow = true;
    },
    handDialog(flag) {
      this.dialogShow = flag;
    },
    //点击进入购物车页面
    handShopcar() {
      this.$router.push("/main/shopcar");
    },
    handAdd(){
      let id = this.$route.params.id;
      this.$store.dispatch("detail/_addorDelete", {
        valueId: id,
        typeId: 0
      });
    }
  },
  components: {
    swiper,
    swiperSlide,
    Item,
    AddShopDialog
  }
};
</script>
<style lang="scss">
@import "index.scss";

.goodsDetailImg {
  width: 100% !important;
  height: auto;
  img {
    width: 100%;
  }
}
</style>