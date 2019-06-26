<template>
  <div class="mask flex">
    <div class="content">
      <div class="flex">{{ contText }}</div>
      <p class="flex">
        <span @click="onCancel">{{ cancel }}</span>
        <span @click="onConfirm">{{ confirm }}</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    contText:{
      type:String,
      default:''
    },
    cancel:{
      type:String,
      default:'取消'
    },
    confirm:{
      type:String,
      default:'确定'
    }
  },
  methods:{
    onCancel(){
      this.$emit('cancelMask')
    },
    onConfirm(){
      this.$emit('confirmMask')
    }
  }
}
</script>
<style scoped>
.mask{
  position:fixed;
  top:0;
  left:0;
  bottom:0;
  right:0;
  background:rgba(0,0,0,0.6);
  z-index:9999;
  justify-content: center;
  align-items: center;
}
.content{
  width:70vw;
  height:120px;
  background:#f2f2f2;
  border-radius:10px;
}
.content div{
  height:86px;
  align-items: center;
  padding:0 15px;
  justify-content: center;
}
.content p{
  height:36px;
  border-top:1px solid rgba(0,0,0,0.5);
}
.content p span{
  display:block;
  text-align:center;
  line-height:36px;
}
.content p span:first-child{
  border-right:1px solid rgba(0,0,0,0.5);
  width:49%;
}
.content p span:last-child{
  flex:1;
}
</style>
