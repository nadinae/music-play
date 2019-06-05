<template>
  <div class="singerDetial">
    <div class="header flex">
      <i @click="goBack"></i>
      <h1>{{ title }}</h1>
    </div>
    <div class="singetImg" @click="randomList">
      <div :style="singerImg" class="bgImg flex">
        <div class="flex">
          <i></i>
          <p>随机播放全部</p>
        </div>
      </div>
    </div>
    <SongList :singerInfo="singerInfo"></SongList>
  </div>
</template>
<script>
import SongList from 'base/song-list/song-list'
export default {
  props:{
    title:{
      type:String,
      default:''
    },
    singerImg:{
      type:String,
      default:''
    },
    singerInfo:{
      type:Array,
      default:[]
    }
  },
  components:{
    SongList
  },
  methods:{
    randomList(){
      if(this.singerInfo.length > 0){
        console.log(this.singerInfo)
        getVkey().then((res)=>{
          console.log(res.req.data.vkey)
          this.randomPlay({
            list:this.singerInfo,
            singAdd:res.req.data.vkey
          })
        })
      }
    },
    goBack(){
      this.$router.back()
    },
  }
}
</script>
<style scoped>
  .singerDetial{
    position:fixed;
    top:0;
    left:0;
    background:#f4f4f4;
    width:100%;
    height:100vh;
    z-index:100;
    overflow-y:scroll;
  }
  .header {
    padding-left:4%;
    align-items: center;
    margin-top:10px;
    position:absolute;
    top:0;
    left:0;
    width:96%;
  }
  .header i{
    display:block;
    width:22px;
    height:18px;
    background:url('../../common/image/back.png') no-repeat;
    background-size:100% 100%;
  }
  .header h1{
    font-size:22px;
    font-weight:normal;
    width: 80%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-align:center;
    color:#fff;
  }
  .singetImg .bgImg{
    width:100%;
    background-repeat:no-repeat;
    background-size: cover;
    height:40vh;
    align-items: flex-end;
  }
  .singetImg .bgImg div{
    box-sizing: border-box;
    width: 135px;
    padding: 7px 0;
    margin: 0 auto;
    text-align: center;
    border: 1px solid #31c27c;
    color: #31c27c;
    border-radius: 100px;
    justify-content: center;
    margin-bottom:20px;
  }
  .singetImg .bgImg div p{
    font-size:14px;
  }
  .singetImg .bgImg div i{
    width:20px;
    height:20px;
    display:block;
    background:url(../../common/image/play.png) no-repeat;
    background-size:100%;
    margin-right:8px;
  }
</style>
