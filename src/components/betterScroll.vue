<template>
  <div class="bscroll-warp" ref="scroll_wrapper">
    <div style="width:100%;height:auto">
      <div class="down_refresh">{{msgDown}}</div>
      <slot :data="list.value"></slot>
      <div class="upload_more">{{msgUp}}</div>
    </div>
  </div>
</template>

<script>
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
import BScroll from "better-scroll";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      //这是上拉下拉显示的提示信息
      bscrollData: {
        up: "释放刷新...",
        upend: "刷新中...",
        down: "释放加载...",
        downEnd: "上拉加载..."
      },
      msgDown: "",
      msgUp: ""
    };
  },
  props: {
    list: {
      type: Object,
      default: () => {
        return {
          query: {}, //查询条件
          limit: 10, //每次查询的数量
          count: 1000, //总共返回的长度
          refreshDispatch: "category/pullRefresh", //下拉加载的actions
          loadMoreDispatch: "category/loadMore", //上拉加载的actions
          value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // 渲染的数据
        };
      }
    }
  },
  methods: {
    //下拉刷新
    scrollUp(e) {
      let maxH = Math.abs(this.bScroll.maxScrollY);
      let h = Math.abs(e.y);
      if (h > maxH + 100) {
        this.isFlag = true;
        this.msgDown = this.bscrollData.down;
      } else {
        this.isFlag = false;
        this.msgDown = this.bscrollData.downEnd;
      }
      if (e.y > 70) {
        this.msgUp = this.bscrollData.up;
      } else {
        this.msgUp = this.bscrollData.upend;
      }
    },
    async pullRefresh() {
      await this.$store.dispatch(this.list.refreshDispatch);
    },
    async loadMore(payload) {
      await this.$store.dispatch(this.list.loadMoreDispatch, payload);
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.bScroll) {
        this.bScroll = new BScroll(".bscroll-warp", {
          scrollY: true,
          click: true,
          probeType: 3,
          mouseWheel: {
            speed: 20,
            invert: false,
            easeTime: 300
          },
          pullDownRefresh: {
            threshold: 70,
            stop: 45
          },
          pullUpLoad: {
            threshold: -45
          }
        });
        this.bScroll.on("scroll", this.scrollUp);
        this.bScroll.on("pullingDown", async () => {
          await this.pullRefresh();
          console.log("网络请求结束");
          this.bScroll.finishPullDown();
        });
        this.bScroll.on("pullingUp", async () => {
          await this.loadMore({ page: this.list.query.page + 1 });
          this.bScroll.finishPullUp();
        });
      } else {
        this.bScroll.refresh();
      }
    });
  }
};
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
  position: absolute;
  width: 100%;
  z-index: 999;
  height: 0.4rem;
  top: -0.4rem;
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