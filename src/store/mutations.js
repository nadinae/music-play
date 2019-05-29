import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER](state,singer){
    state.singer = singer
  },
  [types.SET_PLAYING_STATE](state,flag){
    state.playing = flag
  },
  [types.SET_FULL_SCREEN](state,flag){
    state.fullScreen = flag
  },
  [types.SET_PLAYLIST](state,list){
      state.playList = list
  },
  [types.SET_SEQUENCE_LIST](state,list){
      state.sequenceList = list
  },
  [types.SET_PLAY_MODE](state,mode){
      state.mode = mode
  },
  [types.SET_CURRENCE_INDEX](state,index){
      state.currenceIndex = index
  },
  [types.SET_SINGER_ADD](state, singAdd) {
    state.singAdd = singAdd
  }
}

export default mutations
