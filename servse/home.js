import request from './network.js'
export function getHomeMultiData() {
  return request({
    url: '/home/multidata'
  })
}
export function getGoodsData(type, page) {
  return request({
    url: '/home/data',
    data: {
      type,
      page
    }
  })
}
