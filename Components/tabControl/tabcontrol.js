// Components/tabControl/tabcontrol.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  options: {
    styleIsolation: 'shared'
  },
  /**
   * 组件的初始数据
   */
  data: {
    titles: ['新款', '流行', '精选'],
    cruueryindex: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(event) {
      //triggerEvent是将子组件传递事件到父组件
      const index = event.currentTarget.dataset.index
      this.setData({
        cruueryindex: index
      })
      this.triggerEvent('homeitemClick',this.data.cruueryindex,{})
    },

  }
})
