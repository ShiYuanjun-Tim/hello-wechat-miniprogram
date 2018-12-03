// my-behavior.js
module.exports = Behavior({
  behaviors: [],
  properties: {
    
  },
  data: {
   msg:[]
  },
  attached: function () { },
  methods: {
    helloEvt: function (e) {
      this.setData({
        msg: [...this.data.msg, `[${e.currentTarget.dataset.id}]receive ['hello'] from [${e.detail.from}]`]
      })
    }
  }
})