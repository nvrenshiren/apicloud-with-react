import apiUtil from './api.util'
import {
  loginCallBack,
  QQPlus,
  shareType,
  UserInfo
} from '@/interfaces/apicloud/QQPlus'

export interface memberBase {
  connectid: string
  nickname: string
  gender: number
  face: string
}
export interface ShareParams {
  title: string
  description: string
  url: string
  img: {
    net: string
    local: string
  }
}

export default {
  userInfo: null as memberBase,
  accessToken: null,
  openId: null,
  get QQPlus() {
    return api.require('QQPlus') as QQPlus
  },
  login(callback?: loginCallBack) {
    this.QQPlus.login((ret, err) => {
      if (ret.status) {
        let { accessToken, openId } = ret
        this.accessToken = accessToken
        this.openId = openId
        !!callback && callback(ret, err)
      } else {
        apiUtil.toast(err.msg)
      }
    })
  },
  logout(callback?: Function) {
    this.QQPlus.logout((ret, err) => {
      if (ret.status) {
        callback && callback()
      } else {
        apiUtil.toast(err.msg)
      }
    })
  },
  getinfo(callback?: (userinfo: memberBase) => void) {
    this.QQPlus.getUserInfo((ret, err) => {
      if (ret.status) {
        let info: UserInfo =
          api.systemType === 'ios' ? ret.info : JSON.parse(ret.info.toString())
        this.userInfo = {
          connectid: this.openId,
          nickname: info.nickname,
          face: info.figureurl_qq_2,
          gender: info.gender === '女' ? 2 : 1
        }
        callback && callback(this.userInfo)
      } else {
        apiUtil.toast(err.msg)
      }
    })
  },
  shareNews(params: ShareParams, shareType: shareType) {
    this.QQPlus.shareNews(
      {
        url: params.url,
        title: params.title,
        description: params.description,
        imgUrl: params.img.net,
        type: shareType
      },
      (ret, err) => {
        apiUtil.toast(ret.status ? '分享成功' : err.msg)
      }
    )
  }
}
