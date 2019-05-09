<template>
  <div ref="slider" class="slider">
    <div class="slider-group flex" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <span class="dota" v-for="(item,index) in dots" :class="{ active : currentPageIndex === index }"></span>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { addClass } from 'common/js/dom'
export default {
  data(){
    return {
      dots:[],
      currentPageIndex:0
    }
  },
  props:{
    loop:{
      type:Boolean,
      default:true
    },
    autoPlay:{
      type:Boolean,
      default:true
    },
    interval:{
      type:Number,
      default:4000
    }
  },
  mounted(){
    setTimeout(() => {
      this._setSilderWidth()
      this._initDots()
      this._initSlider()
    },20)
  },
  methods:{
    _setSilderWidth(){
      this.children = this.$refs.sliderGroup.children;
      console.log(this.children.length)
      let width = 0;
      let sliderWidth = this.$refs.slider.clientWidth;
      for(let i = 0;i<this.children.length;i++){
        let child = this.children[i];
        addClass(child,'slider-item')
        child.style.width = sliderWidth + 'px';
        width += sliderWidth
      }
      if(this.loop){
        width += 2*sliderWidth
      }
      this.$refs.sliderGroup.style.width = width + 'px'
    },
    _initDots(){
      console.log(this)
      this.dots = new Array(this.children.length)
    },
    _initSlider(){
      this.slider = new BScroll(this.$refs.slider,{
        scrollX:true,
        scrollY:false,
        momentum:false,
        snap:true,
        snapLoop:this.loop,
        snapThreshold:0.3,
        snapSpeed:400,
        click:true
      })
      this.slider.on('scrollEnd',()=>{
        this.currentPageIndex = this.slider.getCurrentPage().pageX
      })
    }
  }
}
</script>
<style scope>
.slider-item a{
  display:block;
  width:100%;
  overflow:hidden;
}
.slider-item img{
  display:block;
  width:100%;
}
</style>
