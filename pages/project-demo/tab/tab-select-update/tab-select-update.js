// pages/project-demo/tab/tab-select-update/tab-select-update.js

Page({
  data: {
    currentTab:0,
    tabArray:["待审批", "已审批"],
    list:[],
    area:'全部责任区',
    areaList:[],
    showModalStatus:false
  },
  onLoad: function (options) {
    this.createUnList()
    this.createAreaList()
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
  showModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
     duration: 200,
     timingFunction: "linear",
     delay: 0
    })
    this.animation = animation
    animation.rotate(180).step()
    this.setData({
     animationData: animation.export(),
     showModalStatus: true
    })
    setTimeout(function () {
      animation.rotate(180).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  hideModal: function () {
    // 隐藏遮罩层
    setTimeout(function () {
      this.setData({
        showModalStatus: false
      })
    }.bind(this), 100)
  },
  chooseArea:function(){
    this.setData({
      showModalStatus:true
    })
  },
  confirmArea:function(e){
    console.log(e)
    this.setData({
      area:e.currentTarget.id,
      showModalStatus:false
    })
    console.log(e.currentTarget.id)
  },
  createAreaList: function(){
    var data = []
    var count = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T"]  //循环次数
    // var count = ["A","B","C","D","E","F","G"]
    data.push({
      "id": 0,
      "name":"全部责任区",
      "status":1
    })
    for(var i=1;i<=count.length;i++){
      var str = "XX自然保护区" + count[i-1]
      // data[i-1] = str
      data.push({
        "id": i,
        "name":str,
        "status":0
      })
    }
    this.setData({
      areaList:data
    })
    console.log(this.data.areaList)
  }
})