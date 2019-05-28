import axios from 'axios'

export function getVkey(){
    const url = '/api/getVkey';
  
    const data = {
        '-':'getplaysongvkey5481397544603483',
        g_tk: '650716250',
        loginUin: '1725875016',
        hostUin: 0,
        format: 'json',
        inCharset: 'utf8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'yqq.json',
        needNewCode: 0,
        data: {"req":{"module":"CDN.SrfCdnDispatchServer","method":"GetCdnDispatch","param":{"guid":"423710903","calltype":0,"userip":""}},"req_0":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"423710903","songmid":["001TXSYu1Gwuwv"],"songtype":[0],"uin":"1725875016","loginflag":1,"platform":"20"}},"comm":{"uin":1725875016,"format":"json","ct":24,"cv":0}}
    }
    return axios.get(url, {
      params: data
    }).then((res) => {
      return Promise.resolve(res.data)
    })
  }