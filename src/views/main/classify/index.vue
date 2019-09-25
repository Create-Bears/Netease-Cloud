<template>
  <div class="main">
    <div class="content">
      <div class="searchWrap" @click="handDetail">
        <div class="searchInput">
          <input type="text" placeholder="搜索商品，共239款好物" />
        </div>
      </div>
      <div class="classify-con">
        <div class="left">
          <li
            v-for="(item, index) in tabAllList"
            :key="item.id"
            @click="handClick(index, item.id)"
            :class="currentIndex === index ? 'activeLi' : 'null'"
          >
            {{ item.name }}
          </li>
        </div>
        <div class="right">
          <div class="right-titleImg">
            <div>
              {{ tabCurrentList.front_desc }}
            </div>
            <img :src="tabCurrentList.wap_banner_url" alt="" />
          </div>
          <div class="right-title">-- {{ tabCurrentList.name }}分类 --</div>
          <div class="right-listData">
            <dl v-for="item in tabCurrentList.subCategoryList" :key="item.id" @click="handClickDetail(item.id)">
              <dt>
                <img :src="item.wap_banner_url" alt="" />
              </dt>
              <dd>
                <li>{{ item.name }}</li>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      currentIndex: 0
    };
  },
  computed: mapState({
    tabAllList: store => store.classify.tabAllList,
    tabCurrentList: store => store.classify.tabCurrentList
  }),
  mounted() {
    this.$store.dispatch("classify/_getAllList");
  },
  methods: {
    handClick(index, id) {
      this.currentIndex = index;
      this.$store.dispatch("classify/_navListData", { id });
    },
    handDetail() {
      console.log(11);
      this.$router.push("/goodsSearch");
    },
    handClickDetail(id){
      console.log(id)
      this.$router.push({ path: "/categorys/", query: { id } });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "/index.scss";
</style>
