import {playMode} from 'common/js/config'
import { loadSearch } from 'common/js/cache'
const state = {
  singer:{},
  playing:false,
  fullScreen:false,
  playList:[],
  sequenceList:[],
  mode:playMode.sequence,
  currenceIndex:-1,
  singAdd:'',
  dic:{},
  topList:{},
  searchHistory: loadSearch()
}
export default state;
