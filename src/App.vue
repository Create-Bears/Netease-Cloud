<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
body,html,#app{
  width: 100%;
  height: 100%;
}
html{
  font-size: calc(100/375*100vw);
}
</style>
