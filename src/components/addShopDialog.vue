<template>
  <div class="am-modal-content">
    <div class="am-modal-body">
      <div class="goodsSizeDo">
        <div class="goodsSizeSetMsg">
          <div>
            <img v-lazy="info.list_pic_url" alt />
          </div>
          <div>
            <p>
              单价:
              <span>￥{{info.retail_price}}</span>
            </p>
            <p>
              库存:
              <span>{{info.goods_number}}件</span>
            </p>
            <p>已选择:</p>
          </div>
          <div>
            <span @click="handDialog">X</span>
          </div>
        </div>
        <div class="goodsSizeWrap">
          <div class="goodsSizeItem" v-for="item in specificationList" :key="item.specification_id">
            <div class="goodsSizeItemName">{{item.name}}</div>
            <div class="goodsSizeListWrap">
              <div
                class="goodsSizeListItem"
                v-for="value in item.valueList"
                :key="value.id"
              >{{value.value}}</div>
            </div>
          </div>
          <div class="goodsSizeItem">
            <div class="goodsSizeItemName">数量</div>
            <div class="goodsSizeListWrap">
              <div class="goodsBuyCount">
                <span @click="reduceNum">-</span>
                <span>{{goodsCount}}</span>
                <span @click="addNum">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="goodsDoWrap">
        <div @click="handAddShopcar">加入购物车</div>
        <div>立即下单</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    info: store => store.detail.info,
    specificationList: store => store.detail.specificationList,
    goodsCount: store => store.detail.goodsCount,
    product:store=>store.detail.product
  }),
  methods: {
    handDialog() {
      this.$emit("listenDialog", false);
    },
    reduceNum() {
      this.$store.commit("detail/reduceNum");
    },
    addNum() {
      this.$store.commit("detail/addNum");
    },
    handAddShopcar(){
      alert('添加成功')
      this.$store.dispatch('shopcar/_addCartList',{
        goodsId:this.info.id,
        number:this.goodsCount,
        productId:this.product[0].id
      })
    }
  }
};
</script>

<style lang="scss">
</style>