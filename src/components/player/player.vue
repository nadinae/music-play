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
              <img :src="currentSong.image" alt="">
            </div>
            <div class="ctrlBox">
              <ul class="flex">
                <li class="mode">列</li>
                <li class="prev"></li>
                <li class="togglePlay"></li>
                <li class="next"></li>
                <li class="love"></li>
              </ul>
            </div>
        </div>
      </div>
      <div class="mini-player flex" v-show="!fullScreen" @click="open">
        <div class="left flex">
          <img :src="currentSong.image" alt="" class="singerImg">
          <div>
            <h2>{{ currentSong.name }}</h2>
            <p>{{ currentSong.singer }}</p>
          </div>
        </div>
        <div class="flex right">
          <i></i>
          <span></span>
        </div>
      </div>
      <audio :src="currentSong.url+singAdd" ref="audio"></audio>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    computed:{
      bgStyle(){
        return `background-image:url(${this.currentSong.image})`
      },
      ...mapGetters([
          'fullScreen',
          'playList',
          'currentSong',
          'singAdd'
      ])
    },
    watch:{
      currentSong(){
        this.$nextTick(() => {
          this.$refs.audio.play()
        })
      }
    },
    methods:{
      close(){
        this.setFullScreen(false)
      },
      open(){
        this.setFullScreen(true)
      },
      ...mapMutations({
        setFullScreen:'SET_FULL_SCREEN'
      })
    }
}
</script>
<style scoped>
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
  width:32px;
  height:32px;
  background:url(../../common/image/playBtn.png) no-repeat;
  background-size:100%;
}
.mini-player .right span{
  display:block;
  width:32px;
  height:32px;
  background:url(../../common/image/musicMenu.png) no-repeat;
  background-size:100%;
  margin-left:10px;
}
</style>
