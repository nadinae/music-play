<template>
  <div class="singer" ref="singer">
    <div class="singerView">
      <div v-for="(group,index) in singerList" :key="index" class="singerList">
        <h2>{{ group.title }}</h2>
        <ul>
          <li v-for="(item,index2) in group.item" :key="index2" class="flex" @click="goDetial(item)">
            <img v-lazy="item.singerSrc" alt="">
            <p>{{ item.singerName }}</p>
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import { getSingerList } from 'api/getSingerList'
import Singer from 'common/js/singer'
import { mapMutations } from 'vuex'

const HOT_SINGER_LEN = 10;
const HOT_NAME = '热门';
export default {
    data(){
      return {
        singerList:[],
        actIndex:0
      }
    },
    created(){
      this._getSingerList()
    },
    methods:{
      goDetial(singer){
        this.$router.push({
          path:`/singer/${singer.imgSrc}`
        })
        this.setSingerInfo(singer);
      },
      _getSingerList(){
        getSingerList().then((res)=>{
          this.singerList = this._initSingetList(res.data.list);
        })
      },
      _initSingetList(list){
        let map = {
          hot:{
            title:HOT_NAME,
            item:[]
          }
        }
        list.forEach((item,index)=>{
          if(index < HOT_SINGER_LEN){
            map.hot.item.push(new Singer({
              imgSrc : item.Fsinger_mid,
              singerName:item.Fsinger_name
            }))
          }
          const key = list[index].Findex;
          if(!map[key]){
            map[key]={
              title:key,
              item:[]
            }
          }
          map[key].item.push(new Singer({
            imgSrc : item.Fsinger_mid,
            singerName:item.Fsinger_name
          }))
        })


        //获取一个有序的列表
        let hot = [];
        let res = [];

        for(let key in map){
          let val = map[key];
          if(val.title.match(/[a-zA-Z]/)){
            res.push(val)
          }else if(val.title == HOT_NAME){
            hot.push(val)
          }
        }
        res.sort((a,b)=>{
          return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        })
        return hot.concat(res)
      },
      _getActList(index){
        this.actIndex = index;
        window.scrollTo(0, this.$refs.singer.children[index].offsetTop);
      },
      ...mapMutations({
        setSingerInfo:'SET_SINGER'
      })
    }
}
</script>
<style scoped>
.singer {
  position:absolute;
  padding-top:11.8vh;
  overflow-y:scroll;
  width:100%;
  height:88.2vh;
}
h2{
  padding:.1rem 0 .1rem .4rem;
  font-size:.36rem;
  background:rgba(204, 204, 204, 0.3);
}
.singer li{
  align-items: center;
}
.singer li img{
  width:1rem;
  height:1rem;
  border-radius:.5rem;
  margin:.2rem .4rem;
}
.listTab{
  position:fixed;
  top:18vh;
  right:3vw;
}
.listTab p{
  width:22px;
  height:22px;
  text-align: center;
  line-height:22px;
}
.active{
  color:#31c27c;
}
</style>
