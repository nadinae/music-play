<template>
    <div class="add_song_wrampper" v-show="showFlag">
        <div class="add_title">
            <p>添加歌曲到列表</p>
            <i @click.stop="hide"></i>
        </div>
        <div class="dearch_box_wrapper">
            <SearchInp @queryChange="onqueryChange" :inputPlace="query"></SearchInp>
        </div>
        <div class="shortcut"></div>
        <div class="add_song_search_result">
            <SearchResult :query="query" @choseHistory="onChangeHistory"></SearchResult>
        </div>
        <SwitchItem :switchArray="switchArray" :currentIndex="currentIndex" @selectIndex="choseItem"></SwitchItem>
        <div class="list-wrapper" v-show="currentIndex == 0 ? true : false">
            <SongList :singerInfo="playHistory">{{playHistory}}</SongList>
        </div>
        <div class="list-search" v-show="currentIndex == 1 ? true : false">
            <SearchHistory :searchHistory="searchHistory" @removeItem="removeOne" @removeAllItem="removeAll"></SearchHistory>
        </div>
    </div>
</template>
<script>
import SearchInp from 'base/search-input/search-input'
import SearchResult from 'components/search-result/search-result'
import {mapActions,mapGetters} from 'vuex'
import SwitchItem from 'base/switch/switch'
import SongList from 'base/song-list/song-list'
import SearchHistory from 'base/search-history/search-history'
export default{
    data(){
        return {
            showFlag:false,
            query:'',
            switchArray:[
                {name:'最近搜索'},
                {name:'搜索历史'}
            ],
            currentIndex:0
        }
    },
    components:{
        SearchInp,
        SearchResult,
        SwitchItem,
        SongList,
        SearchHistory
    },
    computed:{
        ...mapGetters([
            'playHistory',
            'searchHistory'
        ])
    },
    methods:{
        removeOne(item){
            this.deleOneHistory(item)
        },
        removeAll(){
            this.deleAllHistory()
        },
        choseItem(index){
            console.log(index)
            this.currentIndex = index;
        },
        onChangeHistory(query){
            this.saveHistory(query)
        },
        show(){
            this.showFlag = true;
        },
        hide(){
            this.showFlag = false;
        },
        onqueryChange(query){
            this.query = query;
        },
        ...mapActions([
            'saveHistory',
            'deleOneHistory',
            'deleAllHistory'
        ])
    },
    mounted(){
        console.log(this.playHistory)
    }
}
</script>
<style scoped>
.add_song_wrampper{
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background:#f4f4f4;
    z-index:1111;
}
.add_title{
    height:40px;
    background:#ccc;
    text-align:center;
    line-height:40px;
    position:relative;
    color:#000;
}
.add_title i{
    display:block;
    position:absolute;
    width:15px;
    height:15px;
    background:url(../../common/image/close.png) no-repeat;
    background-size:100% 100%;
    top:12px;
    right:20px;
}
.dearch_box_wrapper{
    margin-top:-10vh;
}
.add_song_search_result{
  position:relative;
}
.add_song_search_result .search-result{
  color:#000;
  top:20px;
}
.add_song_search_result .search-result ul{
  padding:0;
}
</style>
