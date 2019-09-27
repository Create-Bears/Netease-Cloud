<template>
  <div class="container-add">
    <div class="header">
      <div class="header-left"></div>
      <div class="header-mid">
        <span>新增地址</span>
      </div>
      <div class="header-right"></div>
    </div>
    <main class="main">
      <div class="content">
        <div>
          <input
            placeholder="姓名"
            type="text"
            v-on:input="handle"
            v-model="val"
          />
        </div>
        <div>
          <input
            placeholder="电话号码"
            type="number"
            v-on:input="handleTel"
            v-model="tel"
          />
        </div>
        <div>
          <input
            placeholder="地址"
            type="text"
            v-on:input="handleAddress"
            v-model="address"
          />
        </div>
        <div>
          <input
            placeholder="详细地址"
            type="text"
            v-on:input="handleDetailAddress"
            v-model="detailAddress"
          />
        </div>
        <p>
          设为默认地址
          <input type="checkbox" />
        </p>
      </div>
    </main>
    <footer class="footer">
      <span @click="handCancel">取消</span>
      <span @click="handCancel">保存</span>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: "",
      tel: "",
      address: "",
      detailAddress: ""
    };
  },
  methods: {
    handCancel() {
      this.$emit("handCancelAddress", false);
    },
    handle(e) {
      // eslint-disable-next-line no-console
      console.log(e.target.value);
      this.val = e.target.value;
    },
    handleTel(e) {
      // eslint-disable-next-line no-console
      console.log(e.target.value);
      this.tel = e.target.value;
    },
    handleAddress(e) {
      // eslint-disable-next-line no-console
      console.log(e.target.value);
      this.address = e.target.value;
    },
    handleDetailAddress(e) {
      // eslint-disable-next-line no-console
      console.log(e.target.value);
      this.detailAddress = e.target.value;
    }
  }
};
</script>
<style lang="scss" scoped>
%juzhong {
  display: flex;
  align-items: center;
  justify-content: center;
}
.container-add {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  display: flex;
  height: 0.5rem;
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
  .content {
    div {
      width: 100%;
      line-height: 0.5rem;
      border-bottom: 1px solid #ccc;
      input {
        padding: 0 0.1rem;
        width: 100%;
        height: 0.5rem;
        line-height: 0.5rem;
        border: none;
        outline: none;
        margin-top: 1px;
      }
    }
    p {
      width: 100%;
      height: 0.5rem;
      text-align: center;
      line-height: 0.5rem;
      border-bottom: 1px solid #ccc;
    }
  }
}
.footer {
  display: flex;
  height: 0.5rem;
  left: 0.5rem;
  text-align: center;
  font-size: 0.18rem;
  span {
    flex: 5;
    margin-right: 4px;
    line-height: 0.5rem;
    height: 0.5rem;
    width: 100%;
    border-radius: 0px;
  }
  span:nth-child(2) {
    color: #fff;
    background-color: #108ee9;
  }
}
</style>
