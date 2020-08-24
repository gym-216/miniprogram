// pages/project-demo/tab/tab-compare/tab-compare.js

Page({
  data: {
    currentTab:0,
    tabArray:["tab1", "tab2", "tab3", "tab4"]
  },
  onLoad: function (options) {

  },
  //事件处理函数
  bindChange: function( e ) { 
    var that = this;  
    that.setData( { currentTab: e.detail.current });  
  },  
  swichNav: function( e ) {  
    var that = this;  
    console.log(e.target)
    if( this.data.currentTab === e.target.dataset.current ) {  
      return false;  
    } else {  
      that.setData( {  
        currentTab: e.target.dataset.current  
      })  
    }  
  }
})