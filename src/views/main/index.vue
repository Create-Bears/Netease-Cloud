<template>
  <div class="container">
      <router-view></router-view>
      <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/footer'
export default {
  components:{
    Footer
  }
}
</script>

<style>
@import url('index.scss');
 
</style>