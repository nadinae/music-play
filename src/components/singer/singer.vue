<template>

</template>
<script>
import { getSingerList } from 'api/getSingerList'
export default {
    created(){
      this._getSingerList()
    },
    methods:{
      _getSingerList(){
        getSingerList().then((res)=>{
            console.log(res)
        })
      }
    }
}
</script>
<style>

</style>
