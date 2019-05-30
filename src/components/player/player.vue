<template>
    <div class="player" v-show="playList.length > 0">
      <div class="normal-player" v-show="fullScreen">
        <div class="imgMask" :style="bgStyle"></div>
        <div class="mask">
            <div class="top">
              <div class="title">
                <i @click="close"></i>
                <h1>{{ currentSong.name }}</h1>
              </div>
              <p>{{ currentSong.singer }}</p>
            </div>
            <div class="contImg">
              <img :src="currentSong.image" :class="playing ? 'cardRotate' : 'cardRotate cardPuse'">
            </div>
            <div class="progress flex">
              <span class="timing">{{ format(currentTime) }}</span>
              <div class="proBar">
                <div class="pro" :style="widthStyle"></div>
              </div>
              <span class="time">{{ format(currentSong.duration) }}</span>
            </div>
            <div class="ctrlBox">
              <ul class="flex">
                <li class="mode">列</li>
                <li class="prev" @click="prev"></li>
                <li :class="playStatus" @click="ctrlPlay"></li>
                <li class="next" @click="next"></li>
                <li class="love"></li>
              </ul>
            </div>
        </div>
      </div>
      <div class="mini-player flex" v-show="!fullScreen" @click="open">
        <div class="left flex">
          <img :src="currentSong.image" alt="" class="singerImg" :class="playing ? 'cardRotate' : 'cardRotate cardPuse'">
          <div>
            <h2>{{ currentSong.name }}</h2>
            <p>{{ currentSong.singer }}</p>
          </div>
        </div>
        <div class="flex right">
          <i @click.stop="ctrlPlay" :class="playStatus"></i>
          <span></span>
        </div>
      </div>
      <audio :src="currentSong.url+singAdd" ref="audio" @canplay="ready" @error="noplay" @timeupdate="upadtetime" @ended="playEnd"></audio>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { getVkey } from 'api/getVkey'
