import {
  UIActionSelector,
  openParams,
  openRet
} from '@/interfaces/apicloud/UIActionSelector'
import commonFunc from '@/functions/common.func'

export default {
  get UIActionSelector() {
    return api.require('UIActionSelector') as UIActionSelector
  },
  open(callback: (ret: openRet) => void) {
    let isDark = commonFunc.Dark
    this.UIActionSelector.open(
      {
        datas: 'widget://res/district.txt',
        layout: {
          size: 12,
          sizeActive: 16,
          bg: window.Theme.palette.background.paper,
          color: window.Theme.palette.text.primary,
          colorSelected: window.Theme.palette.primary.main
        },
        cancel: {
          bg: window.Theme.palette.primary.main,
          bgActive: '#f6685e',
          color: '#fff'
        },
        ok: {
          bg: window.Theme.palette.primary.main,
          bgActive: '#f6685e',
          color: '#fff'
        },
        title: {
          bg: window.Theme.palette.primary.main,
          color: '#fff',
          size: 16
        },
        selectedBold: false
      },
      (ret) => {
        callback(ret)
      }
    )
  }
}
