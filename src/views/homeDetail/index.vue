<template>
  <div class="container">
    <div class="header">
      <div class="header-left" @click="()=>{$router.go(-1)}">&lt;</div>
      <div class="header-mid">
        <span>{{brandList.name}}</span>
      </div>
      <div class="header-right"></div>
    </div>
    <main class="main">
      <div class="content">
        <div class="content-title">
          <img v-lazy="brandList.list_pic_url" alt />
          <div class="breadDesc">{{brandList.simple_desc}}</div>
        </div>
        <div class="content-con">
          <div class="content-item" v-for="item in brandBottomList" :key="item.id">
              <Item :item="item"/>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Item from '@/components/item'
import { mapActions, mapState } from "vuex";
export default {
  computed: mapState({
    brandList: store => store.homeDetail.brandList,
    brandBottomList:store=>store.homeDetail.brandBottomList
  }),
  methods: {
    ...mapActions("homeDetail", ["_brandDetail","_brandList"])
  },
  mounted() {
    let id = this.$route.params.id;
    console.log(this.brandList.id)
    this._brandDetail(id);
    this._brandList({
      brandId: id,
      page: 1,
      size: 10000,
    });
  },
  components:{
    Item
  }
};
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
%juzhong {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header {
  display: flex;
  height: 0.5rem;
  .header-left {
    flex: 1;
    @extend %juzhong;
    span {
      font-size: 0.24rem;
      font-weight: 800;
    }
  }
  .header-mid {
    flex: 8;
    @extend %juzhong;
    font-size: 0.16rem;
  }
  .header-right {
    flex: 1;
    @extend %juzhong;
  }
}
.main {
  flex: 1;
  overflow: auto;
}
.content-title {
  img {
    width: 100%;
    height: 2.1rem;
  }
  .breadDesc {
    width: 100%;
    line-height: 0.2rem;
    padding: 0.2rem;
    background: white;
    color: gray;
  }
}
.content-con{
  display: flex;
  flex-wrap: wrap;
  .content-item{
    width:50%;
    @extend %juzhong;
  }
}
</style>