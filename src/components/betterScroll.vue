<template>
  <div class="bscroll-warp" ref="scroll_wrapper">
    <div style="width:100%;height:auto">
      <div v-show="is_pull_down" class="down_refresh">{{loading_msg}}</div>
      <slot></slot>
      <div v-show="is_pull_up" class="upload_more">{{loading_msg}}</div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      is_pull_down: false, //配合做 loading 动画
      is_pull_up: false, //配合做 loading 动画
      scroll: null,
      loading_msg: "玩命加载中... 请耐心等待",
      timeout_lock: null //超时设置
      // "没有更多数据了"
    };
  },
  props: [
    "handleRefresh", //下拉刷新的回调
    "handleLoadMore", //上啦加载的回调
    "value",
    "page",
    "pageSize",
    "categoryId"
    // "query",
    // "limit",
    // "count",
    // "ishandlefinish" //是否结束加载
  ],
  mounted() {
    const eleScroll = this.$refs.scroll_wrapper;
    console.log(eleScroll);
    // 实例化
    this.scroll = new BScroll(this.$refs.scroll_wrapper, {
      pullDownRefresh: {
        threshold: 50,
        stop: 40
      },
      pullUpLoad: {
        threshold: 50,
        stop: 40
      },
      threshold: 3,
      click: true,
      mouseWheel: true
    });
    //监听下拉事件
    this.scroll.on("pullingDown", () => {
      console.log(123);
      this.is_pull_down = true;
      this.loading_msg = "玩命加载中... 请耐心等待";
      //数据请求替换
      // this.handleRefresh();
      this.refreshDispatch();
    });
    //监听上拉加载
    this.scroll.on("pullingUp", () => {
      this.is_pull_up = true;
      this.loading_msg = "玩命加载中... 请耐心等待";
      // connect 拼接数据
      this.handleLoadMore();
      this.loadMoreDispatch();
    });
  },
  methods: {
    loadMoreDispatch() {
      console.log("handleLoadMore");
      setTimeout(() => {
        this.$store.dispatch("category/_getGoodsList", {
          page: this.page,
          size: this.pageSize,
          categoryId: this.categoryId
        });
      }, 1000);
    },
    refreshDispatch() {
      console.log(123);
      setTimeout(() => {
        this.$store.commit("category/setGoodList");
      }, 2000);
    }
  },
  watch: {
    value() {
      if (this.is_pull_down) {
        this.loading_msg = "加载完成";
        setTimeout(() => {
          this.scroll.finishPullDown();
          this.is_pull_down = false;
          this.scroll.refresh();
        }, 300);
        return;
      }
      if (this.is_pull_up) {
        this.loading_msg = "加载完成";
        setTimeout(() => {
          this.scroll.finishPullUp();
          this.is_pull_up = false;
          this.scroll.refresh();
        }, 200);
        return;
      }
    }
  }
};
// @props {
//     list: {
//         query?: {[key:string]:any}, 查询条件
//         limit?: number, 每次查询的数量 默认10
//         count: number, 最后一次查询结果返回的长度 用来控制loadMore的显示与否
//         refreshDispatch?: string pull-refresh 查询的store dispacthName, 当需要下拉刷新的时候才传
//         loadMoreDispatch: string loadMore 查询的store dispacthName
//         value: Array<{[key:string]:any}> 查询结果  渲染结果
//     }
// }
</script>

<style lang="scss" scoped>
.bscroll-warp {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .scroll_container {
    width: 100%;
    height: auto;
    padding-left: 20px;
    padding-right: 20px;
  }
}
.down_refresh {
  position: relative;
  z-index: 999;
  line-height: 0.4rem;
  text-align: center;
  background-color: lightblue;
  z-index: 999;
}
.upload_more {
  position: relative;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  background-color: lightblue;
  z-index: 999;
}
</style>