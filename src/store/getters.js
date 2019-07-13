export const singer = state => state.singer

export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const playList = state => state.playList

export const sequenceList = state => state.sequenceList

export const mode = state => state.mode

export const currenceIndex = state => state.currenceIndex

export const singAdd = state => state.singAdd

export const currentSong = (state) => {
    return state.playList[state.currenceIndex] || {}
}

export const topList = state => state.topList

export const dic = state => state.dic

export const searchHistory = state => state.searchHistory

export const playHistory = state => state.playHistory