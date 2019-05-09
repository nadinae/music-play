<template>
    <div>
      <div>
        <Scroll>
          这是一段文字
        </Scroll>
      </div>
    </div>
</template>
<script>
import Scroll from 'base/scroll/scroll'
import {getRecommend} from 'api/recommend'
import {ERR_OK} from 'api/config'
export default {
    components:{
      Scroll,
    },
    created(){
        this._getRecommend()
    },
    methods:{
        _getRecommend(){
            getRecommend().then((res)=>{
                if(res.code === ERR_OK){
                    console.log(res.data.slider)
                }
            })
        }
    }
}
</script>
<style scoped>
div{
    color:#fff;
}
</style>
