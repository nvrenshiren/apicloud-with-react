export type shareCallBack = (
  ret: {
    status: boolean
  },
  err: {
    code: number
  }
) => void

export type shareType = 'session' | 'timeline' | 'favorite'

export type programType = 'release' | 'test' | 'preview'

export type sexType =
  /**
   * 男
   */
  | 1
  /**
   * 女
   */
  | 2

export interface UserInfo {
  status: boolean
  openid: string
  nickname: string
  sex: sexType
  headimgurl: string
  privilege: string[]
  unionid: string
}

export type authCallBack = (
  ret: {
    status: boolean
    code: string
  },
  err: { code: number }
) => void

export interface wx {
  isInstalled: (
    callback?: (ret: { installed: boolean }, err: { code: number }) => void
  ) => void
  shareText: (
    params: {
      apiKey?: string
      scene?: 'timeline'
    },
    callback?: shareCallBack
  ) => void
  shareImage: (
    params: {
      apiKey?: string
      scene?: shareType
      thumb: string
      contentUrl: string
    },
    callback?: shareCallBack
  ) => void
  shareMusic: (
    params: {
      apiKey?: string
      scene?: shareType
      title?: string
      description?: string
      thumb?: string
      musicDataUrl?: string
      contentUrl: string
    },
    callback?: shareCallBack
  ) => void
  shareVideo: (
    params: {
      apiKey?: string
      scene?: shareType
      title?: string
      description?: string
      thumb?: string
      contentUrl: string
    },
    callback?: shareCallBack
  ) => void
  shareWebpage: (
    params: {
      apiKey?: string
      scene?: shareType
      title?: string
      description?: string
      thumb?: string
      contentUrl: string
    },
    callback?: shareCallBack
  ) => void
  shareMutableImg: (params: { imgs: string[] }) => void
  shareProgram: (
    params: {
      apiKey?: string
      scene?: 'session'
      title?: string
      description?: string
      thumb?: string
      webpageUrl: string
      userName: string
      path: string
      hdImageData: string
      withShareTicket: string
      miniProgramType: programType
    },
    callback?: shareCallBack
  ) => void
  launchMiniProgram: (
    params: {
      apiKey?: string
      miniProgramType?: programType
      userName: string
      path: string
    },
    callback?: (
      ret: {
        eventType: 'launch' | 'back'
        status: boolean
        extMsg?: string
      },
      err: { code: number }
    ) => void
  ) => void
  auth: (
    params:
      | {
          apiKey?: string
          scope?: 'snsapi_userinfo'
        }
      | authCallBack,
    callback?: authCallBack
  ) => void
  getToken: (
    params: {
      apiKey?: string
      apiSecret?: string
      code: string
    },
    callback?: (
      ret: {
        status: boolean
        accessToken: string
        dynamicToken: string
        expires: number
        openId: string
      },
      err: { code: number }
    ) => void
  ) => void
  getUserInfo: (
    params: {
      accessToken: string
      openId: string
      lang?: 'zh_CN' | 'zh_TW' | 'en'
    },
    callback?: (ret: UserInfo, err: { code: number }) => void
  ) => void
  refreshToken: (
    params: {
      apiKey?: string
      dynamicToken: string
    },
    callback?: (
      ret: {
        status: boolean
        accessToken: string
        dynamicToken: string
        expires: number
        openId: string
      },
      err: { code: number }
    ) => void
  ) => void
}
