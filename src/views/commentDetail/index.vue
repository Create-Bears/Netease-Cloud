<template>
  <div class="container">
    <header class="header">
      <div class="header-left">
        <span @click="()=>{
          this.$router.go(-1)
          }">&lt;</span>
      </div>
      <div class="header-right">
        <span>查看更多评论</span>
      </div>
    </header>
    <main class="main">
      <div class="content">
        <div class="commentList" v-for="comment in commentList" :key="comment.id">
          <CommentList :comment="comment"/>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";

import CommentList from '@/components/commentList'
export default {
  computed: mapState({
    commentList: store => store.detail.commentList,
  }),
  components:{
    CommentList
  }
};
</script>

<style lang="scss">
@import 'index.scss';
</style>