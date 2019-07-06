import apiUtil from './api.util'

import { wx, shareType } from '@/interfaces/apicloud/wx'

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
    '-1': '未安装微信,授权拒绝',
    '0': '成功',
    '1': 'apiKey非法',
    '2': '用户取消',
    '3': '发送失败',
    '4': '授权拒绝',
    '5': '微信服务器返回的不支持错误',
    '6': '当前设备未安装微信客户端',
    '7': '注册SDK失败'
  },
  get wx() {
    return api.require('wx') as wx
  },
  login(callback?: Function) {
    this.wx.auth((ret, err) => {
      if (ret.status) {
        this.wx.getToken(
          {
            code: ret.code
          },
          (ret, err) => {
            if (ret.status) {
              this.accessToken = ret.accessToken
              this.openId = ret.openId
              callback && callback()
            } else {
              apiUtil.toast(this.errKey[err.code])
            }
          }
        )
      } else {
        apiUtil.toast(this.errKey[err.code])
      }
    })
  },
  logout(callback?: Function) {
    callback && callback()
  },
  getinfo(callback?: (useInfo: memberBase) => void) {
    this.wx.getUserInfo(
      {
        accessToken: this.accessToken,
        openId: this.openId
      },
      (ret, err) => {
        if (ret.status) {
          this.userInfo = {
            connectid: ret.unionid,
            nickname: ret.nickname,
            gender: ret.sex,
            face: ret.headimgurl
          }
          callback && callback(this.userInfo)
        } else {
          apiUtil.toast(this.errKey[err.code])
        }
      }
    )
  },
  shareNews(params: ShareParams, shareType: shareType) {
    this.wx.shareWebpage(
      {
        scene: shareType,
        title: params.title,
        description: params.description,
        thumb: params.img.local,
        contentUrl: params.url
      },
      (ret, err) => {
        apiUtil.toast(ret.status ? '分享成功' : this.errKey[err.code])
      }
    )
  }
}
