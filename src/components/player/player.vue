<template>
    <div class="player" v-show="playList.length > 0">
        <div class="normal-player" v-show="fullScreen">
            播放器
        </div>
        <div class="mini-player" v-show="!fullScreen"></div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters([
            'fullScreen',
            'playList'
        ])
    }
}
</script>
<style scoped>
.player{
    position:absolute;
    top:0;
    left:0;
    z-index:100;
    background:#f4f4f4;
    height:100vh;
    width:100%;
}
</style>
