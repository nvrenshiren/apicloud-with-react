import {
  videoPlayer,
  openParams,
  videoPlayerEvent
} from '@/interfaces/apicloud/videoPlayer'
import { rectPage } from '@/interfaces/apicloud/api.params'

export default {
  initRect: {
    x: 0,
    y: 0,
    w: api.frameWidth,
    h: api.frameHeight
  } as rectPage,
  get videoPlayer() {
    return api.require('videoPlayer') as videoPlayer
  },
  open(
    params: openParams,
    callback?: (ret?: {
      status: boolean
      duration: number
      eventType: 'show' | 'error' | 'playing' | 'failed'
    }) => void
  ) {
    this.videoPlayer.open(params, (ret) => {
      callback && callback(ret)
    })
  },
  setPath(
    params: {
      path: string
      bg?: string
      coverImg?: string
      title?: string
    },
    callback?: (ret?: { status: boolean; duration: number }) => void
  ) {
    this.videoPlayer.setPath(params, (ret) => {
      callback && callback(ret)
    })
  },
  start() {
    this.videoPlayer.start()
  },
  pause() {
    this.videoPlayer.pause()
  },
  stop() {
    this.videoPlayer.stop()
  },
  close() {
    this.videoPlayer.close()
  },
  show() {
    this.videoPlayer.show()
  },
  hide() {
    this.videoPlayer.hide()
  },
  cancelFullScreen() {
    this.videoPlayer.cancelFullScreen()
  },

  fullScreen(params?: { orientation: 'right' | 'left' }) {
    this.videoPlayer.fullScreen(params)
  },
  forward(params: { seconds: number }) {
    this.videoPlayer.forward(params)
  },
  rewind(params: { seconds: number }) {
    this.videoPlayer.rewind(params)
  },
  seekTo(params: { seconds: number }) {
    this.videoPlayer.seekTo(params)
  },
  setVolume(params: { volume: number }) {
    this.videoPlayer.setVolume(params)
  },
  setBrightness(params: { brightness: number }) {
    this.videoPlayer.setBrightness(params)
  },
  getBrightness(callback?: (ret: { brightness: number }) => void) {
    this.videoPlayer.getBrightness((ret) => {
      callback && callback(ret)
    })
  },
  getVolume(callback?: (ret: { volume: number }) => void) {
    this.videoPlayer.getVolume((ret) => {
      callback && callback(ret)
    })
  },

  addEventListener(
    params: {
      name: videoPlayerEvent
    },
    callback: (ret: {
      eventType: 'start' | 'playing' | 'pause' | 'stop' | 'complete'
      current: number
    }) => void
  ) {
    this.videoPlayer.addEventListener(params, (ret) => {
      callback && callback(ret)
    })
  },

  removeEventListener(params: { name: videoPlayerEvent }) {
    this.videoPlayer.removeEventListener(params)
  },
  setRect(params: { rect: rectPage; fullscreen?: boolean }) {
    this.videoPlayer.setRect(params)
  },
  videoCapture(
    params: {
      videoUrl: string
      time: number
      isAblum?: boolean
      name: string
    },
    callback?: (ret: { status: boolean; path: string }) => void
  ) {
    this.videoPlayer.videoCapture(params, (ret) => {
      callback && callback(ret)
    })
  }
}
