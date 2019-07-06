import {
  photoBrowser,
  openParams,
  openRet
} from '@/interfaces/apicloud/photoBrowser'

export default {
  get photoBrowser() {
    return api.require('photoBrowser') as photoBrowser
  },
  close() {},
  hide() {},
  show() {},
  clearCache() {},
  open(params: openParams, callback?: (ret: openRet) => void) {
    this.photoBrowser.open(params, (ret) => {
      callback && callback(ret)
    })
  },
  setIndex(params: { index: number }) {
    this.photoBrowser.setIndex(params)
  },
  getIndex(callback?: (ret: { index: number }) => void) {
    this.photoBrowser.getIndex((ret) => {
      callback && callback(ret)
    })
  },
  getImage(
    params: { index: number },
    callback?: (ret: { path: string }) => void
  ) {
    this.photoBrowser.getImage(params, (ret) => {
      callback && callback(ret)
    })
  },
  setImage(params: { index?: number; image: string }) {
    this.photoBrowser.setImage(params)
  },
  appendImage(params: { images: string[] }) {
    this.photoBrowser.appendImage(params)
  },
  deleteImage(params: { index?: number }) {
    this.photoBrowser.deleteImage(params)
  }
}
