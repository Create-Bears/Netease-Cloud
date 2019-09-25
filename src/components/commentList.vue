<template>
  <div class="commentItem">
    <!-- {{comment}} -->
    <div class="userInfo">
      <span>匿名函数</span>
      <span>{{comment.add_time}}</span>
    </div>
    <div class="userComment">
      <span>{{comment.content}}</span>
    </div>
    <div class="commentPicList" v-if="comment.pic_list[0]">
      <img width="100" height="100" v-lazy="comment.pic_list[0].pic_url" alt />
    </div>
  </div>
</template>

<script>

export default {
  props:['comment'],
  
};
</script>

<style lang="scss">
</style>