<template>
  <div class="person-wrap" ref="personWrap">
    <ul class="person-list" ref="personTab">
      <li
        v-for="(item, index) in navLink"
        :key="index"
        @click="clicks(item.id)"
        :class="current === item.id ? 'person-items' : 'person-item'"
      >
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapState } from "vuex";
export default {
  name: "Scrolls",
  computed: {
    ...mapState({
      navLink: state => state.category.navLink
    })
  },
  data() {
    return {
      current: this.$route.query.id
    };
  },
  mounted() {
    this.initScroller();
    this.$store.dispatch("category/_getCategoryCurrent", this.current);
  },
  methods: {
    clicks(id) {
      this.current = id;
      this.$store.commit('category/setId',id)
      this.$store.dispatch("category/_getCategoryCurrent", id);
      this.$store.dispatch("category/_getGoodsList", {
        page: 1,
        size: 1000,
        categoryId: id
      });
    },
    initScroller() {
      // 默认有5个li子元素，每个子元素的宽度为320px
      let width = 5 * 35;
      this.$refs.personTab.style.width = width + "%";
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
  height: 0.32rem;
  overflow: hidden;
}
.person-list {
  height: 0.32rem;
  display: flex;
}
.person-items {
  width: 100%;
  height: 0.32rem;
  border-bottom: 1px solid #108ee9;
  display: flex;
  flex-direction: column;
  span {
    color: #108ee9;
    width: 100%;
    text-align: center;
    line-height: 0.32rem;
  }
}
.person-item {
  width: 100%;
  height: 0.32rem;
  display: flex;
  flex-direction: column;
  span {
    width: 100%;
    text-align: center;
    line-height: 0.32rem;
  }
}
</style>
