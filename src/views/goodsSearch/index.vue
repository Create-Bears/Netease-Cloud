<template>
 <div class="container">
   <header class="header">
     <div class="header-left">
       <span @click="handBack">&lt;</span>
     </div>
     <div class="header-mid">
       <input type="text" placeholder="520礼包抢先领">
     </div>
     <div class="header-right">
       <span>取消</span>
     </div>
   </header>
   <main class="main">
     <div class="content">
       <div class="hotSearch">
         <p>热门搜索</p>
         <div>
           <span 
           v-for="(item,index) in hotKeyword" 
           :key="index"
           :class="item.is_hot===1?'active':'null'"
           >
             {{item.keyword}}
           </span>
         </div>
       </div>
     </div>
   </main>
 </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    hotKeyword: store => store.search.hotKeyword,
    historyKeywordList:store=>store.search.historyKeywordList
  }),
  mounted() {
    this.$store.dispatch("search/_searchHistory");
  },
  methods: {
    handBack(){
      this.$router.go(-1)
    }
  },
};
</script>

<style lang="scss">
@import 'index.scss';
</style>