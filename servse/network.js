export default function (options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'http://152.136.185.210:8000/api/n3' + options.url,
      method: options.method || 'GET',
      data: options.data || {},
      success: resolve,
      fail: reject
    })
  })
}