import axios from 'axios'

export function getSearchResult(searchWord, page, zhida){
  const url = 'api/getSearchResult';
  const data = {
    _: '1560410900449',
    g_tk: '667868514',
    uin: '1725875016',
    format: 'json',
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'h5',
    needNewCode: 1,
    w: searchWord,
    zhidaqu: 1,
    catZhida: zhida,
    t: 0,
    flag: 1,
    ie: 'utf - 8',
    sem: 1,
    aggr: 0,
    perpage: 30,
    n: 30,
    p: page,
    remoteplace: 'txt.mqq.all',
  }

  return axios.get(url,{
    params:data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
