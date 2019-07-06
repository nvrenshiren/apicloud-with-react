/**
 * 定义自定义函数
 */

import moment from 'moment'

//Storage的变量名,可根据自己需求继续添加
type StorageKey = 'config' | 'autodark' | 'isdark' | 'theme' | 'yourself'

export default new (class {
  /**
   * Storage对象
   */
  get Storage() {
    return api.systemType === 'android'
      ? os.localStorage()
      : window.localStorage
  }
  /**
   * 设置Storage
   */
  setItem(key: StorageKey, value: any) {
    this.Storage.setItem(key, JSON.stringify(value))
  }
  /**
   * 读取Storage
   * noConverted:不转换成对象
   */
  getItem(key: StorageKey, noConverted: boolean = false) {
    let value = this.Storage.getItem(key)
    if (!value) {
      return !!value
    }
    if (noConverted) {
      return value
    }
    return JSON.parse(value)
  }
  /**
   * 移除Storage
   */
  removeItem(key: StorageKey) {
    this.Storage.removeItem(key)
  }
  /**
   * 清空Storage
   */
  clearItem() {
    this.Storage.clear()
  }
  /**
   * 是否夜间模式
   */
  get Dark() {
    let isAuto = this.getItem('autodark')
    if (!!isAuto) {
      let config = this.getItem('config')
      let { app_light } = config
      let [start, end] = app_light ? app_light.split('-') : [7, 18]
      let nowHour = moment().hours()
      return !(nowHour > start && nowHour < end)
    } else {
      return !!this.getItem('isdark')
    }
  }
  /**
   * 获取当前主题
   */
  get Theme() {
    //服务端配置的
    let config = this.getItem('config')
    //用户配置的
    let theme = this.getItem('theme')
    return theme || (config && config['app_theme']) || 'red'
  }
  /**
   * 删除由于原生交互导致波纹特效持续存在的BUG
   */
  delRipple() {
    let styleObj = document.querySelector('[data-meta="MuiTouchRipple"]')
    if (styleObj) {
      let style = document.querySelector('[data-meta="MuiTouchRipple"]')
        .innerHTML

      let classList = style.match(/(\.)(\S*)( {)/g)
      let classLike = classList[1].replace(/\.|( {)/g, '')
      let hasRip = document.body.querySelectorAll<HTMLSpanElement>(
        `[class^="${classLike}"]`
      )

      if (hasRip.length > 0) {
        hasRip.forEach((ele: HTMLSpanElement) => {
          ele.style.opacity = '0'
          ele.style.webkitAnimationPlayState = 'mui-ripple-exit'
        })
      }
    }
  }
})()
