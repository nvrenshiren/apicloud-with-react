import {
  initMapSDKRet,
  initMapSDKErr,
  bMap,
  getNameFromCoordsRet
} from '@/interfaces/apicloud/bMap'

export default {
  get bMap() {
    return api.require('bMap') as bMap
  },
  get hasPermission() {
    return api.hasPermission({
      list: ['location']
    })[0]
  },
  err: {
    '0': '授权验证通过',
    '101': 'ak不存在',
    '102': 'mcode签名值不正确',
    '200': 'APP不存在，AK有误请检查再重试',
    '201': 'APP被用户自己禁用，请在控制台解禁',
    '-300': '链接服务器错误',
    '-200': '服务返回数据异常'
  },
  init() {
    return new Promise((resolve, reject) => {
      if (api.systemType === 'android') {
        resolve()
      } else {
        this.initMapSDK((ret, err) => {
          if (ret.status) {
            resolve()
          } else {
            reject(this.err[err.code])
          }
        })
      }
    })
  },
  /**
   * 初始化百度地图引擎，本接口仅支持 iOS 平台，android平台不需要初始化
   * @param callback
   */
  initMapSDK(callback: (ret: initMapSDKRet, err: initMapSDKErr) => void) {
    this.bMap.initMapSDK((ret, err) => {
      callback(ret, err)
    })
  },
  getNameFromCoords(callback: (ret: getNameFromCoordsRet) => void) {
    this.bMap.getLocation({}, (ret) => {
      this.bMap.getNameFromCoords(
        {
          lat: ret.lat,
          lon: ret.lon
        },
        (CoordsRet) => {
          if (CoordsRet.status) {
            callback(CoordsRet)
          }
        }
      )
    })
  }
}
