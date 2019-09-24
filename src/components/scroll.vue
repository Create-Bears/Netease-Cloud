<template>
  <div class="person-wrap" ref="personWrap">
    <ul class="person-list" ref="personTab">
      <li class="person-item" v-for="(item, index) in topicList" :key="index">
        <span><img v-lazy="item.scene_pic_url" alt=""/></span>
        <span
          >{{ item.title }}<em>￥{{ item.price_info }}元起</em></span
        >
        <span>{{ item.subtitle }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  created() {
    this.$store.dispatch("main/_getFirstList");
  },
  data() {
    return {
      topicList: []
    };
  },
  mounted() {
    this.topicList = this.$store.state.main.getList.topicList;
    this.initScroller();
  },
  methods: {
    initScroller() {
      // 默认有3个li子元素，每个子元素的宽度为320px
      let width = 3 * 320;
      this.$refs.personTab.style.width = width + "px";
      // this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.personWrap, {
            startX: 0,
            click: true,
            scrollX: true,
            // 忽略竖直方向的滚动
            scrollY: false,
            eventPassthrough: "vertical"
          });
        } else {
          this.scroll.refresh();
        }
      });
    }
  }
};
</script>

<style style lang="scss">
.person-wrap {
  width: 100%;
  height: 2.5rem;
  overflow: hidden;
}
.person-list {
  height: 2.5rem;
  display: flex;
}
.person-item {
  width: 100%;
  height: 2.5rem;
  margin: 0 0.5%;
  display: flex;
  flex-direction: column;
  span {
    width: 100%;
    &:nth-child(1) {
      height: 2rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &:nth-child(2) {
      height: 0.25rem;
      line-height: 0.25rem;
      font-size: 0.16rem;
      margin-top: 0.05rem;
      em {
        font-style: normal;
        color: darkred;
        margin-left: 0.05rem;
      }
    }
    &:nth-child(3) {
      height: 0.25rem;
      line-height: 0.25rem;
      font-size: 0.12rem;
      color: gray;
      margin-top: 0.05rem;
    }
  }
}
</style>
