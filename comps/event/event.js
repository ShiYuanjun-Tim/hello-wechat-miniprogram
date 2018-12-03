// comps/event/event.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    strParam: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    status: "page not inited"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad:function(){
      this.setData({
        status:"comp is inited"
      })
    }
  }
})
