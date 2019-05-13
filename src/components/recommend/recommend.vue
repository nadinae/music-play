<template>
    <div class="recommend">
        <Slider class="slider-content">
            <mt-swipe v-if="recommends.length" :auto="4000" class="slider flex">
                <mt-swipe-item v-for="(item,index) in recommends" class="slider-item" :key="index">
                    <a :href="item.linkUrl">
                        <img :src="item.picUrl">
                    </a>
                </mt-swipe-item>
            </mt-swipe>
        </Slider>
        <div class="recommend-list">
            <h1 class="list-title">热门歌单推荐</h1>
            <ul>
              <li v-for="(item,index) in DicsData" :key="index" class="flex">
                <img v-lazy="item.imgurl">
                <div>
                  <h2>{{ item.creator.name }}</h2>
                  <p>{{ item.dissname }}</p>
                </div>
              </li>
            </ul>
        </div>
        <Loading v-if="!DicsData"></Loading>
    </div>
</template>
<script>
import Slider from 'base/slider/slider'
import Loading from 'base/loading/loading'
import {getRecommend,getDiscList} from 'api/recommend'
import {ERR_OK} from 'api/config'

export default {
    data(){
        return {
            recommends:[],
            DicsData:[]
        }
    },
    components:{
      Slider,
      Loading
    },
    created(){
        this._getRecommend()
        this._getDiscList()
    },
    methods:{
        _getRecommend(){
            getRecommend().then((res)=>{
                if(res.code === ERR_OK){
                    this.recommends = res.data.slider;
                }
            })
        },
        _getDiscList(){
          getDiscList().then((res)=>{
            this.DicsData = res.data.list;
          })
        }
    }
}
</script>
<style>
.list-title{
  font-size:.24rem;
  text-align:center;
  height:1.3rem;
  line-height:1.3rem;
}
.recommend-list{
    color:#31c27c;
}
.slider{
    width:100%;
    height:3.0rem;
}
.slider-item{
    flex-shrink:0;
}
.slider-item a{
  display:block;
  width:7.5rem;
  overflow:hidden;
}
.slider-item img{
  display:block;
  width:7.5rem;
}
.slider .mint-swipe-indicator{
  background:#fff;
  opacity:1;
}
.slider .mint-swipe-indicator.is-active{
  background:#31c27c;
  opacity:1;
}

.recommend-list li{
  align-items:center;
  width:90%;
  margin:0 auto .4rem;
}
.recommend-list li img{
  width:1.2rem;
  height:1.2rem;
  margin-right:.4rem;
}
.recommend-list li div h2{
  color:#000;
  font-size:.28rem;
  margin-bottom:.16rem;
}
.recommend-list li div p{
  color:rgba(0,0,0,0.4);
  font-size:.28rem;
}
</style>
