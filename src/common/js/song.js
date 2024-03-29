class Song{
  constructor({id,mid,singer,name,album,duration,image,url}){
    this.id = id;
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }
}

export function createList(musicData){
  console.log(typeof musicData.singer)
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: Array.isArray(musicData.singer) ? filterSinger(musicData.singer) : musicData.singer,
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    url: `http://dl.stream.qqmusic.qq.com/C400${musicData.songmid}.m4a?guid=423710903&uin=840&fromtag=38&vkey=`,
  })
}

function filterSinger(singer){
  let ret = [];
  if(!singer){
    return ''
  }
  singer.forEach((s) => {
    ret.push(s.name)
  })
  return ret.join('/')
}

function isArray(params) {
  if (Object.prototype.toString(params).match(/\[object (.*?)\]/)[1] == Array){
    return true
  }else{
    return false
  }
}
