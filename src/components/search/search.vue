<template>
  <div class="search flex">
    <searchInput ref="searchInput" @queryChange="onqueryChange"></searchInput>
    <div class="search-option">
      <h2>热门搜索</h2>
      <ul class="flex">
        <li v-for="(item,index) in searchList" @click="setQuery(item.k)">{{ item.k }}</li>
      </ul>
    </div>
    <searchResult :query="query"></searchResult>
    <router-view></router-view>
  </div>
</template>
<script>
import searchResult from 'components/search-result/search-result'
import searchInput from 'base/search-input/search-input'
import { getRandomSearch } from 'api/randomSearch'
import { ERR_OK } from 'api/config'
export default {
  data(){
    return {
      searchList:[],
      query:''
    }
  },
  created(){
    this._getRandomSearch()
  },
  components:{
    searchInput,
    searchResult
  },
  methods:{
    _getRandomSearch(){
      getRandomSearch().then((res) => {
        if(res.code == ERR_OK){
          this.searchList = res.data.hotkey.slice(0,10)
          console.log(this.searchList)
        }
      })
    },
    setQuery(query){
      this.$refs.searchInput.setQuery(query)
    },
    onqueryChange(query){
      console.log(query)
      this.query = query;
    }
  }
}
</script>
<style scoped>
.search{
  flex-direction: column;
  height:100vh;
}
.search-option{
  width:100%;
  background:#fff;
  flex:1;
  margin-top:20px;
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
