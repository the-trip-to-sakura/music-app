import http from './axios'

// 获取歌单详情
export const getSongList = id => {
  http.get(`xxx/xx?id=${id}`).then(data => data)
}
