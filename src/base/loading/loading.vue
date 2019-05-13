<template>
  <div class="flex">
    <img src="http://www.sucaijishi.com/uploadfile/2014/0524/20140524124238403.gif" alt="">
    <p>加载中...</p>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
div{
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
  flex-direction: column;
  justify-content: center;
  align-items:center;
}
img{
  width:0.96rem;
  height:0.96rem;
}
p{
  font-size:.28rem;
  color:#222;
}
</style>
