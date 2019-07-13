<template>
    <ul class="flex">
        <li v-for="(item,index) in switchArray" :class="{'active':currentIndex===index}" :keys="index" @click="selectItem(index)">
            <p>{{item.name}}</p>
        </li>
    </ul>
</template>
<script>
export default {
    props:{
        switchArray:{
            type:Array,
            default:[]
        },
        currentIndex:{
            type:Number,
            default:0
        }
    },
    methods:{
        selectItem(index){
            this.$emit('selectIndex',index)
        }
    }
}
</script>
<style scoped>
ul{
    border:1px solid #f4f4f4;
    justify-content: center;
    overflow:hidden;
    margin:20px auto;
    width:180px;
    border-radius:4px;
    overflow:hidden;
}
li{
    width:90px;
    color:#fff;
    height:40px;
    line-height:40px;
    background:#666;
    text-align:center;
}
.active{
    background:#999;
}
</style>
