<template>
    <div class="rank">
        <ul>
            <li v-for="(item,index) in topList" :key="index" class="flex" @click="selectItem(item)">
                <img v-lazy="item.picUrl" alt="">
                <div>
                    <h2>{{ item.topTitle }}</h2>
                    <p v-for="(item2,index2) in item.songList" :key="index2" class="flex"><span>{{ index2+1 }}.{{ item2.songname }}</span><span>--{{ item2.singername }}</span></p>
                </div>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
import { getRankList } from 'api/getRankList'
import { ERR_OK } from 'api/config'
import { mapMutations } from 'vuex'
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
                    this.topList = res.data.topList.slice(3);
                }
            })
        },
        selectItem(item){
          this.$router.push({
            path:`/rank/${item.id}`
          })
          this.setTopList(item)
        },
        ...mapMutations({
          setTopList:'SET_TOP_LIST'
        })
    },
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
    flex-shrink:0;
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
    display:inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
li div p span:first-child{
    max-width:50%;
}
li div p span:last-child{
    width:40%;
    color:rgba(0,0,0,0.5)
}
</style>
