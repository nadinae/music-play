<template>
  <div ref="slider">
      <slot></slot>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui';
export default {
  components:{
    'mt-swipe':Swipe,
    'mt-swipe-item':SwipeItem,
  }
}
</script>
<style>
.mint-swipe-items-wrap{
  width:100%;
}
</style>
