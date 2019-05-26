<template>
  <div id="app">
    <MHeader />
    <TabView />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Player />
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import TabView from 'components/tab-view/tab-view'
import Player from 'components/player/player'
export default {
  name: 'App',
  components:{
    MHeader,
    TabView,
    Player
  }
}
</script>

<style>
body{
  background:#f4f4f4;
}
</style>
