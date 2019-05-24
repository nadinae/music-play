<template>
  <div class="songList">
      <ul>
        <li v-for="(item,index) in singerInfo">
          <h3>{{ item.name }}</h3>
          <p>{{ item.singer+'-'+ item.album}}</p>
        </li>
      </ul>
    </div>
</template>
<script>
export default {
  props:{
    singerInfo:{
      type:Array,
      default: () => []
    }
  },
}
</script>
<style scoped>
  .songList{
    width:90%;
    margin:0 auto;
  }
  .songList li{
    margin-top:20px;
  }
  .songList h3,.songList p{
    width:100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size:16px;
    line-height:20px;
  }
  .songList p{
    color:rgba(0,0,0,.5);
    margin-top:4px;
  }
</style>
