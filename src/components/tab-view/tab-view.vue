<template>
    <div class="router flex">
        <router-link to="/recommend">推荐</router-link>
        <router-link to="/singer">歌手</router-link>
        <router-link to="/rank">排行</router-link>
        <router-link to="/search">搜索</router-link>
    </div>
</template>
<script>
export default {

}
</script>
<style scope>
.router {
    justify-content: space-around;
    height:.66rem;
}
.router a{
    color:#fff;
    display:block;
    height:100%;
    display:flex;
    align-items:center;
    border-bottom:1px solid rgba(0,0,0,0)
}
.router .router-link-active{
  border-bottom:1px solid rgb(245, 203, 66);
  color:rgb(245, 203, 66);
}
</style>
