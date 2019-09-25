<template>
   <div class="chooseList">
      <div class="chooseList-top">
         <ul>
           <li  
           v-for="(nav,index) in navList" 
           @click="handCurrentIndex(index)" 
           :class="currentIndex===index?'active':'null'"
           :key="nav.id" 
           v-text="nav.title"></li>
          </ul> 
          <div v-if="tabShow">
             <li 
             v-for="(list,index) in detailList.filterCategory" 
             :class="detailIndex===index?'active':'null'"
             :key="list.id" 
             @click="handChange(index,list.id)">
               {{list.name}}
             </li>
          </div>
      </div>
      <div class="chooseList-bottom">
          <dl 
          v-for="detail in detailList.data" 
          :key="detail.id"
          @click="handClickDetail(detail.id)"
          >
            <dt>
              <img width="167.5" height="167.5" v-lazy="detail.list_pic_url" alt="">
            </dt>
            <dd>
              <p v-text="detail.name"></p>
              <p>￥{{detail.retail_price}}元</p>
            </dd>
          </dl>
      </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      navList:[
        {
          title:"综合",
          id:1
        }, {
          title:"价格",
          id:2
        }, {
          title:"全部分类",
          id:3
        }
      ],
      currentIndex:0,
      tabShow:false,
      detailIndex:0,
    }
  },
  computed: mapState({
    detailList:store=>store.search.detailList,
    keyWord:store=>store.search.keyWord
  }),
  methods: {
    handCurrentIndex(index){
      this.currentIndex=index;
      this.$store.commit('search/priceSort')
      if(index===2){
        this.tabShow=true;
      }else{
        this.tabShow=false
      }
    },
    handChange(index,id){
      this.detailIndex=index;
      this.$store.dispatch('search/_searchFit',{keyword:this.keyWord,categoryId:id})
    },
    handClickDetail(id){
      this.$router.push(`/productDetail/${id}`)
    }
  },
}
</script>

<style lang="scss">
  
</style>