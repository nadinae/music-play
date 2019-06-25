<template>
<div class="search-history">
  <div class="flex title">
    <h2>搜索历史</h2>
    <i @click="removeAll"></i>
  </div>
  <div class="search-item flex" v-for="(item,index) in searchHistory">
    <p>{{ item }}</p>
    <i @click="removeOne(item)"></i>
  </div>
</div>
</template>
<script>
export default {
  props:{
    searchHistory:{
      type:Array,
      default:[]
    }
  },
  methods:{
    removeOne(item){
      this.$emit('removeItem',item)
    },
    removeAll(){
      this.$emit('removeAllItem')
    }
  }
}
</script>
<style scoped>
i{
  display:block;
  width:15px;
  height:15px;
}
.title{
  margin:40px 0 14px;
}
.title,.search-item{
  align-items: center;
  justify-content: space-between;
  padding:0 5vw;
}
.title h2{
  font-size: 18px;
}
.title i{
  background:url(delete.png) no-repeat;
  background-size:100% 100%;
}
.search-item{
  margin-bottom:4px;
  padding:0 6vw;
  opacity:0.6;
}
.search-item i{
  background:url(remove.png) no-repeat;
  background-size:100% 100%;
}
</style>
