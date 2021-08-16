// pages/ObtainEmployment/ObtainEmployment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    index:0,
    tabs:[
      {
        id:0,
        name:"经验分享",
        isActive:true
    
      },
      {
        id:1,
        name:"推免说明",
        isActive:false
    
      },
      {
        id:2,
        name:"优营名单",
        isActive:false
    
      }
    ]
  
  },
  handleItemChange1(e){
    const {index} = e.detail;
    let early_index = wx.getStorageSync('Index');
    if(e.detail.index !== early_index )
    {
      wx.setStorageSync('Index', e.detail.index);
      //console.log(index);
       let tabs=JSON.parse(JSON.stringify(this.data.tabs)); //深拷贝
      // // let {tabs} = this.data;  //浅拷贝
       tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
       this.setData({
         tabs
       })
       this.onLoad();
    }
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})