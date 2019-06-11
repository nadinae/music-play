<template>
  <MusicList :title="title" :singerInfo="rankList" :singerImg="bgStyle" :hasRank="1"></MusicList>
</template>
<script>
import MusicList from 'components/music-list/music-list'
import { mapGetters } from 'vuex'
import { getTopListSong } from 'api/getTopListSong'
import { createList } from 'common/js/song'
import { ERR_OK } from 'api/config'
export default {
  data(){
    return {
      rankList:[]
    }
  },
  components:{
    MusicList
  },
  created(){
    this._getTopListSong();
    if(!this.topList.topTitle){
      this.$router.push({
        path:'/rank'
      })
    }
  },
  computed:{
    title(){
      return this.topList.topTitle
    },
    bgStyle(){
      if(this.rankList.length){
        return `background-image:url(${this.rankList[0].image})`
      }
    },
    ...mapGetters([
      'topList'
    ])
  },
  methods:{
    _getTopListSong(){
      getTopListSong(this.$route.params.id).then((res) => {
        if(res.code == ERR_OK){
          let songList = []
          console.log(res.detail.data)
          res.detail.data.songInfoList.forEach((item,index) => {
            songList.push({
              songid:res.detail.data.data.song[index].songId,
              songmid:item.file.media_mid,
              singer:res.detail.data.data.song[index].singerName,
              songname:res.detail.data.data.song[index].title,
              albumname:res.detail.data.data.song[index].singerName,
              interval:item.interval,
              albummid:res.detail.data.data.song[index].albumMid,
            })
          })
          this.rankList = this.setSongList(songList)
        }
      })
    },
    setSongList(list){
      let ret = [];
      list.forEach((item) => {
        ret.push(createList(item))
      })
      return ret;
    }
  }
}
</script>
<style>

</style>
