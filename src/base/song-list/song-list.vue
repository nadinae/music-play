<template>
  <div class="songList">
      <ul>
        <li v-for="(item,index) in singerInfo" @click="chosePlaySong(item,index)" class="flex">
          <div v-show="hasRank == 1 ? true : false" class="order">
            <span :class="index < 3 ? 'icon'+index : ''">{{ index < 3 ? '' : index+1 }}</span>
          </div>
          <div class="song">
            <h3>{{ item.name }}</h3>
            <p>{{ item.singer+'-'+ item.album}}</p>
          </div>
        </li>
      </ul>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import { getVkey } from 'api/getVkey'
export default {
  props:{
    singerInfo:{
      type:Array,
      default: () => []
    },
    hasRank:{
      type:Number,
      default:0
    }
  },
  methods:{
    chosePlaySong(item,index){
      getVkey().then((res)=>{
        this.selectPlay({
          list:this.singerInfo,
          index,
          singAdd:res.req.data.vkey
        })
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
    padding-bottom:6vh;
  }
  .songList li{
    margin-top:20px;
    align-items:center;
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
  .order{
    margin-right:6px;
  }
  .song{
    width:90%;
  }
  .order span{
    display:block;
    width:30px;
    height:30px;
    text-align:center;
    line-height:30px;
  }
  .icon0{
    background:url(0.png) no-repeat;
    background-size:100% 100%;
  }
  .icon1{
    background:url(1.png) no-repeat;
    background-size:100% 100%;
  }
  .icon2{
    background:url(2.png) no-repeat;
    background-size:100% 100%;
  }
</style>
