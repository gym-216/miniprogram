// pages/project-demo/tab/tab.js

Page({
  data: {
    tabList:[
      {
        text:'未固定tab',
        url:'../tab/tab-unfixed/tab-unfixed'
      },
      {
        text:'固定tab',
        url:'../tab/tab-fixed/tab-fixed'
      },
      {
        text:'下拉框tab',
        url:'../tab/tab-select/tab-select'
      },
      {
        text:'滑动tab',
        url:'../tab/tab-swiper/tab-swiper'
      },
      {
        text:'对比tab',
        url:'../tab/tab-compare/tab-compare'
      }
    ]
  },
  onLoad: function (options) {

  }
})