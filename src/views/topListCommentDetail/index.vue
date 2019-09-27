<template>
  <div class="container">
    <Header :title="title" />
    <main class="main">
      <div class="content">
        <div class="textAreaContent">
          <textarea maxlength="80" v-model="content"></textarea>
          <span>{{content.length}}/80</span>
        </div>
        <div class="buttons">
          <div>
            <button 
            v-if="content" 
            style="backgroundColor:#fff;color:#000"
            @click="handDelete"
            >清空</button>
          </div>
          <button @click="handAddComment">留言</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from "@/components/header";
import {mapActions,mapState,mapGetters} from 'vuex'
export default {
  data() {
    return {
      title: "填写留言",
      content:'',
    };
  },
  computed:mapState({
    msg:store=>store.topList.msg,
  }),
  methods:{
    ...mapActions('topList',['_addCommentData']),
    handAddComment(){
      this._addCommentData({
        content:this.content,
        typeId:1,
        valueId:this.$route.params.id
      })
      alert('留言成功');
      this.content="";
    },
    handDelete(){
      this.content="";
    }
  },
  components: {
    Header
  }
};
</script>

<style lang="scss">
.container {
  background-color: #f4f4f4;
  .header {
    background-color: #fff;
  }
}
.textAreaContent {
  width: 100%;
  height: 2rem;
  padding: 0.1rem 0.1rem 0.2rem;
  position: relative;
  textarea {
    width: 100%;
    height: 100%;
    border: none;
  }
  span {
    height: 0.2rem;
    position: absolute;
    bottom: 0;
    left: 0.1rem;
    right: 0.1rem;
    text-align: right;
    line-height: 0.2rem;
    padding: 0 0.1rem;
    width: auto;
    color: gray;
    background: white;
    font-size: 0.14rem;
  }
}
.buttons {
  width: 100%;
  height: auto;
  padding: 0.05rem 0.1rem;
  display: flex;
  justify-content: space-between;
  button{
    width: 1rem;;
    height: 0.3rem;
    border-radius: 0.05rem;
    color: #fff;
    background-color: #108ee9;
    border: none;
    outline: 0;
  }
}
</style>