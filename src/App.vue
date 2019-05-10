<template>
  <div id="app">
    <MHeader />
    <TabView />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
  background:#f4f4f4;
}
</style>
