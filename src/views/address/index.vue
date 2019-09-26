<template>
  <div class="container">
    <div v-show="!addressShow" class="container-list">
      <div class="header">
        <div class="header-left">
          <span>&lt;</span>
        </div>
        <div class="header-mid">
          <span>地址管理</span>
        </div>
        <div class="header-right"></div>
      </div>
      <main class="main">
        <div class="content"></div>
      </main>
      <footer class="footer">
        <div
          @click="
            () => {
              this.addressShow = true;
            }
          "
        >
          新建地址
        </div>
      </footer>
    </div>
    <AddAddress v-show="addressShow" @handCancelAddress="handCancel" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import AddAddress from "@/components/addAddress";
export default {
  data() {
    return {
      addressShow: false
    };
  },
  methods: {
    ...mapActions("address", ["_getAddressList"]),
    handCancel(flag) {
      this.addressShow = flag;
    }
  },
  mounted() {
    this._getAddressList();
  },
  components: {
    AddAddress
  }
};
</script>

<style lang="scss" scoped>
@import "index.scss";
</style>
