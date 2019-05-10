<template>
    <div class="flex">
        <h1></h1>
        <p>音乐播放器</p>
    </div>
</template>
<script>
export default {
    name:'m-header'
}
</script>
<style scoped>
    div{
        width:100%;
        height:.88rem;
        justify-content: center;
        align-items:center;
    }
    h1{
        height:.6rem;
        width:.6rem;
        background:url('../../common/image/icon.png') no-repeat;
        background-size:100% 100%;
    }
    p{
        font-size:.32rem;
        color:#000;
        margin-left:.2rem;
    }
</style>
