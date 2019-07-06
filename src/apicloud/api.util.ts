import { utilRet, promptRet } from '@/interfaces/apicloud/api.params'

export default {
  actionSheet(
    buttons: string[],
    callback: (buttonIndex: number) => void,
    title: string = api.appName
  ) {
    api.actionSheet(
      {
        title: title,
        buttons: buttons,
        style: {
          itemNormalColor: window.Theme.palette.background.paper,
          itemPressColor: window.Theme.palette.primary.main,
          fontNormalColor: window.Theme.palette.text.primary,
          fontPressColor: window.Theme.palette.primary.contrastText,
          titleFontColor: window.Theme.palette.primary.main
        }
      },
      (ret: utilRet) => {
        if (!(ret.buttonIndex > buttons.length)) {
          callback(ret.buttonIndex)
        }
      }
    )
  },
  toast(
    msg: string,
    location: 'middle' | 'top' | 'bottom' = 'middle',
    duration: number = 2000
  ) {
    api.toast({
      msg,
      location,
      duration
    })
  },
  showProgress(
    text: string,
    title: string = api.appName,
    animationType: any = 'zoom'
  ) {
    api.showProgress({
      text,
      title,
      animationType
    })
  },
  prompt(
    content: string,
    placeholder: string = '',
    callback: (ret: promptRet) => void,
    type: string = 'text'
  ) {
    api.prompt(
      {
        title: api.appName,
        msg: content,
        text: placeholder,
        type
      },
      (ret) => {
        callback(ret)
      }
    )
  },
  confirm(msg: string, callback: () => void) {
    api.confirm(
      {
        title: api.appName,
        msg
      },
      (ret) => {
        if (ret.buttonIndex > 1) {
          callback()
        }
      }
    )
  }
}
