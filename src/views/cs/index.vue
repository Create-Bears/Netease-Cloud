<template>
  <div class="index">
    <my-scroll :page="page" :on-refresh="onRefresh" :on-pull="onPull">
      <div slot="scrollList">
        <div class="lists" v-for="(item, index) in getTop" :key="index">
          <div class="fonts">
            <span><img v-lazy="item.scene_pic_url" alt=""/></span>
            <span class="title">{{ item.title }}</span>
            <span class="subtitle">{{ item.subtitle }}</span>
            <span class="price">￥{{ item.price_info }}元起</span>
          </div>
        </div>
      </div>
    </my-scroll>
  </div>
</template>
<script type="text/javascript">
import { mapState } from "vuex";
import myScroll from "@/components/myScroll.vue";
export default {
  data() {
    return {
      page: {
        counter: 1,
        pageStart: 1,
        pageEnd: 10,
        total: 100
      }
    };
  },
  methods: {
    onRefresh(mun) {
      //刷新回调
      setTimeout(() => {
        this.$root.$emit("setState", 3);
      }, 500);
    },
    onPull(mun) {
      //加载回调
      if (this.page.counter <= this.page.total) {
        setTimeout(() => {
          this.page.counter++;
          this.$root.$emit("setState", 5);
          for (let i = 0; i < 10; i++) {
            this.listdata.push({});
          }
        }, 500);
      } else {
        this.$root.$emit("setState", 7);
      }
    }
  },
  components: {
    myScroll
  },
  created() {
    this.$store.dispatch("main/_getTopLists", {
      page: 1,
      size: 100
    });
  },
  computed: mapState({
    getTop: store => store.main.getTop.data
  }),
  mounted() {
    for (let i = 0; i < 1 * 50; i++) {
      this.list.push({});
    }
  }
};
</script>
<style lang="scss" scoped></style>
