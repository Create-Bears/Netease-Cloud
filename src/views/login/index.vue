<template>
  <div class="login-page">
    <div class="login-box">
      <div class="login-logo">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt />
      </div>
      <div class="login-main">
        <div class="login-input">
          <input type="text" placeholder="请输入手机号" v-model="mobile" />
        </div>
        <div class="login-input">
          <input type="password" placeholder="请输入密码" v-model="password" />
        </div>
        <div class="login-input">
          <button @click="handSubmit">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { UserLogin } from "@/service";
export default {
  data() {
    return {
      mobile: "15323807318",
      password: "123456"
    };
  },
  computed: mapState({
    session: store => store.login.session,
    msg: store => store.login.msg
  }),
  methods: {
    handSubmit() {
      if (
        /^[1-9]{1}[0-9]{5,8}$/.test(this.mobile) ||
        this.password !== "" ||
        this.mobile !== ""
      ) {
        UserLogin({
          mobile: this.mobile,
          password: this.password
        }).then(res => {
          console.log(res.data.errno)
          if (res.data.errno === 0) {
            window.localStorage.setItem("token", res.data.data.sessionKey);
            alert('登录成功')
            this.$router.push('/main')
          }
        });
      } else {
        alert("请输入完整正确信息");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login-page {
  font-size: 14px;
  .login-box {
    width: 100%;
    height: 100%;
    background: white;
    .login-logo {
      width: 100%;
      padding: 1rem 0 0.5rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 1.6rem;
      }
    }
  }
}
.login-main {
  .login-input {
    height: 0.8rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      height: 80%;
      border: none;
      width: 80%;
      font-size: 0.15rem;
    }
    button {
      width: 80%;
      height: 0.5rem;
      color: #fff;
      background-color: #108ee9;
      border: 1px solid #108ee9;
      border-radius: 5px;
      font-size: 14px;
    }
  }
}
</style>
