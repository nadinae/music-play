import * as types from './mutation-types'
import { getRandomList } from 'common/js/util'
import { playMode } from 'common/js/config'
import { saveSearch, deleOneSearch, deleAllSearch,savePlay } from 'common/js/cache'

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

export const insertSong = function ({commit,state},info) {
  let playList = state.playList.slice()
  let sequenceList = state.sequenceList.slice()
  let currenceIndex = state.currenceIndex
  // 记录当前歌曲
  let currentSong = playList[currenceIndex]
  // 查找当前列表中是否有待插入的歌曲并返回其索引
  let fpIndex = findIndex(playList, info.item)
  // 因为是插入歌曲，所以索引+1
  currenceIndex++
  // 插入这首歌到当前索引位置
  playList.splice(currenceIndex, 0, info.item)
  // 如果已经包含了这首歌
  if (fpIndex > -1) {
    // 如果当前插入的序号大于列表中的序号
    if (currenceIndex > fpIndex) {
      playList.splice(fpIndex, 1)
      currenceIndex--
    } else {
      playList.splice(fpIndex + 1, 1)
    }
  }

  let currentSIndex = findIndex(sequenceList, currentSong) + 1

  let fsIndex = findIndex(sequenceList, info.item)

  sequenceList.splice(currentSIndex, 0, info.item)

  if (fsIndex > -1) {
    if (currentSIndex > fsIndex) {
      sequenceList.splice(fsIndex, 1)
    } else {
      sequenceList.splice(fsIndex + 1, 1)
    }
  }

  commit(types.SET_PLAYLIST, playList)
  commit(types.SET_SEQUENCE_LIST, sequenceList)
  commit(types.SET_CURRENCE_INDEX, currenceIndex)
  commit(types.SET_FULL_SCREEN, true)
  commit(types.SET_PLAYING_STATE, true)
  commit(types.SET_SINGER_ADD, info.singAdd)
}


export const saveHistory = function({commit},query){
  commit(types.SET_SEARCH_HISTORY, saveSearch(query))
}

export const deleOneHistory = function({commit},query){
  commit(types.SET_SEARCH_HISTORY, deleOneSearch(query))
}

export const deleAllHistory = function({commit}){
  commit(types.SET_SEARCH_HISTORY, deleAllSearch())
}

export const deletOneSong = function({commit,state},song){
  let playList = state.playList.slice()
  let sequenceList = state.sequenceList.slice()
  let currenceIndex = state.currenceIndex

  let pIndex = findIndex(playList,song)
  playList.splice(pIndex,1)

  let cIndex = findIndex(sequenceList,1)
  sequenceList.splice(cIndex,1)

  if(currenceIndex > pIndex || currenceIndex == playList.length ){
    currenceIndex--
  }

  commit(types.SET_PLAYLIST,playList)
  commit(types.SET_SEQUENCE_LIST,sequenceList)
  commit(types.SET_CURRENCE_INDEX,currenceIndex)

  let playState = playList.length > 0
  commit(types.SET_PLAYING_STATE,playState)
}

export const daletAllSong = function({commit}){
  commit(types.SET_PLAYLIST,[])
  commit(types.SET_SEQUENCE_LIST,[])
  commit(types.SET_CURRENCE_INDEX,-1)
  commit(types.SET_PLAYING_STATE,false)
}

export const savePlayHistory = function({commit},song){
  commit(types.SET_PLAY_HISTORY,savePlay(song))
}
