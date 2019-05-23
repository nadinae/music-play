<template>
  <div class="singerDetial">
    <div class="header flex">
      <i @click="goBack"></i>
      <h1>{{ singer.singerName }}</h1>
    </div>
    <div class="singetImg" v-if="singerInfo.singer_mid">
      <div :style="bgStyle" class="bgImg flex">
        <div class="flex">
          <i></i>
          <p>随机播放全部</p>
        </div>
      </div>
    </div>
    <div class="songList">
      <ul>
        <li v-for="(item,index) in singerInfo.list">
          <h3>{{ item.musicData.songname }}</h3>
          <p>{{ singerInfo.singer_name+'-'+ item.musicData.albumname}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import jsonp from 'common/js/jsonp'
import { commonParams,options } from '../../api/config'
import { mapGetters } from 'vuex'
export default {
  data(){
    return {
      singerInfo:[]
    }
  },
  computed: {
    ...mapGetters([
      'singer'
    ]),
    bgStyle() {
      return `background-image:url(${this.singer.singerSrc})`
    }
  },
  created(){
    const data = {
      g_tk: 1928093487,
      inCharset: 'utf-8',
      outCharset: 'utf-8',
      notice: 0,
      format: 'jsonp',
      hostUin: 0,
      needNewCode: 0,
      platform: 'yqq',
      needNewCode: 0,
      order: 'listen',
      begin: 0,
      num: 80,
      songstatus: 1,
      singermid: this.singer.imgSrc,
    }
    jsonp('https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg', data, options).then((res)=>{
      this.singerInfo = res.data;
    })
    console.log(this.singer)
  },
  methods:{
    goBack(){
      this.$router.back()
    }
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
    width:100%;
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
