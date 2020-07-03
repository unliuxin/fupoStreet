// Components/common/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '你好'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  
  },

  /**
   * 组件的方法列表
   */
  methods: {
    dcruueitem(){
      console.log('----');
      this.triggerEvent('incrueitem',{})
    }
  }
})
