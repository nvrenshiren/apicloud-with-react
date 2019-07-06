export type shareCallBack = (
  ret: {
    status: boolean
  },
  err: {
    code: number
  }
) => void

export type installCallBack = (
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

export interface UserInfo {
  id: number
  screen_name: string
  name: string
  province: string
  city: string
  location: string
  description: string
  url: string
  profile_image_url: string
  domain: string
  gender: string
  followers_count: number
  friends_count: number
  statuses_count: number
  favourites_count: number
  created_at: string
  following: boolean
  allow_all_act_msg: boolean
  geo_enabled: boolean
  verified: boolean
  status: UserStatus
  allow_all_comment: boolean
  avatar_large: string
  verified_reason: string
  follow_me: boolean
  online_status: number
  bi_followers_count: number
}

interface UserStatus {
  created_at: string
  id: number
  text: string
  source: string
  favorited: boolean
  truncated: boolean
  in_reply_to_status_id: string
  in_reply_to_user_id: string
  in_reply_to_screen_name: string
  geo: null
  mid: string
  annotations: any[]
  reposts_count: number
  comments_count: number
}

export type authCallBack = (
  ret: {
    status: boolean
    token: string
    expire: string
    userId: string
  },
  err: { code: number }
) => void

export interface weibo {
  shareText: (
    params: {
      apiKey?: string
      text: string
    },
    callback?: shareCallBack
  ) => void
  shareImage: (
    params: {
      apiKey?: string
      text?: string
      imageUrl: string
    },
    callback?: shareCallBack
  ) => void
  shareMusic: (
    params: {
      apiKey?: string
      text?: string
      title: string
      thumb: string
      contentUrl: string
      description?: string
    },
    callback?: shareCallBack
  ) => void
  shareVideo: (
    params: {
      apiKey?: string
      text?: string
      title: string
      thumb: string
      contentUrl: string
      description?: string
    },
    callback?: shareCallBack
  ) => void
  shareWebPage: (
    params: {
      apiKey?: string
      text?: string
      title: string
      thumb: string
      contentUrl: string
      description?: string
    },
    callback?: shareCallBack
  ) => void
  auth: (
    params:
      | {
          apiKey?: string
          registUrl?: string
        }
      | authCallBack,
    callback?: (
      ret: {
        status: boolean
        token: string
        expire: string
        userId: string
      },
      err: { code: number }
    ) => void
  ) => void
  cancelAuth: (
    callback?: (
      ret: {
        status: boolean
      },
      err: { code: number }
    ) => void
  ) => void
  getUserInfo: (
    params: {
      token?: string
      userId?: string
    },
    callback?: (
      ret: {
        status: boolean
        userInfo: UserInfo
      },
      err: { code: number }
    ) => void
  ) => void
  isInstalled: (
    params?: { apiKey: string } | installCallBack,
    callback?: installCallBack
  ) => void
}
