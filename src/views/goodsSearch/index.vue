<template>
  <div class="container">
    <header class="header">
      <div class="header-left">
        <span @click="handBack">&lt;</span>
      </div>
      <div class="header-mid">
        <svg
          t="1569285855205"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2137"
          width="16"
          height="16"
          @click="handClick"
        >
          <path
            d="M882.6369 904.308991 730.351542 708.192358c7.884574-6.656607 15.529695-13.647835 22.890336-21.0095 33.348526-33.350572 59.533908-72.194252 77.8296-115.453499 18.948561-44.803415 28.555359-92.378967 28.555359-141.40659 0-49.021483-9.607822-96.593965-28.556383-141.393287-18.295692-43.256176-44.481074-82.09781-77.828576-115.446335S681.053766 113.948215 637.797589 95.652524C592.99929 76.703963 545.429879 67.096141 496.409418 67.096141c-49.021483 0-96.593965 9.607822-141.394311 28.556383-43.256176 18.295692-82.098833 44.482097-115.446335 77.830623-33.348526 33.347502-59.533908 72.189136-77.830623 115.446335-18.948561 44.800345-28.556383 92.371804-28.556383 141.393287 0 49.027623 9.607822 96.603175 28.556383 141.40659 18.295692 43.259246 44.481074 82.10395 77.8296 115.453499 33.347502 33.349549 72.189136 59.536978 115.446335 77.833693 44.800345 18.948561 92.371804 28.556383 141.394311 28.556383 49.019437 0 96.590895-9.608845 141.389194-28.557406 12.920264-5.465478 25.436322-11.649318 37.541011-18.502399l154.415882 198.860117c11.339256 14.603603 31.987528 17.545608 46.119387 6.572696l1.705851-1.325182C891.713626 939.6458 893.977179 918.912593 882.6369 904.308991zM496.409418 732.173538c-166.428473 0-301.82928-135.410016-301.82928-301.851792 0-166.428473 135.399783-301.828256 301.82928-301.828256 166.423357 0 301.818023 135.399783 301.818023 301.828256C798.228465 596.763522 662.832775 732.173538 496.409418 732.173538z"
            p-id="2138"
          />
        </svg>
        <input type="text" v-model="inputValue" placeholder="520礼包抢先领" @input="handInput" />
      </div>
      <div class="header-right">
        <span @click="handCancel">取消</span>
      </div>
    </header>
    <main class="main">
      <div v-if="contentShow" class="content">
        <div class="historySearch" v-if="historyShow">
          <p>
            <span>历史记录</span>
            <span @click="handDelete">
              <svg
                t="1569288166352"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2173"
                width="20"
                height="21"
              >
                <path
                  d="M955.365 120.695l-300.704 0 0-13.748c0-40.567-33.029-73.575-73.597-73.575l-133.816 0c-40.568 0-73.575 33.007-73.575 73.575l0 13.748-300.683 0c-12.026 0-21.787 9.76-21.787 21.787s9.76 21.787 21.787 21.787l56.015 0 71.243 807.862c0.981 11.264 10.414 19.869 21.699 19.869l580.122 0c11.307 0 20.697-8.628 21.699-19.869l71.222-807.862 60.372 0c12.048 0 21.787-9.76 21.787-21.787s-9.76-21.787-21.787-21.787zM417.249 106.947c0-16.558 13.464-30.001 30.001-30.001l133.816 0c16.558 0 30.023 13.464 30.023 30.001l0 13.748-193.838 0 0-13.748zM782.093 948.426l-540.208 0-69.13-784.157 678.469 0-69.13 784.157zM372.564 801.364c12.026 0 21.787-9.739 21.787-21.787l0-414.192c0-12.026-9.76-21.787-21.787-21.787s-21.787 9.76-21.787 21.787l0 414.192c0 12.026 9.76 21.787 21.787 21.787zM514.179 801.364c12.048 0 21.787-9.739 21.787-21.787l0-414.192c0-12.026-9.739-21.787-21.787-21.787-12.026 0-21.787 9.76-21.787 21.787l0 414.192c0 12.026 9.76 21.787 21.787 21.787zM655.794 801.364c12.048 0 21.787-9.739 21.787-21.787l0-414.192c0-12.026-9.739-21.787-21.787-21.787s-21.787 9.76-21.787 21.787l0 414.192c0 12.026 9.739 21.787 21.787 21.787z"
                  p-id="2174"
                />
              </svg>
            </span>
          </p>
          <div>
            <span v-for="(item,index) in historyKeywordList" :key="index">{{item}}</span>
          </div>
        </div>
        <div class="hotSearch">
          <p>热门搜索</p>
          <div>
            <span
              v-for="(item,index) in hotKeyword"
              :key="index"
              :class="item.is_hot===1?'active':'null'"
              @click="handSearchDetail(item.keyword)"
            >{{item.keyword}}</span>
          </div>
        </div>
      </div>
      <div v-if="searchShow" class="searchList">
        <div class="searchList-con">
          <li v-for="(item,index) in searchList" :key="index" @click="handDetail(item)">{{item}}</li>
        </div>
      </div>
      <TabList v-if="tabListShow" :keyword="inputValue"/>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TabList from "@/components/tabList";
export default {
  data() {
    return {
      inputValue: "",
      searchShow: false,
      tabListShow: false,
      contentShow:true,
    };
  },
  computed: mapState({
    hotKeyword: store => store.search.hotKeyword,
    historyKeywordList: store => store.search.historyKeywordList,
    searchList: store => store.search.searchList,
    historyShow: store => store.search.historyShow
  }),
  mounted() {
    this.$store.dispatch("search/_searchHistory");
  },
  methods: {
    //点击跳转详情页
    handDetail() {
      this.$store.dispatch("search/_searchFit", { keyword: this.inputValue });
      this.searchShow = false;
      this.tabListShow = true;
      this.contentShow = false;
    },
    handBack() {
      this.$router.go(-1);
    },
    handClick() {
      this.$store.dispatch("search/_searchFit", { keyword: this.inputValue });
      this.searchShow = false;
      this.tabListShow = true;
      this.contentShow = false;
      this.$store.dispatch("search/_searchHistory");
    },
    handInput() {
      if (!this.inputValue == "") {
        this.searchShow = true;
        this.$store.dispatch("search/_searchHelper", {
          keyword: this.inputValue
        });
      } else {
        this.searchShow = false;
      }
    },
    handCancel() {
      this.searchShow = false;
      this.tabListShow = false;
      this.contentShow = true;
      this.inputValue = "";
    },
    handDelete() {
      this.$store.dispatch("search/_clearHistory");
    },
    handSearchDetail(keyword){
       this.$store.dispatch("search/_searchFit", { keyword});
        this.$store.commit('search/setKeyWord',keyword)
      this.searchShow = false;
      this.tabListShow = true;
      this.contentShow = false;
    }
  },
  components: {
    TabList
  }
};
</script>

<style lang="scss">
@import "index.scss";
</style>