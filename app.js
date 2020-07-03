App({

  getglobalData() {
    token: ''
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    const token = wx.setStorageSync('token', token)
    if (token && token.length != 0) {
      this.check_token(token)
    } else {
      console.log("登录成功");
      this.login()
    }
  },
  login() {
    wx.login({
      success: (res) => {
        console.log(res);
        //获取code
        const code = res.code

        //向自己的服务器发送请求
        wx.request({
          url: 'http://152.136.185.210:3000/api/n3/login',
          method: 'POST',
          data: {
            code
          },
          success: (res) => {
            console.log(res);
            //获取到token
            const token = res.data.token
            //存储到全局变量中
            this.getglobalData.token = token

            //存储到本地storage中
            wx.setStorage({
              data: token,
              key: 'token',
              success: (res) => {
                console.log(res);
              }
            })
          }
        })
      }
    })
  },
  check_token(token) {
    wx.request({
      url: 'http://152.136.185.210:3000/api/n3/auth',
      method: 'POST',
      header: token,
      success: (res) => {
        console.log(res);
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  //界面显示出来的时候执行的周期函数
  onShow: function (options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  //界面隐藏后执行的周期函数，
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  }
})
