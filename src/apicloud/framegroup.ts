import {
  openFrameGroupParams,
  setFrameGroupAttrParams,
  setFrameGroupIndexParams,
  openFrameGroupRet
} from '@/interfaces/apicloud/api.params'

export default {
  opened: {},
  open(
    params: openFrameGroupParams,
    callback: (ret: openFrameGroupRet) => void
  ) {
    const normal = {
      scrollEnabled: true,
      preload: api.systemType === 'ios' ? 2 : 1
    }
    let FrameGroupParams = Object.assign({}, normal, params)
    if (this.opened[FrameGroupParams.name]) {
      this.show(FrameGroupParams)
    } else {
      api.openFrameGroup(FrameGroupParams, (ret) => {
        callback(ret)
      })
      this.opened[FrameGroupParams.name] = true
    }
  },
  close(name: string) {
    if (this.opened[name]) {
      api.closeFrameGroup({ name })
      this.opened[name] = false
    }
  },
  setGroupAttr(params: setFrameGroupAttrParams) {
    api.setFrameGroupAttr(params)
    return this
  },
  show(params: setFrameGroupAttrParams) {
    params.hidden = false
    this.setGroupAttr(params)
  },
  hide(params: setFrameGroupAttrParams) {
    params.hidden = true
    this.setGroupAttr(params)
  },
  setIndex(params: setFrameGroupIndexParams) {
    api.setFrameGroupIndex(params)
  }
}
