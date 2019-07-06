export interface initMapSDKRet {
  status: boolean
}
export interface initMapSDKErr {
  code: number
}

export interface getNameFromCoordsParams {
  lon: number
  lat: number
}

export interface getLocationServicesRet {
  enable: boolean
  authorizationStatus:
    | 'notDetermined'
    | 'restricted'
    | 'denied'
    | 'always'
    | 'whenInUse'
}

export interface getLocationParams {
  accuracy?: '10m' | '100m' | '1km' | '3km'
  autoStop?: boolean
  filter?: number
  enableLocInForeground?: boolean
  notification?: {
    id: number
    contentTitle: string
    contentText: string
  }
}

export interface getLocationRet {
  status: boolean
  lon: number
  lat: number
  accuracy: number
  timestamp: number
  locationType: 'GPS' | 'NetWork' | 'OffLine'
}

export interface ErrorRet {
  code: number
  msg?: string
}

export interface getNameFromCoordsRet {
  status: boolean //布尔型；true||false
  province: string //字符串类型；省份
  city: string //字符串类型；城市
  district: string //字符串类型；县区
  streetName: string //字符串类型；街道名
  streetNumber: string //字符串类型；街道号
  country: string //字符串类型；国家
  countryCode: string //字符串类型；国家代码
  adCode: string //字符串类型；行政区域编码
  businessCircle: string //字符串类型；商圈名称
  sematicDescription: string //字符串类型；结合当前位置POI的语义化结果描述
  cityCode: string //字符串类型；城市编码
  lon: number //数字类型；经度
  lat: number //数字类型；纬度
  address: string //字符串类型；地址信息
  poiList: poiListItem[]
}

export interface poiListItem {
  name: string //字符串类型；热点名称
  uid: string //字符串类型；热点id
  address: string //字符串类型；热点地址
  city: string //字符串类型；热点所在城市
  phone: string //字符串类型；热点电话
  postcode: string //字符串类型；热点邮编
  epoitype: string //字符串类型；热点类型，0:普通点 1:公交站 2:公交线路 3:地铁站 4:地铁线路
  coord: {
    //JSON对象；热点坐标信息
    lat: number //数字类型；热点纬度
    lon: number //数字类型；热点经度
  }
}

export interface bMap {
  initMapSDK: (
    callback: (ret: initMapSDKRet, err: initMapSDKErr) => void
  ) => void
  getLocation: (
    params: getLocationParams,
    callback: (ret: getLocationRet, err: ErrorRet) => void
  ) => void
  getNameFromCoords: (
    params: getNameFromCoordsParams,
    callback: (ret: getNameFromCoordsRet, err: ErrorRet) => void
  ) => void
  getLocationServices: (
    callback?: (ret: getLocationServicesRet) => void
  ) => void
}
