import storage from 'good-storage'

const SEARCH_KEY = '_search_';
const SEARCH_MAX_LENGTH = 15;

function insertArray(arr,val,compare,maxLen){
  let index = arr.findIndex(compare)
  if(index == 0){
    return
  }
  if(index > 0){
    arr.splice(index,1)
  }
  arr.unshift(val)
  if (maxLen && maxLen > 15){
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
