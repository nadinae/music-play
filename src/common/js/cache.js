import storage from 'good-storage'

const SEARCH_KEY = '_search_';
const SEARCH_MAX_LENGTH = 15;

const PLAY_KEY = '_play_';
const PLAY_MAX_LENGTH = 50;

function insertArray(arr,val,compare,maxLen){
  let index = arr.findIndex(compare)
  console.log(index)
  if(index == 0){
    return
  }
  if(index > 0){
    arr.splice(index,1)
  }
  arr.unshift(val)
  console.log(arr)
  if (maxLen && arr.length > maxLen){
    arr.pop()
  }
}
function deletOneList(arr, compare){
  let index = arr.findIndex(compare)
  arr.splice(index,1)
}

export function loadSearch(){
  return storage.get(SEARCH_KEY, [])
}

export function saveSearch(query) {

  let searchHistory = storage.get(SEARCH_KEY, [])
  insertArray(searchHistory, query, (item) => {
    return item == query
  }, SEARCH_MAX_LENGTH)

  searchHistory = storage.set(SEARCH_KEY, searchHistory)
  // console.log(searchHistory)
  return searchHistory;

}

export function deleOneSearch(query){
  let searchHistory = storage.get(SEARCH_KEY, [])
  deletOneList(searchHistory,(item) => {
    return item === query
  })

  searchHistory = storage.set(SEARCH_KEY, searchHistory);
  return searchHistory
}

export function deleAllSearch(){
  storage.remove(SEARCH_KEY)
  return []
}

export function savePlay(song){
  let playHistory = storage.get(PLAY_KEY, [])
  insertArray(playHistory, song, (item) => {
    return item == song
  }, PLAY_MAX_LENGTH)

  playHistory = storage.set(PLAY_KEY, playHistory)
  return playHistory;

}

export function loadPlay(){
  return storage.get(PLAY_KEY, [])
}