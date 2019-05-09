<template>
    <div class="recommend">
        <div class="slider-content">
            <mt-swipe v-if="recommends.length" :auto="4000" class="slider flex">
                <mt-swipe-item v-for="(item,index) in recommends" class="slider-item" :key="index">
                    <a :href="item.linkUrl">
                        <img :src="item.picUrl">
                    </a>
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="recommend-list">
            <h1 class="list-title">热门歌单推荐</h1>
            <ul></ul>
        </div>
    </div>
</template>
<script>
// import Slider from 'base/slider/slider'
import {getRecommend} from 'api/recommend'
import {ERR_OK} from 'api/config'
import { Swipe, SwipeItem } from 'mint-ui';

export default {
    data(){
        return {
            recommends:[]
        }
    },
    components:{
    'mt-swipe':Swipe,
    'mt-swipe-item':SwipeItem
    },
    created(){
        this._getRecommend()
    },
    methods:{
        _getRecommend(){
            getRecommend().then((res)=>{
                if(res.code === ERR_OK){
                    this.recommends = res.data.slider;
                }
            })
        }
    }
}
</script>
<style>
div{
    color:#fff;
}
.slider{
    width:100%;
    height:150px;
}
.mint-swipe-items-wrap{
    width:100%;
}
.slider-item{
    flex-shrink:0;
}
.slider-item a{
  display:block;
  width:100%;
  overflow:hidden;
}
.slider-item img{
  display:block;
  width:100%;
}
</style>
