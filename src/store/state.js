import {playMode} from 'common/js/config'
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
  topList:{}
}
export default state;
