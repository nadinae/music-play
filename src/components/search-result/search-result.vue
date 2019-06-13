<template>
  <div class="search-result">
    <ul>
      <li>
        <i></i>
        <p></p>
      </li>
    </ul>
  </div>
</template>
<script>
import { getSearchResult } from 'api/search'
export default {
  props:{
    query:{
      type:String,
      default:''
    }
  },
  methods:{
    _getSearchResult(){
      getSearchResult(this.query,1,1).then((res) => {
        console.log(res)
      })
    }
  },
  watch:{
    query(query){
      this._getSearchResult()
    }
  }
}
</script>
<style>

</style>
