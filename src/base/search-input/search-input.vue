<template>
  <div class="search-box flex">
    <i></i>
    <input type="text" v-model="inputPlace">
    <span v-show="inputPlace" @click="clear"></span>
  </div>
</template>
<script>
export default {
  data(){
    return {
      inputPlace:''
    }
  },
  methods:{
    clear(){
      this.inputPlace = '';
    }
  }
}
</script>
<style scoped>
.search-box{
  width:94vw;
  margin:14vh auto 0;
  background:#fff;
  height:32px;
  border-radius:4px;
  overflow:hidden;
  align-items: center;
  justify-content: space-between;
}
i,span{
  display:block;
  flex-shrink:0;
  margin:0 10px;
}
input{
  outline: none;
  flex:1;
}
i{
  width:18px;
  height:18px;
  background:url(search.png) no-repeat;
  background-size:100% 100%;
}
span{
  width:18px;
  height:18px;
  background:url(close.png) no-repeat;
  background-size:100% 100%;
}
</style>
