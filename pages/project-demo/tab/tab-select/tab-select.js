// pages/project-demo/tab/tab-select/tab-select.js

Page({
  data: {
    currentTab:0,
    tabArray:["待审批", "已审批"],
    list:[],
    area:'全部责任区',
    areaList:[]
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
  }
})