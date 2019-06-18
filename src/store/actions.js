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

export const insertSong = function ({commit,state},info) {
  console.log(info.item)
  let playList = state.playList.slice();
  let currenceIndex = state.currenceIndex;
  let sequenceList = state.sequenceList;

  let fpIndex = findIndex(playList,info.item)

  console.log(fpIndex)

  if(fpIndex > -1){
    if(fpIndex > currenceIndex){

    }else{

    }
  }



































  // let playList = state.playList.slice()
  // let sequenceList = state.sequenceList.slice()
  // let currenceIndex = state.currenceIndex
  // // 记录当前歌曲
  // let currentSong = playList[currenceIndex]
  // // 查找当前列表中是否有待插入的歌曲并返回其索引
  // let fpIndex = findIndex(playList, info.item)
  // // 因为是插入歌曲，所以索引+1
  // currenceIndex++
  // // 插入这首歌到当前索引位置
  // playList.splice(currenceIndex, 0, info.item)
  // // 如果已经包含了这首歌
  // if (fpIndex > -1) {
  //   // 如果当前插入的序号大于列表中的序号
  //   if (currenceIndex > fpIndex) {
  //     playList.splice(fpIndex, 1)
  //     currenceIndex--
  //   } else {
  //     playList.splice(fpIndex + 1, 1)
  //   }
  // }

  // let currentSIndex = findIndex(sequenceList, currentSong) + 1

  // let fsIndex = findIndex(sequenceList, info.item)

  // sequenceList.splice(currentSIndex, 0, info.item)

  // if (fsIndex > -1) {
  //   if (currentSIndex > fsIndex) {
  //     sequenceList.splice(fsIndex, 1)
  //   } else {
  //     sequenceList.splice(fsIndex + 1, 1)
  //   }
  // }

  // commit(types.SET_PLAYLIST, playList)
  // commit(types.SET_SEQUENCE_LIST, sequenceList)
  // commit(types.SET_CURRENCE_INDEX, currenceIndex)
  // commit(types.SET_FULL_SCREEN, true)
  // commit(types.SET_PLAYING_STATE, true)
  // commit(types.SET_SINGER_ADD, info.singAdd)
}
