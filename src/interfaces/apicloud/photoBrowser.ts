export interface openParams {
  images: string[]
  activeIndex?: number
  placeholderImg?: string
  bgColor?: string
  zoomEnabled?: boolean
  mode?: 1 | 2
  atime?: number
}

export interface openRet {
  eventType:
    | 'show'
    | 'change'
    | 'click'
    | 'loadImgSuccess'
    | 'loadImgFail'
    | 'longPress'
  index: number
}

export interface photoBrowser {
  open: (params: openParams, callback?: (ret: openRet) => void) => void
  close: () => void
  hide: () => void
  show: () => void
  setIndex: (params: { index: number }) => void
  getIndex: (callback?: (ret: { index: number }) => void) => void
  getImage: (
    params: { index: number },
    callback?: (ret: { path: string }) => void
  ) => void
  setImage: (params: { index?: number; image: string }) => void
  appendImage: (params: { images: string[] }) => void
  deleteImage: (params: { index?: number }) => void
  clearCache: () => void
}
