<template>
  <div class="songList">
      <ul>
        <li v-for="(item,index) in singerInfo" @click="chosePlaySong(item,index)">
          <h3>{{ item.name }}</h3>
          <p>{{ item.singer+'-'+ item.album}}</p>
        </li>
      </ul>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props:{
    singerInfo:{
      type:Array,
      default: () => []
    }
  },
  methods:{
    chosePlaySong(item,index){
      
     this.selectPlay({
       list:this.singerInfo,
       index:index 
     })
    },
     ...mapActions([
       'selectPlay'
     ])
  }
}
</script>
<style scoped>
  .songList{
    width:90%;
    margin:0 auto;
  }
  .songList li{
    margin-top:20px;
  }
  .songList h3,.songList p{
    width:100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size:16px;
    line-height:20px;
  }
  .songList p{
    color:rgba(0,0,0,.5);
    margin-top:4px;
  }
</style>
