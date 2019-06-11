<template>
  <MustList :title="singerName" :singerImg="bgStyle" :singerInfo="singerInfo"></MustList>
</template>
<script>
import MustList from 'components/music-list/music-list'
import {getDicList} from 'api/getDicList'
import {mapGetters} from 'vuex'
import {ERR_OK} from 'api/config'
import {createList} from 'common/js/song'
export default {
  data(){
    return {
      singerInfo:[]
    }
  },
  components:{
    MustList
  },
  created(){
    this._getDicList()
    if(!this.singerName){
      this.$router.push('/recommend')
    }
  },
  computed:{
    singerName(){
      return this.dic.dissname
    },
    bgStyle(){
      return `background:url(${this.dic.imgurl})`
    },
    ...mapGetters([
      'dic'
    ])
  },
  methods:{
    _getDicList(){
      console.log(this.$route.params.id)
      getDicList(this.$route.params.id).then((res)=>{
        console.log(res.cdlist[0].songlist)
        if(res.code == ERR_OK){
          let songList = [];
          res.cdlist[0].songlist.forEach((item)=>{
            songList.push({
              songid:item.singer[0].id,
              songmid:item.mid,
              singer:item.singer,
              songname:item.name,
              albumname:item.album.name,
              interval:item.interval,
              albummid:item.album.mid,
            })
          })
          console.log(songList)
          this.singerInfo = this.setSongList(songList)
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
