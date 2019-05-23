export default class singer{
  constructor({imgSrc, singerName}){
    this.imgSrc = imgSrc;
    this.singerName = singerName;
    this.singerSrc = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${imgSrc}.jpg?max_age=2592000`
  }
}
