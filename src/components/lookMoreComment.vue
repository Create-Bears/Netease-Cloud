<template>
  <div class="container-comment">
    <div class="header">
      <div class="header-left" @click="handShow()">&lt;</div>
      <div class="header-mid">
        <span>查看更多评论</span>
      </div>
      <div class="header-right"></div>
    </div>
    <main class="main">
      <div class="content">
        <div class="commentList">
          <div class="commentItem" v-for="item in commentList" :key="item.id">
            <CommentList :comment="item" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CommentList from "@/components/commentList";

export default {
  props: ["id"],
  computed: mapState({
    commentList: store => store.topList.commentList
  }),
  methods: {
    ...mapActions("topList", ["_getCommentList"]),
    handShow(){
      this.$emit('handCommentShow',false)
    }
  },
  mounted() {
    this._getCommentList({
      valueId: this.id,
      typeId: 1,
      size: 100,
      page: 1
    });
  },
  components: {
    CommentList
  }
};
</script>

<style lang="scss">
.container-comment {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
%juzhong {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header {
  display: flex;
  height: 0.5rem;
  box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.12),
    0 0 6px 0 rgba(0, 0, 0, 0.04);
  .header-left {
    flex: 1;
    @extend %juzhong;
    span {
      font-size: 0.24rem;
      font-weight: 800;
    }
  }
  .header-mid {
    flex: 8;
    @extend %juzhong;
    font-size: 0.16rem;
  }
  .header-right {
    flex: 1;
    @extend %juzhong;
  }
}
.main {
  flex: 1;
  overflow: auto;
}
</style>