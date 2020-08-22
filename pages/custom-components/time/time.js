// pages/custom-components/time/time.js

Page({
  data: {
    startDate:'',
    endDate:'',
    limitStartDate:'',
    limitEndDate:''
  },
  onLoad: function (options) {
    //默认开始时间 今天
    var startDate = this.formatDay(0)
    //默认结束时间 今天  
    var endDate = this.formatDay(0)
    this.setData({
      startDate: startDate,
      endDate: endDate,
      limitEndDate: endDate
    })
  },
  // 获取任意一天的日期
  formatDay: function (AddDayCount) {
    var dd = new Date(); 
    dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期 
    var y = dd.getFullYear(); 
    var m = dd.getMonth()+1;//获取当前月份的日期 
    var d = dd.getDate(); 
    if (m < 10) m = "0" + m;
    if (d < 10) d = "0" + d;
    return y+"-"+m+"-"+d; 
  },
  // 开始时间选择
  bindStartDateChange: function(e) {
    this.setData({
      startDate: e.detail.value
    })
    if(this.data.startDate > this.data.endDate){
      this.setData({
        endDate: this.data.startDate
      })
    }
  },
  // 结束时间选择
  bindEndDateChange: function(e) {
    this.setData({
      endDate: e.detail.value
    })
    if(this.data.startDate > this.data.endDate){
      this.setData({
        startDate: this.data.endDate
      })
    }
  }
})