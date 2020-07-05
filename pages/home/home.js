import {
  getHomeMultiData,
  getGoodsData
} from '../../servse/home.js'
const types = ['pop', 'new', 'sell']
const BACKTOP_DISTDNCE=1000
Page({
  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommends: [],
    goods: {
      pop: {
        page: 1,
        list: []
      },
      new: {
        page: 1,
        list: []
      },
      sell: {
        page: 1,
        list: []
      },
    },
    currentType: "pop",
    isShow: false,
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getHomeMultiData()
    this._getGoodsData('pop')
    this._getGoodsData('new')
    this._getGoodsData('sell')
  },

  //-----------------网络请求函数--------------------
  //函数前面加_表示是私有函数
  _getHomeMultiData() {
    getHomeMultiData().then(res => {
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list
      this.setData({
        banners,
        recommends
      })
    })
  },

  //请求商品数据
  _getGoodsData(type) {
    const page = this.data.goods[type].page
    getGoodsData(type, page).then(res => {
      //从接口获取list数据
      const list = res.data.data.list
      //获取data定义的list
      // const oldList = this.data.goods[type].list
      //将接口里面的list依次展开push到data中的list里面去
      const goods = this.data.goods;
      goods[type].list.push(...list)
      goods[type].page += 1;

      // 3.最新的goods设置到goods中
      this.setData({
        goods: goods
      })
    })
  },


  //-------------事件监听函数---------------

  tabClick(e) {
    // 1.根据当前的点击赋值最新的currentType
    const index = e.detail


    // let currentType = ''
    // switch(index) {
    //   case 0:
    //     currentType = POP
    //     break
    //   case 1:
    //     currentType = NEW
    //     break
    //   case 2:
    //     currentType = SELL
    //     break
    // }
    // this.setData({
    //   currentType: currentType
    // })
    this.setData({
      currentType: types[index]
    })
  },




  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this._getGoodsData(this.data.currentType)
  },

  //回到顶部显示和隐藏
  onPageScroll: function (options) {
    const scrollheight = options.scrollTop
    this.setData({
      isShow: scrollheight >= BACKTOP_DISTDNCE
    })
  },
  backtop(){
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300,
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})