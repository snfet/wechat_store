Page({
  data: {
    userInfo: null,
  },

  onTapLogin(event) {
    this.setData({
      userInfo: event.detail.userInfo
    })
  },

  onTapAddress() {
    wx.showToast({
      icon: 'none',
      title: 'This function is not open yet.'
    })
  },

  onTapService() {
    wx.showToast({
      icon: 'none',
      title: 'This function is not open yet.'
    })
  },
})