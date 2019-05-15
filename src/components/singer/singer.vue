<template>
  <div class="singer">
    <div v-for="(item,index) in singerList" :key="index" class="flex">
      <img :src="`https://y.gtimg.cn/music/photo_new/T001R150x150M000${item.singer_mid}.jpg?max_age=2592000`" alt="">
      <p>{{ item.singer_name }}</p>
    </div>
  </div>
</template>
<script>
import { getSingerList } from 'api/getSingerList'
export default {
    data(){
      return {
        singerList:[]
      }
    },
    created(){
      this._getSingerList()
    },
    methods:{
      _getSingerList(){
        getSingerList().then((res)=>{
            this.singerList = res.singerList.data.singerlist;
        })
      }
    }
}
</script>
<style>

</style>
