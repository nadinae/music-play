<template>
  <div id="app">
    <MHeader />
    <TabView />
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import TabView from 'components/tab-view/tab-view'
export default {
  name: 'App',
  components:{
    MHeader,
    TabView
  }
}
</script>

<style>
body{
  background:#000;
}
</style>
