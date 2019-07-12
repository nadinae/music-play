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
            <SearchResult :query="query"></SearchResult>
        </div>
    </div>
</template>
<script>
import SearchInp from 'base/search-input/search-input'
import SearchResult from 'components/search-result/search-result'
export default{
    data(){
        return {
            showFlag:false,
            query:''
        }
    },
    components:{
        SearchInp,
        SearchResult
    },
    methods:{
        show(){
            this.showFlag = true;
        },
        hide(){
            this.showFlag = false;
        },
        onqueryChange(query){
            this.query = query;
        }
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
