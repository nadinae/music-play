import axios from 'axios'

export function getTopListSong(topId) {
  const url = '/api/getTopListSong';

  const data = {
    '-': 'getUCGI7572043737283474',
    g_tk: '1655134177',
    loginUin: '1725875016',
    hostUin: 0,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq.json',
    needNewCode: 0,
    data: { "detail": { "module": "musicToplist.ToplistInfoServer", "method": "GetDetail", "param": { "topId": Number(topId), "offset": 0, "num": 20, "period": "2019_22" } }, "comm": { "ct": 24, "cv": 0 } }
    }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
