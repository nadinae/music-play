import * as types from './mutation-types'
import { getRandomList } from 'common/js/util'
import { playMode } from 'common/js/config'

function findIndex(list,song){
  return list.findIndex((item) => {
    return item.id == song.id
  })
}

export const selectPlay = function({commit,state},{list,index,singAdd}){
  console.log(list)
  commit(types.SET_SEQUENCE_LIST,list)
  if(state.mode == playMode.random){
    let randomList = getRandomList(list)
    commit(types.SET_PLAYLIST,randomList)
    index = findIndex(randomList,list[index])
  }else{
    commit(types.SET_PLAYLIST,list)
  }
  commit(types.SET_CURRENCE_INDEX,index)
  commit(types.SET_FULL_SCREEN,true)
  commit(types.SET_PLAYING_STATE,true)
  commit(types.SET_SINGER_ADD, singAdd)
}


export const randomPlay = function({commit},{list,singAdd}){
  commit(types.SET_SEQUENCE_LIST,list)
  commit(types.SET_PLAY_MODE,playMode.random)
  let randomList = getRandomList(list)

  commit(types.SET_PLAYLIST,randomList)

  commit(types.SET_CURRENCE_INDEX,0)
  commit(types.SET_FULL_SCREEN,true)
  commit(types.SET_PLAYING_STATE,true)
  commit(types.SET_SINGER_ADD, singAdd)
}