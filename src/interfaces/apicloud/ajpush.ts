export interface ajpushRet {
  isStopped?: 1 | 0
  statusCode?: number
  status?: 1 | 0
  badge?: number
  id?: string
  title?: string
  content?: string
  extra?: any
}

export interface bindAliasAndTagsParams {
  alias: string
  tags: string[]
}

export interface ajpush {
  init: (callback: (ret: ajpushRet, err?: any) => void) => void
  setListener: (callback: (ret: ajpushRet, err?: any) => void) => void
  removeListener: () => void
  bindAliasAndTags: (
    params: bindAliasAndTagsParams,
    callback: (ret: ajpushRet) => void
  ) => void
  onResume: () => void
  onPause: () => void
  clearNotification: (
    params: {
      id: number
    },
    callback: (ret: ajpushRet, err?: any) => void
  ) => void
  setPushTime: (
    params: {
      days: number[]
      startHour: number
      endHour: number
    },
    callback: (ret: ajpushRet, err?: any) => void
  ) => void
  setSilenceTime: (
    params: {
      startHour: number
      startMinute: number
      endHour: number
      endMinute: number
    },
    callback: (ret: ajpushRet) => void
  ) => void
  stopPush: (callback: (ret: ajpushRet, err?: any) => void) => void
  resumePush: (callback: (ret: ajpushRet, err?: any) => void) => void
  isPushStopped: (callback: (ret: ajpushRet, err?: any) => void) => void
  setBadge: (params: ajpushRet) => void
  getRegistrationId: (callback: (ret: ajpushRet, err?: any) => void) => void
}
