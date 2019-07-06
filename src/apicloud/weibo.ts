import apiUtil from './api.util'

import { weibo, authCallBack, UserInfo } from '@/interfaces/apicloud/weibo'

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
  errKey: {
    '-1': 'apiKey 值非法',
    '1': '用户取消',
    '2': '发送失败',
    '3': '授权失败',
    '4': '不支持的请求',
    '5': '未安装微博'
  },
  get weibo() {
    return api.require('weibo') as weibo
  },
  login(callback?: authCallBack) {
    this.weibo.auth((ret, err) => {
      if (ret.status) {
        this.accessToken = ret.token
        this.openId = ret.userId
        callback && callback(ret, err)
      } else {
        apiUtil.toast(this.errKey[err.code])
      }
    })
  },
  logout(callback?: Function) {
    this.weibo.cancelAuth((ret, err) => {
      if (ret.status) {
        callback && callback()
      } else {
        apiUtil.toast(this.errKey[err.code])
      }
    })
  },
  getinfo(callback?: (useInfo: memberBase) => void) {
    this.weibo.getUserInfo(
      {
        token: this.accessToken,
        userId: this.openId
      },
      (ret, err) => {
        if (ret.status) {
          this.userInfo = {
            connectid: this.openId,
            nickname: ret.userInfo.screen_name,
            gender: ret.userInfo.gender === 'f' ? 2 : 1,
            face: ret.userInfo.avatar_large
          }
          callback && callback(this.userInfo)
        } else {
          apiUtil.toast(this.errKey[err.code])
        }
      }
    )
  },
  shareNews(params: ShareParams) {
    this.weibo.shareWebPage(
      {
        text: params.description,
        title: params.title,
        description: params.description,
        thumb: params.img.local,
        contentUrl: params.url
      },
      (ret) => {
        ret.status && apiUtil.toast('分享成功')
      }
    )
  }
}
