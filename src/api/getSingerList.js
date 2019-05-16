import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
import axios from 'axios'

export function getSingerList() {
  // const url = '/api/getSingerList';
  // const data = {
  //   '-': 'getUCGI9725384065099105',
  //   g_tk: '2113628502',
  //   loginUin: '1725875016',
  //   hostUin: 0,
  //   format: 'json',
  //   inCharset: 'utf8',
  //   outCharset: 'utf-8',
  //   notice: 0,
  //   platform: 'yqq.json',
  //   needNewCode: 0,
  //   data: { "comm": { "ct": 24, "cv": 0 }, "singerList": { "module": "Music.SingerListServer", "method": "get_singer_list", "param": { "area": -100, "sex": -100, "genre": -100, "index": -100, "sin": 0, "cur_page": 1 } } }
  // };
  // return axios.get(url, {
  //   params: data
  // }).then((res) => {
  //   return Promise.resolve(res.data)
  // })

  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq'
  })

  return jsonp(url, data, options)
}
