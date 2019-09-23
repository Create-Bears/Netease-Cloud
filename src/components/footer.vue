<template>
  <footer class="footer">
    <router-link to="/main/home">首页</router-link>
    <router-link to="/main/special">专题</router-link>
    <router-link to="/main/classify">分类</router-link>
    <router-link to="/main/shopcar">购物车</router-link>
    <router-link to="/main/mine">我的</router-link>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.footer {
  height: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  align-items: center;
  a {
    color: black;
  }
}
</style>
