import axios from 'axios'

export function getRandomSearch(){
  const url = 'api/getRandomSearch';
  const data = {
    _: '1560310625125',
    g_tk: '1739504268',
    uin: '1725875016',
    format: 'json',
    platform: 'h5',
    needNewCode: 1,
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    uin: '1725875016'
  }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
