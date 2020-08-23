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
      }
    ]
  },
  onLoad: function (options) {

  }
})