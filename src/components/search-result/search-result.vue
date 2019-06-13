<template>
  <div class="search-result">
    <ul>
      <li v-for="(item,index) in resultList" :keys="index">
        <i v-if="item.singerType" :style="bgStyle" :class="item.singerType ? 'singer' : ''"></i>
        <i v-else></i>
        <p></p>
      </li>
    </ul>
  </div>
</template>
<script>
import { getSearchResult } from 'api/search'
import {ERR_OK} from 'api/config'
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
          console.log(this.resultList)
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
        return ret.concat(list.data.song.list)
      }
    }
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
  flex: 1;
}
.singer{
  width:40px;
  height:40px;
}
i{
  display:block;
}
</style>
