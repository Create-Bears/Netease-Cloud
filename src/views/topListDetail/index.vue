<template>
  <div class="container">
    <div v-if="!isShow" class="container-con">
      <div class="header">
        <div class="header-left" @click="()=>{$router.go(-1)}">&lt;</div>
        <div class="header-mid">
          <span>{{topListContent.title}}</span>
        </div>
        <div class="header-right"></div>
      </div>
      <main class="main">
        <div class="content">
          <div class="topicDetailImg" v-html="topListContent.content"></div>
          <div class="commentWrap">
            <div class="titleLine">
              <div>精选留言</div>
            </div>
            <div class="commentList">
              <div class="commentItem" v-for="item in commentList" :key="item.id">
                <CommentList :comment="item" />
              </div>
              <div class="moreComment" @click="()=>{this.isShow=true}">
                <span>查看更多评论</span>
              </div>
            </div>
          </div>
          <div class="relateTopic">
            <div class="relateTopicTitle">推荐专题</div>
            <div
              class="relateTopicItem"
              v-for="item in topicList"
              :key="item.id"
              @click="()=>{
              handClickDetail(item.id)
              }"
            >
              <img v-lazy="item.scene_pic_url" alt />
              <div>{{item.title}}</div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <LookMoreComment v-if="isShow" :id="id" @handCommentShow="handClick" />
  </div>
</template>

<script>
import LookMoreComment from "@/components/lookMoreComment";
import CommentList from "@/components/commentList";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      isShow: false,
      id:0,
    };
  },
  computed: mapState({
    topListContent: store => store.topList.topListContent,
    topicList: store => store.topList.topicList,
    commentList: store => store.topList.commentList
  }),
  methods: {
    ...mapActions("topList", [
      "_getTopList",
      "_getTopListRelated",
      "_getCommentList"
    ]),
    handClick(data) {
      this.isShow = data;
    },
    handClickDetail(id) {
      this.id=id;
      this._getTopList(id);
      this._getTopListRelated(id);
      this._getCommentList({
        valueId: id,
        typeId: 1,
        size: 5,
        page: 1
      });
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    this._getTopList(this.id);
    this._getTopListRelated(this.id);
    this._getCommentList({
      valueId: this.id,
      typeId: 1,
      size: 5,
      page: 1
    });
  },
  components: {
    LookMoreComment,
    CommentList
  }
};
</script>

<style lang="scss">
@import "index.scss";
.topicDetailImg {
  width: 100%;
  height: auto;
  img {
    width: 100%;
  }
}
</style>