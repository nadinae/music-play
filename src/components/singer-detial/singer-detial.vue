<template>
  <MusicList :title="singerName" :singerInfo="singerInfo" :singerImg="bgStyle"></MusicList>
</template>
<script>
import jsonp from 'common/js/jsonp'
import { commonParams,options } from '../../api/config'
import { mapGetters,mapActions } from 'vuex'
import MusicList from 'components/music-list/music-list'
import {createList} from 'common/js/song'
import { getVkey } from 'api/getVkey'

export default {
  data(){
    return {
      singerInfo:[]
    }
  },
  components:{
    MusicList,
  },
  computed: {
    singerName(){
      return this.singer.singerName
    },
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

    if (!this.singer.singerName) {
      this.$router.push('/singer')
      return
    }
    jsonp('https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg', data, options).then((res)=>{
      // this.singerInfo = res.data.list;
      this.singerInfo = this.setSongList(res.data.list);
      console.log(this.singerInfo)
    })

  },
  methods:{
    setSongList(list){
      let ret = [];
      list.forEach((item) => {
        ret.push(createList(item.musicData))
      })
      return ret;
    },
    ...mapActions([
      'randomPlay'
    ])
  }
}
</script>
<style>
</style>
