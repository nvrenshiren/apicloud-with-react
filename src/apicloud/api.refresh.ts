import commonFunc from '@/functions/common.func'

export default {
  init(callback?: Function) {
    api.setRefreshHeaderInfo(
      {
        visible: true,
        //可以替换自己的下拉图片样式
        // loadingImg: require('@/statics/img/refresh.png'),
        bgColor: window.Theme.palette.background.default,
        textColor: window.Theme.palette.text.secondary,
        textDown: '下拉刷新...',
        textUp: '松开刷新...',
        textLoading: '加载中...',
        showTime: true
      },
      () => {
        commonFunc.delRipple()
        callback && callback()
      }
    )
  },
  done() {
    return api.refreshHeaderLoadDone()
  },
  doing() {
    return api.refreshHeaderLoading()
  }
}
