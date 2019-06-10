import axios from 'axios'

export function getRankList(disstid){
    let url = '/api/getRankList';
    const data = {
        '_': '1560173995335',
        g_tk: '5381',
        uin: 0,
        format: 'json',
        inCharset: 'utf-8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'h5',
        needNewCode: 1
    }
    return axios.get(url,{
        params:data
    }).then((res)=>{
        return Promise.resolve(res.data)
    })
}