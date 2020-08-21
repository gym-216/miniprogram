//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    meList:[
      {
        icon: 'raw',
        text:'小程序原生组件',
        url:'../mimi-raw/mini-raw'
      },
      {
        icon: 'frame',
        text:'小程序框架',
        url:'../mini-framework/mini-framework'
      },
      {
        icon: 'custom',
        text:'自定义组件',
        url:'../mini-custom/mini-custom'
      },
      {
        icon: 'pro',
        text:'项目示例',
        url:'../mini-project/mini-project'
      },
    ]
  },
  onLoad: function () {
  }
})
