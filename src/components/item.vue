<template>
  <dl>
    <dt>
      <img :src="Item.list_pic_url" alt="">
    </dt>
    <dd>
      <p>{{Item.name}}</p>
      <p>￥{{Item.retail_price}}</p>
    </dd>
  </dl>
</template>


<script>
export default {
  props:["Item"]
  
}
</script>
<style lang="scss" scoped>
  dl{
    dt{
      img{
        width:1.67rem;
        height: 1.67rem;
      }
    }
    dd{
      text-align: center;
      line-height: 0.3rem;;
      p:nth-child(2){
        color:red;
      }
    }
  }
</style>