export default {
  sysEvent: [
    'batterylow',
    'batterystatus',
    'keyback',
    'keymenu',
    'volumeup',
    'volumedown',
    'offline',
    'online',
    'pause',
    'resume',
    'scrolltobottom',
    'shake',
    'takescreenshot',
    'appidle',
    'swipedown',
    'swipeleft',
    'swiperight',
    'swipeup',
    'tap',
    'longpress',
    'viewappear',
    'viewdisappear',
    'noticeclicked',
    'appintent',
    'smartupdatefinish',
    'launchviewclicked',
    'keyboardshow',
    'keyboardhide',
    'safeareachanged'
  ],
  diyEvent: [
    'login',
    'logout',
    'autodark',
    'unauth',
    'regedit',
    'userchange',
    'userinit',
    'pay',
    'changeDark',
    'changeTheme'
  ],
  reName(eventName: string) {
    return this.sysEvent.concat(this.diyEvent).indexOf(eventName) < 0
      ? `${api.winName}/${eventName}`
      : eventName
  },
  send(eventName: string, params?: any) {
    return api.sendEvent({
      name: this.reName(eventName),
      extra: params
    })
  },
  on(eventName: string, callback: Function) {
    let Name = this.reName(eventName)
    if (Name === 'viewappear') {
      if (api.systemType === 'ios') {
        callback && callback()
      } else {
        api.addEventListener(
          {
            name: Name
          },
          (ret, err) => {
            let data = ret && ret.value
            callback && callback(data, err)
          }
        )
      }
    } else {
      let that = this
      api.addEventListener(
        {
          name: Name
        },
        (ret, err) => {
          let data = !!ret && that.sysEvent.indexOf(Name) < 0 ? ret.value : ret
          callback && callback(data, err)
        }
      )
    }
  },
  off(eventName: string) {
    let Name = this.reName(eventName)
    api.removeEventListener({
      name: Name
    })
  }
}
