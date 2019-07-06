import { rectPage } from './api.params'

export interface openParams {
  rect?: rectPage
  bg?: string
  path?: string
  autoPlay?: boolean
  scalingMode?: 'scaleNone' | 'scaleToFill' | 'scaleAspectFit' | 'scaleModeFill'
  coverImg?: string
  loop?: boolean
  fixedOn?: string
  fixed?: boolean
}

export type videoPlayerEvent =
  | 'leftUp'
  | 'leftDown'
  | 'rightUp'
  | 'rightDown'
  | 'swipeLeft'
  | 'swipeRight'
  | 'click'
  | 'doubleClick'
  | 'play'

export interface videoPlayer {
  open: (
    params: openParams,
    callback?: (ret?: {
      status: boolean
      duration: number
      eventType: 'show' | 'error' | 'playing' | 'failed'
    }) => void
  ) => void
  setPath: (
    params: {
      path: string
      bg?: string
      coverImg?: string
      title?: string
    },
    callback?: (ret?: { status: boolean; duration: number }) => void
  ) => void
  start: () => void
  pause: () => void
  stop: () => void
  close: () => void
  show: () => void
  hide: () => void
  cancelFullScreen: () => void
  fullScreen: (params?: { orientation: 'right' | 'left' }) => void
  forward: (params: { seconds: number }) => void
  rewind: (params: { seconds: number }) => void
  seekTo: (params: { seconds: number }) => void
  setVolume: (params: { volume: number }) => void
  setBrightness: (params: { brightness: number }) => void
  getBrightness: (callback: (ret: { brightness: number }) => void) => void
  getVolume: (callback: (ret: { volume: number }) => void) => void
  addEventListener: (
    params: {
      name: videoPlayerEvent
    },
    callback: (ret: {
      eventType: 'start' | 'playing' | 'pause' | 'stop' | 'complete'
      current: number
    }) => void
  ) => void
  removeEventListener: (params: { name: videoPlayerEvent }) => void
  setRect: (params: { rect: rectPage; fullscreen?: boolean }) => void
  videoCapture: (
    params: {
      videoUrl: string
      time: number
      isAblum?: boolean
      name: string
    },
    callback?: (ret: { status: boolean; path: string }) => void
  ) => void
}
