// pages/project-demo/tab/tab-unfixed/tab-unfixed.js

Page({
  data: {
    currentTab:0,
    tabArray:["待处理", "已处理"],
    list:[]
  },
  onLoad: function (options) {
    this.createUnList()
  },
  // 造数据
  createUnList: function(){
    var data = []
    var count = 20  //循环次数
    for(var i=1;i<=count;i++){
      var str = "待处理" + i
      data[i-1] = str
    }
    this.setData({
      list:data
    })
  },
  createList: function(){
    var data = []
    var count = 20  //循环次数
    for(var i=1;i<=count;i++){
      var str = "已处理" + i
      data[i-1] = str
    }
    this.setData({
      list:data
    })
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
    if(that.data.currentTab == 0){
      that.createUnList()
    }else{
      that.createList()
    }  
  }, 
})