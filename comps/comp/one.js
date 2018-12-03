// comps/comp1/one.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
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
    orginTap: function () {
      this.triggerEvent("hello", {
        from: "innerMost"
      }, { bubbles: false })
    },
    bubbleOrginTap: function() {
      this.triggerEvent("hello",{
        from: "innerMost"
      }, { bubbles: true})
    },
    composedTap: function() {
      this.triggerEvent("hello",{
        from: "innerMost"
      }, { bubbles: true, composed: true})
    }
  }
})
