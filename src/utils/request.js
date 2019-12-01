export default function request (options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      data: options.url,
      // 看实际情况是否需要写content-type
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: res => {
        resolve(res)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}
