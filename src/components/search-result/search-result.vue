<template>
  <div class="search-result">
    <ul>
      <li v-for="(item,index) in resultList" :keys="index" class="flex" @click="selectItem(item)">
        <i v-if="item.singerType" :style="bgStyle" :class="item.singerType ? 'singer' : ''"></i>
        <i v-else></i>
        <p>{{ item.singerType ? item.singername : item.name }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import { getSearchResult } from 'api/search'
import { ERR_OK } from 'api/config'
import { mapMutations,mapActions } from 'vuex'
import Singer from 'common/js/singer'
import { createList } from 'common/js/song'
import { getVkey } from 'api/getVkey'


const SINGET_TYPE = 'singer'
export default {
  props:{
    query:{
      type:String,
      default:''
    }
  },
  data(){
    return {
      resultList:[],
      bgStyle:''
    }
  },
  methods:{
    _getSearchResult(){
      getSearchResult(this.query,1,1).then((res) => {
        if(res.code == ERR_OK){
          this.resultList = this.setResultList(res)
        }
      })
    },
    setResultList(list){
      let ret = [];
      if(list.data.zhida && list.data.zhida.singermid){
        ret.push({...list.data.zhida,...{singerType:SINGET_TYPE}})
        this.bgStyle = `background:url(https://y.gtimg.cn/music/photo_new/T001R68x68M000${list.data.zhida.singermid}.jpg?max_age=2592000) no-repeat;background-size:100% 100%`
      }
      if(list.data.song.list){
       ret = ret.concat(this.getListSong(list.data.song.list))
      }
      return ret
    },
    getListSong(list){
      let ret = [];
      list.forEach((item) => {
        if(item.songid && item.albummid){
          ret.push(createList(item))
        }
      })
      return ret
    },
    selectItem(item){
      if(item.singerType){
        const singer = new Singer({
          imgSrc: item.singermid,
          singerName:item.singername
        })
        this.$router.push({
          path:`/search/${singer.imgSrc}`
        })
        this.setSinger(singer)
      }else{
        this.setPlayList(this.resultList.slice(1))
         getVkey().then((res)=>{
          this.insertSong({item,singAdd:res.req.data.vkey})
         })
      }
      this.$emit('choseHistory',this.query)
    },
    ...mapMutations({
      setSinger:'SET_SINGER',
      setPlayList:'SET_PLAYLIST'
    }),
    ...mapActions([
      'insertSong'
    ])
  },
  watch:{
    query(query){
      this._getSearchResult()
    }
  }
}
</script>
<style scoped>
.search-result{
  position:absolute;
  top:152px;
  left:0;
  width:100%;
  background:#fff;
}
.singer{
  width:40px;
  height:40px;
  border-radius:20px;
  margin-bottom:4px;
}
ul{
  width:94%;
  margin:0 auto;
  padding-top:20px;
  max-height:70vh;
  overflow-y:scroll;
}
li{
  align-items:center;
  border-bottom:1px solid #f4f4f4;
}
i{
  width:40px;
  height:40px;
  background:url(music.png) center no-repeat;
  background-size:20px 20px;
  display:block;
  margin-right:10px;
}
</style>
