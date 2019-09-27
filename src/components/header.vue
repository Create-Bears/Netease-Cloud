<template>
  <div class="header">
    <div class="header-left" @click="()=>{$router.go(-1)}">&lt;</div>
    <div class="header-mid">
      <span>{{title}}</span>
    </div>
    <div class="header-right"></div>
  </div>
</template>

<script>
export default {
  props:['title']
};
</script>

<style lang="scss">
%juzhong{
  display: flex;
  justify-content: center;
  align-items: center;
}
.header {
	display: flex;
  height: 0.5rem;
  box-shadow: 0 0.04rem 0.08rem 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
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

</style>