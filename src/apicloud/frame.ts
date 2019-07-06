import {
  openFrameParams,
  setFrameAttrParams,
  bringFrameToFrontParams,
  sendFrameToBackParams
} from '@/interfaces/apicloud/api.params'

export default {
  opened: {},
  open<pageParam>(params: openFrameParams<pageParam>) {
    this.opened[params.name] = true
    const normal = {
      allowEdit: false,
      hScrollBarEnabled: false,
      animation: {
        type: 'none'
      }
    }
    let FrameParams = Object.assign({}, normal, params)
    FrameParams.url =
      FrameParams.url || window.publicPath + FrameParams.name + '.html'

    api.openFrame(FrameParams)
  },
  close(Fname?: string) {
    let name = Fname || api.frameName
    api.closeFrame({ name })
    this.opened[name] = false
  },
  setFrameAttr(params: setFrameAttrParams) {
    api.setFrameAttr(params)
    return this
  },
  show(params: setFrameAttrParams) {
    params.hidden = false
    this.setFrameAttr(params).bringFrameToFront({ from: params.name })
  },
  hide(params: setFrameAttrParams) {
    params.hidden = true
    this.setFrameAttr(params)
  },
  bringFrameToFront(params: bringFrameToFrontParams) {
    api.bringFrameToFront(params)
  },
  sendFrameToBack(params: sendFrameToBackParams) {
    api.sendFrameToBack(params)
  }
}
