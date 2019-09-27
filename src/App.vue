<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import "~@/assets/font_ceguai1zc1/iconfont.css";

* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  text-decoration: none;
  color: #000;
}
body,
html,
#app {
  width: 100%;
  height: 100%;
}
html {
  font-size: calc(100 / 375 * 100vw);
}
.container {
  font-size: 14px;
  background-color: #fff;
}
</style>
