<template>
  <div class="search flex">
    <searchInput ref="searchInput" @queryChange="onqueryChange"></searchInput>
    <div class="search-info">
      <div class="search-option">
        <h2>热门搜索</h2>
        <ul class="flex">
          <li v-for="(item,index) in searchList" @click="setQuery(item.k)">{{ item.k }}</li>
        </ul>
      </div>
      <searchHistoryList :searchHistory="searchHistory" @removeItem="onRemoveItem" v-show="searchHistory.length" @removeAllItem="showMask"></searchHistoryList>
    </div>
    <searchResult :query="query" @choseHistory="onChangeHistory"></searchResult>
    <router-view></router-view>
  <Confirm @cancelMask="hideMask" @confirmMask="onRemoveAllItem" v-show="toggleMask" :confirm="confirm" :contText="contText"></Confirm>
  </div>
</template>
<script>
import searchResult from 'components/search-result/search-result'
import searchInput from 'base/search-input/search-input'
import Confirm from 'base/confirm/confirm'
import { getRandomSearch } from 'api/randomSearch'
import searchHistoryList from 'base/search-history/search-history'
import { mapActions,mapGetters } from 'vuex'
import { ERR_OK } from 'api/config'
export default {
  data(){
    return {
      searchList:[],
      query:'',
      searchHistoryList:[],
      toggleMask:false,
      confirm:'清空',
      contText:'你确定清空搜索列表吗？'
    }
  },
  created(){
    this._getRandomSearch()
  },
  computed:{
    ...mapGetters([
      'searchHistory'
    ])
  },
  components:{
    searchInput,
    searchResult,
    searchHistoryList,
    Confirm
  },
  methods:{
    _getRandomSearch(){
      getRandomSearch().then((res) => {
        if(res.code == ERR_OK){
          this.searchList = res.data.hotkey.slice(0,10)
        }
      })
    },
    setQuery(query){
      this.$refs.searchInput.setQuery(query)
    },
    onqueryChange(query){
      this.query = query;
    },
    onChangeHistory(query){
      this.saveHistory(query)
    },
    onRemoveItem(item){
      this.deleOneHistory(item)
    },
    hideMask(){
      this.toggleMask = false;
    },
    showMask(){
      this.toggleMask = true;
    },
    onRemoveAllItem(){
      this.toggleMask = false;
      this.deleAllHistory()
    },
    ...mapActions([
      'saveHistory',
      'deleOneHistory',
      'deleAllHistory'
    ]),
  }
}
</script>
<style scoped>
.search{
  flex-direction: column;
  height:100vh;
}
.search-info{
  margin-top:20px;
  flex:1;
  background:#fff;
}
.search-option{
  width:100%;
}
h2{
  padding:16px 0 0 3vw;
  font-size:18px;
}
ul{
  width:96%;
  margin:20px auto 0;
  flex-wrap:wrap;
}
li{
  margin:0 20px 10px 0;
  font-size:14px;
  padding:6px 10px;
  border-radius:13px;
  background:#f4f4f4;
  line-height:14px;
}
</style>