export default {
  data(){
    return {
      singReady:false,
      currentTime:0,
      progessWidth:'0%'
    }
  },
  computed:{
    bgStyle(){
      return `background-image:url(${this.currentSong.image})`
    },
    playStatus(){
      return this.playing ? 'puse' : 'togglePlay'
    },
    widthStyle(){
      return `width:${this.progessWidth}`
    },
    ...mapGetters([
        'fullScreen',
        'playList',
        'currentSong',
        'singAdd',
        'playing',
        'currenceIndex'
    ])
  },
  watch:{
    currentSong(){
      this.$nextTick(() => {
        this.$refs.audio.play()
      })
    },
    playing(newPlaying){
      this.$nextTick(() => {
        newPlaying ? this.$refs.audio.play() : this.$refs.audio.pause()
      })
    }
  },
  methods:{
    toDou(num){
      return num > 9 ? num : '0' + num
    },
    format(interval){
      let m = interval/60 | 0;
      let s = interval % 60 | 0;
      return this.toDou(m) +':'+ this.toDou(s)
    },
    playEnd(){
      this.setPlayingState(false)
      this.progessWidth = '0%';
    },
    upadtetime(e){
      this.currentTime = e.target.currentTime;
      this.progessWidth = ((parseInt(e.target.currentTime) / this.currentSong.duration) - 0).toFixed(2) * 100 + '%';
    },
    ready(){
      this.singReady = true;
    },
    noplay(){
      this.singReady = false;
    },
    next(){
      getVkey().then((res)=>{
        this.setSingAdd(res.req.data.vkey)
        if(this.singReady){
          let index = this.currenceIndex + 1
          if(index == this.playList.length){
            index = 0;
          }
          this.setCurrentIndex(index)
        }
      })
    },
    prev(){
      getVkey().then((res)=>{
        this.setSingAdd(res.req.data.vkey)
        if(this.singReady){
          let index = this.currenceIndex - 1
          if(index == -1){
            index = this.playList.length-1;
          }
          console.log(this.playList.length-1)
          this.setCurrentIndex(index)
        }
      })
    },
    close(){
      this.setFullScreen(false)
    },
    open(){
      this.setFullScreen(true)
    },
    ctrlPlay(){
      this.setPlayingState(!this.playing)
    },
    ...mapMutations({
      setFullScreen:'SET_FULL_SCREEN',
      setPlayingState:'SET_PLAYING_STATE',
      setSingAdd:'SET_SINGER_ADD',
      setCurrentIndex:'SET_CURRENCE_INDEX'
    })
  }
}
</script>
<style scoped>
.progress{
  align-items:center;
  justify-content: center;
  position:absolute;
  bottom:130px;
  width:100%;
  color:#2c2c2c;
}
.proBar{
  width:5rem;
  height:2px;
  border-radius:1px;
  background:#2c2c2c;
  margin:0 .2rem;
  position:relative;
}
.proBar .pro{
  height:2px;
  background:#f8fa6b;
  box-shadow:0 0 2px #f8fa6b;
  border-radius:1px;
  position:absolute;
  top:0;
  left:0;
}
.progress .timing{
  display:block;
  width:42px;
  text-align:center;
}
.player{
    width:100%;
    position:absolute;
    top:0;
    left:0;
    z-index:100;
    background:#f4f4f4;
    color:#fff;
}
.imgMask{
  height:100vh;
  width:100%;
  filter: blur(16px);
  background-size:100% 100%;
  background-repeat:no-repeat;
}
.top{
  padding-top:6px;
}
.top div.title{
  position:relative;
}
.mask{
  height:100vh;
  width:100%;
  position:absolute;
  top:0;
  left:0;
}
.top div i{
  position:absolute;
  top:6px;
  display:block;
  width:22px;
  height:18px;
  background:url('../../common/image/back.png') no-repeat;
  background-size:100% 100%;
  transform:rotate(-90deg);
  left:10px;
}
.top div h1{
  text-align:center;
  font-size:20px;
  width:100%;
}
.top p{
  text-align:center;
  font-size:12px;
}
.contImg {
  margin:50px auto 0;
  width:6rem;
  border-radius:50%;
  box-shadow:0 0 20px rgba(0,0,0,0.5)
}
.contImg img{
  width:6rem;
  height:6rem;
  border-radius:50%;
  display:block;
}
.ctrlBox{
  position:absolute;
  bottom:0;
  height:100px;
  width:100%;
}
.ctrlBox ul{
  justify-content: space-around;
  width:80%;
  margin:0 auto;
  align-items:center;
}
li{
  width:30px;
  height:30px;
  color:#2c2c2c;
}
li.mode{
  width:26px;
  height:26px;
  border:2px solid #2c2c2c;
  border-radius:50%;
  text-align:center;
  line-height:26px;
}
li.prev{
  background:url('../../common/image/prev.png') no-repeat;
  background-size:100%;
}
li.togglePlay{
  background:url('../../common/image/playBtn.png') no-repeat;
  background-size:100%;
}
li.puse{
  background:url('../../common/image/puse.png') no-repeat;
  background-size:100%;
}
li.next{
  background:url('../../common/image/next.png') no-repeat;
  background-size:100%;
}
li.love{
  background:url('../../common/image/love.png') no-repeat;
  background-size:100%;
}
.mini-player{
  position:fixed;
  bottom:0;
  left:0;
  height:60px;
  width:100%;
  background:#e9e9e9;
  color:#2c2c2c;
  align-items:center;
  justify-content:space-between;
}
.mini-player .singerImg{
  width:45px;
  height:45px;
  border-radius:50%;
  margin-right:10px;
}
.mini-player .left{
  margin-left:20px;
}
.mini-player .right{
  margin-right:20px;
}
.mini-player .left h2{
  font-size:16px;
}
.mini-player .left p{
  font-size:12px;
}
.mini-player .right i{
  display:block;
  width:26px;
  height:26px;
  background:url(../../common/image/playBtn.png) no-repeat;
  background-size:100%;
}
.mini-player .right span{
  display:block;
  width:26px;
  height:26px;
  background:url(../../common/image/musicMenu.png) no-repeat;
  background-size:100%;
  margin-left:10px;
}
.mini-player .right .puse{
  background:url('../../common/image/puse.png') no-repeat;
  background-size:100%;
}
@keyframes rotate{
  from{
    transform:rotate(0)
  }
	to{
    transform:rotate(360deg)
  }
}
.cardRotate{
  animation-name:rotate;
	animation-duration:45s;
	animation-iteration-count:infinite;
	animation-timing-function:linear;
}
.cardPuse{
  animation-play-state: paused;
}
</style>
