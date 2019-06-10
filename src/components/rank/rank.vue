<template>
    <div class="rank">
        <ul>
            <li v-for="(item,index) in topList" :key="index" class="flex">
                <img :src="item.picUrl" alt="">
                <div>
                    <h2>{{ item.topTitle }}</h2>
                    <p v-for="(item2,index2) in item.songList" :key="index2" class="flex">{{ index2+1 }}.{{ item2.songname }}<span>--{{ item2.singername }}</span></p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import {getRankList} from 'api/getRankList'
import {ERR_OK} from 'api/config'
export default {
    data(){
        return {
            topList:[]
        }
    },
    created(){
        this._getRankList()
    },
    methods:{
        _getRankList(){
            getRankList().then((res)=>{
                if(res.code == ERR_OK){
                    this.topList = res.data.topList;
                    console.log(res.data.topList)
                }
            })
        }
    }
}
</script>
<style scoped>
.rank{
    padding-top:15vh;
}
li{
    box-shadow:2px 2px 6px #999;
    border-radius:6px;
    overflow:hidden;
    width:94vw;
    margin:0 auto 3vh;
    align-items:center;
}
img{
    width:100px;
    height:100px;
}
li div{
    flex:1;
    margin-left:20px;
}
h2{
    font-size:18px;
    margin-bottom:4px;
}
li div p{
    font-size:14px;
    width:100%;
    align-items:center;
}
li div p span{
    width:50%;
    display:inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
li div p span{
    color:rgba(0,0,0,0.5)
}
</style>
