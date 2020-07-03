import { getHomeMultiData, getGoodsData } from '../../servse/home.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommends: [],
    goods: {
      'pop': { page: 0, list: [] },
      'new': { page: 0, list: [] },
      'sell': { page: 0, list: [] }
    },
    currentType: "pop"
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
    const page = this.data.goods[type].page + 1
    getGoodsData(type, page).then(res => {
      const list = res.data.data.list
      const oldList = this.data.goods[type].list
      oldList.push(...list)
      const typeKey = 'goods.$(type).list'
      const pageKey = 'goods.$(type).page'
      this.setData({
        [typeKey]: oldList,
        [pageKey]: page
      })
    })
  },

  //-------------事件监听函数---------------
  tabcontrolitemclick(event) {
    console.log(event);
    
    const index = event
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})