export type loginCallBack = (
  ret: {
    status: boolean //布尔类型；操作成功状态值
    accessToken: string //字符串类型；返回token
    openId: string //字符串类型；返回openID
    unionid: string //字符串类型；QQ用户的统一标示，对当前开发者账号唯一 （暂仅支持iOS）
  },
  err: {
    msg: string
  }
) => void

export type shareCallBack = (
  ret: {
    status: boolean
  },
  err: {
    msg: string
    code: number
  }
) => void

export type shareType = 'QZone' | 'QFriend'

export interface UserInfo {
  /**
   * 用户所在城市
   */
  city: string
  /**
   * 空间小头像（30）地址
   */
  figureurl: string
  /**
   * 空间中头像（50）地址
   */
  figureurl_1: string
  /**
   * 空间大头像（100）地址
   */
  figureurl_2: string
  /**
   * 用户小头像（40）地址
   */
  figureurl_qq_1: string
  /**
   * 用户大头像（100）地址
   */
  figureurl_qq_2: string
  /**
   * 用户性别
   */
  gender: string
  /**
   * 是否为黄钻用户
   */
  is_yellow_vip: string
  /**
   * 用户账号级别
   */
  level: string
  /**
   * 用户昵称
   */
  nickname: string
  /**
   * 用户所在省份
   */
  province: string
  /**
   * 用户账户黄钻等级
   */
  yellow_vip_level: string
}

export type UserInfoCallBack = (
  ret: {
    status: boolean
    info: UserInfo | string
  },
  err: {
    msg: string
  }
) => void

export interface QQPlus {
  installed: (callback?: (ret: { status: boolean }) => void) => void
  login: (
    params?: { apiKey: string } | loginCallBack,
    callback?: loginCallBack
  ) => void
  logout: (
    callback?: (
      ret: { status: boolean },
      err: {
        msg: string
      }
    ) => void
  ) => void
  getUserInfo: (callback?: UserInfoCallBack) => void
  shareText: (params: { text: string }, callback?: shareCallBack) => void
  shareImage: (
    params: {
      type?: shareType
      imgPath: string
      title?: string
      description?: string
    },
    callback?: shareCallBack
  ) => void
  shareNews: (
    params: {
      url: string
      type?: shareType
      imgUrl: string
      title: string
      description: string
    },
    callback?: shareCallBack
  ) => void
  shareMusic: (
    params: {
      audioUrl: string
      targetUrl: string
      type?: shareType
      imgUrl: string
      title?: string
      description?: string
    },
    callback?: shareCallBack
  ) => void
  shareVideo: (
    params: {
      videoUrl: string
    },
    callback?: shareCallBack
  ) => void
  shareMood: (
    params: {
      summary: string
      imgUrls: string[]
    },
    callback?: shareCallBack
  ) => void
}
