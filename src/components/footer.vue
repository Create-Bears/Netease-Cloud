<template>
  <footer class="footer">
    <div
      class="footer-item"
      :class="currentIndex == 0 ? 'active' : 'null'"
      @click="handClick(0)"
    >
      <router-link to="/main/home">
        <span class="iconfont">&#xe61c;</span>
        <span>首页</span>
      </router-link>
    </div>
    <div
      class="footer-item"
      :class="currentIndex == 1 ? 'active' : 'null'"
      @click="handClick(1)"
    >
      <router-link to="/main/special">
        <span class="iconfont">&#xe615;</span>
        <span>专题</span>
      </router-link>
    </div>
    <div
      class="footer-item"
      :class="currentIndex == 2 ? 'active' : 'null'"
      @click="handClick(2)"
    >
      <router-link to="/main/classify">
        <span class="iconfont">&#xe659;</span>
        <span>分类</span>
      </router-link>
    </div>
    <div
      class="footer-item"
      :class="currentIndex == 3 ? 'active' : 'null'"
      @click="handClick(3)"
    >
      <router-link to="/main/shopcar">
        <span class="iconfont">&#xe64c;</span>
        <span>购物车</span>
      </router-link>
    </div>
    <div
      class="footer-item"
      :class="currentIndex == 4 ? 'active' : 'null'"
      @click="handClick(4)"
    >
      <router-link to="/main/mine">
        <span class="iconfont">&#xe63a;</span>
        <span>我的</span>
      </router-link>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    handClick(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style lang="scss">
%juzhong {
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  .footer-item {
    flex: 2;
    a {
      display: flex;
      flex-direction: column;
      @extend %juzhong;
    }
  }
  .active {
    a {
      color: #2196f3 !important;
      span {
        color: #2196f3 !important;
      }
    }
  }
}
</style>
