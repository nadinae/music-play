<template>
<div>
  <div class="playList" v-show="showFlag" @click="hideMask">
    <div class="playBox flex" @click.stop="">
      <div class="title flex">
        <p></p>
        <i @click="showConfirmMask"></i>
      </div>
      <ul>
        <li v-for="(item,index) in playList" class="flex" @click="choseSong(item,index)">
          <div class="flex">
            <span :class="iconPlay(item)"></span>
            <p>{{ item.name }}</p>
          </div>
          <i @click.stop="deleSong(item)"></i>
        </li>
      </ul>
      <div class="add_song_btn" @click="showAddSong">添加歌曲到列表</div>
      <p class="close" @click="hideMask">关闭</p>
    </div>
  </div>
  <AddSong ref="add_song"></AddSong>
  <Confirm ref="confirm" @confirmMask="deletAll" @cancelMask="hideConfirmMask" v-show="toggleShow" :confirm="confirm" :contText="contText"></Confirm>
</div>
</template>
<script>
import Confirm from 'base/confirm/confirm'
import { mapGetters,mapMutations,mapActions } from 'vuex'
import { playMode } from 'common/js/config'
import AddSong from 'components/add_song/add_song'
export default {
  data(){
    return {
      showFlag:false,
      toggleShow:false,
      confirm:'清空',
      contText:'你确定清空搜索列表吗？'
    }
  },
  components:{
    Confirm,
    AddSong
  },
  computed:{
    ...mapGetters([
      'sequenceList',
      'currentSong',
      'mode',
      'playList'
    ])
  },
  methods:{
    showAddSong(){
      this.$refs.add_song.show();
    },
    deletAll(){
      this.showFlag = false;
      this.toggleShow = false;
      this.daletAllSong()
    },
    showConfirmMask(){
      this.toggleShow = true;
    },
    hideConfirmMask(){
      this.toggleShow = false;
    },
    showMask(){
      this.showFlag = true;
    },
    hideMask(){
      this.showFlag = false;
    },
    iconPlay(item){
      if(this.currentSong.id == item.id){
        return 'icon_play'
      }
      return
    },
    choseSong(item,index){
      if(this.mode == playMode.random){
        return index = this.playList.findIndex((song) => {
          return song.id = item.id;
        })
      }
      this.setCurrentSong(index)
    },
    deleSong(item){
      this.deletOneSong(item)
    },
    ...mapActions([
      'deletOneSong',
      'daletAllSong'
    ]),
    ...mapMutations({
      setCurrentSong:'SET_CURRENCE_INDEX'
    })
  },
  mounted(){
    console.log(this.sequenceList)
  }
}
</script>
<style scoped>
.playList{
  position:fixed;
  top:0;
  left:0;
  bottom:0;
  right:0;
  background:rgba(0,0,0,0.6);
  z-index:111;
}
.playBox{
  width:100%;
  position:absolute;
  bottom:0;
  left:0;
  background:#fff;
  flex-direction: column;
  justify-content: space-between;
}
.playBox i{
  width:15px;
  height:15px;
  display:block;
}
.playBox .title{
  height:30px;
  flex-shrink:0;
  justify-content: space-between;
  align-items:center;
  padding:10px 20px 0;
}
.playBox .title i{
  background:url(../../common/image/delete.png) no-repeat;
  background-size:100% 100%;
}
.playBox ul{
  flex-grow:1;
  max-height:340px;
  overflow-y:scroll;
}
.playBox ul i{
  background:url(../../common/image/close.png) no-repeat;
  background-size:100% 100%;
}
.playBox .close{
  width:100%;
  height:40px;
  background:#f2f2f2;
  color:#000;
  text-align:center;
  line-height:40px;
  font-size:16px;
  flex-shrink:0;
}
.playBox ul li{
  justify-content:space-between;
  padding:0 30px 0 20px;
  height:30px;
  align-items:center;
}
.playBox ul li div{
  align-items:center;
}
.playBox ul li div span{
  display:block;
  width:16px;
  height:15px;
  margin-right:10px;
}
.playBox ul li div span.icon_play{
  background:url(../../common/image/play.png) no-repeat;
  background-size:100% 100%;
}
.playBox ul p{
  color:#000;
}
.add_song_btn{
  text-align:center;
  color:#000;
  font-size:14px;
  height:40px;
  line-height:40px;
  background:#ccc;
}
</style>
