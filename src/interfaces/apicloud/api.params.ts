export interface pageAnimation {
  type:
    | 'none'
    | 'push'
    | 'movein'
    | 'fade'
    | 'flip'
    | 'reveal'
    | 'ripple'
    | 'curl'
    | 'un_curl'
    | 'suck'
    | 'cube'
  subType?: 'from_right' | 'from_left' | 'from_top' | 'from_bottom'
  duration?: number
}

export interface rectPage {
  x?: number
  y?: number
  w?: number | 'auto'
  h?: number | 'auto'
  marginLeft?: number
  marginTop?: number
  marginBottom?: number
  marginRight?: number
}

interface pageBase<pageParam = {}> {
  name: string
  url?: string
  data?: string
  headers?: Object
  useWKWebView?: boolean
  historyGestureEnabled?: boolean
  pageParam?: pageParam
  showProgress?: boolean
  progress?: {
    type?: 'default' | 'page'
    title?: string
    text?: string
    color?: string
  }
  animation?: pageAnimation
  reload?: boolean
  allowEdit?: boolean
  softInputDismissMode?: 'tap'[] | 'drag'[] | 'interactive'[]
  softInputBarEnabled?: boolean
  overScrollMode?: 'never' | 'always' | 'scrolls'
  dragAndDrop?: boolean
  customRefreshHeader?: string
}

interface pageAttr {
  bounces?: boolean
  bgColor?: string
  scrollToTop?: boolean
  scrollEnabled?: boolean
  vScrollBarEnabled?: boolean
  hScrollBarEnabled?: boolean
  scaleEnabled?: boolean
  softInputMode?: 'resize' | 'pan' | 'auto'
}

interface moveFrame {
  from: string
  to?: string
}

export interface openWinParams<pageParam = {}>
  extends pageBase<pageParam>,
    pageAttr {
  hideTopBar?: boolean
  hideBottomBar?: boolean
  delay?: number
  slidBackType?: 'full' | 'edge'
  slidBackEnabled?: boolean
  hideHomeIndicator?: boolean
}

export interface closeWinParams {
  name?: string
  animation?: pageAnimation
}

export interface closeToWinParams {
  name: string
  animation?: pageAnimation
}

export interface setWinAttrParams extends pageAttr {
  slidBackEnabled?: boolean
  hideHomeIndicator?: boolean
}

export interface openFrameParams<pageParam = {}>
  extends pageBase<pageParam>,
    pageAttr {
  rect?: rectPage
}

export interface closeFrameParams {
  name?: string
}

export interface setFrameAttrParams extends pageAttr {
  name: string
  hidden?: boolean
  rect?: rectPage
}

export interface bringFrameToFrontParams extends moveFrame {}

export interface sendFrameToBackParams extends moveFrame {}

export interface setFrameClientParams {
  frameName: string
}
export interface setFrameClientRet {
  state: 0 | 1 | 2 | 3 | 4
  progress: number
  title?: string
  url?: string
}

export interface animationParams {
  name: string
  delay?: number
  duration?: number
  curve?: 'ease_in_out' | 'ease_in' | 'ease_out' | 'linear'
  repeatCount?: number
  autoreverse?: boolean
  alpha?: number
  translation?: {
    x?: number
    y?: number
    z?: number
  }
  scale?: {
    x?: number
    y?: number
    z?: number
  }
  rotation?: {
    x?: number
    y?: number
    z?: number
    degree?: number
  }
}

export interface FrameGroupItemParams<ItemParams = {}> extends pageAttr {
  name: string
  url: string
  data?: string
  headers?: Object
  useWKWebView?: boolean
  historyGestureEnabled?: boolean
  pageParam?: ItemParams
  allowEdit?: boolean
  softInputBarEnabled?: boolean
  overScrollMode?: 'never' | 'always' | 'scrolls'
  customRefreshHeader?: string
}

export interface openFrameGroupParams {
  name: string
  background?: string
  scrollEnabled?: boolean
  fixedOn?: 'ui_window' | 'ui_layout'
  rect?: rectPage
  index?: number
  preload?: number
  frames: FrameGroupItemParams[]
}
export interface openFrameGroupRet {
  name: string
  index: number
}

export interface setFrameGroupAttrParams {
  name: string
  hidden?: boolean
  scrollEnabled?: boolean
  rect?: rectPage
}

export interface setFrameGroupIndexParams {
  name: string
  index: number
  scroll?: boolean
  reload?: boolean
}

export interface openPopoverWinParams<pageParam = {}> extends pageAttr {
  style?: 'default' | 'popover'
  width?: number
  height?: number
  arrowRect?: rectPage
  arrowDirection?: 'left' | 'right' | 'up' | 'down' | 'any'
  name: string
  url: string
  pageParam?: pageParam
  showProgress?: boolean
  progress?: {
    type: 'default' | 'page'
    title: string
    text: string
    color: string
  }
  allowEdit?: boolean
  softInputBarEnabled?: boolean
  customRefreshHeader?: string
}

interface SlidLayoutPane<pageParam = {}> extends pageAttr {
  name: string
  url: string
  pageParam?: pageParam
  allowEdit?: boolean
  softInputBarEnabled?: boolean
  customRefreshHeader?: string
}

export interface openSlidLayoutParams<fixedPaneParam = {}, slidPaneParam = {}> {
  type?: 'all' | 'left' | 'right'
  leftEdge?: number
  rightEdge?: number
  slidPaneStyle?: {
    leftEdge?: number
    rightEdge?: number
    leftScale?: number
    rightScale?: number
  }
  fixedPaneStyle?: {
    leftEdge?: number
    rightEdge?: number
    leftScale?: number
    rightScale?: number
    leftMaskBg?: string
    rightMaskBg?: string
    leftBg?: string
    rightBg?: string
  }
  fixedPane: SlidLayoutPane<fixedPaneParam>
  slidPane: SlidLayoutPane<slidPaneParam>
}

export interface openSlidLayoutRet {
  type: 'left' | 'right'
  event: 'slide' | 'open' | 'close'
}

interface DrawerLayoutPane<pageParam = {}> extends pageAttr {
  name: string
  url: string
  pageParam?: pageParam
  allowEdit?: boolean
  softInputBarEnabled?: boolean
  customRefreshHeader?: string
  edge?: number
}

export interface openDrawerLayoutParams<
  mainParam = {},
  leftParam = {},
  rightParam = {}
> extends DrawerLayoutPane<mainParam> {
  delay?: number
  slidBackType?: 'full' | 'edge'
  slidBackEnabled?: boolean
  animation?: pageAnimation
  showProgress?: boolean
  progress?: {
    type: 'default' | 'page'
    title: string
    text: string
    color: string
  }
  reload?: boolean
  overScrollMode?: 'never' | 'always' | 'scrolls'
  leftPane?: DrawerLayoutPane<leftParam>
  rightPane?: DrawerLayoutPane<rightParam>
}

export interface loadDataParams {
  name?: string
  frameName?: string
  url?: string
  data: string
}

export interface execScriptParams {
  name?: string
  frameName?: string
  script: string
}

export interface setBlurEffectParams {
  style:
    | ''
    | 'none'
    | 'extra_light'
    | 'light'
    | 'dark'
    | 'regular'
    | 'prominent'
  global?: boolean
  alpha?: number
  borderRadius?: number
  animation?: {
    curve?: 'ease_in_out' | 'ease_in' | 'ease_out' | 'linear'
    delay: number
    duration: number
  }
  rect?: rectPage
}

export interface historyParams {
  frameName?: string
}
export interface historyRet {
  status: boolean
}

export interface pageScrollParams {
  top?: boolean
  bottom?: boolean
}
export interface pageScrollRet {
  scrolled: boolean
}

export interface ajaxParams<PostData = {}> {
  url: string
  encode?: boolean
  tag?: string
  method?:
    | 'get'
    | 'post'
    | 'put'
    | 'delete'
    | 'head'
    | 'options'
    | 'trace'
    | 'patch'
  cache?: boolean
  timeout?: number
  dataType?: 'json' | 'text'
  charset?: string
  headers?: Object
  report?: boolean
  returnAll?: boolean
  data?: {
    stream?: string
    body?: string | PostData
    values?: PostData
    files?: {
      [key: string]: string | string[]
    }
  }
  certificate?: {
    path: string
    password: string
  }
  safeMode?: 'none' | 'both' | 'request' | 'response'
}

export interface ajaxReturnAll<RetData = {}> {
  statusCode: number
  headers: Object
  body: RetData
}

export interface ajaxUpReport<RetData = {}> {
  progress: number
  status: 0 | 1 | 2
  body: RetData
}

export interface ajaxError {
  statusCode: number
  code: 0 | 1 | 2 | 3 | 4
  msg: string
  body: any
}

export interface downloadParams {
  url: string
  encode?: boolean
  savePath?: string
  report?: boolean
  cache?: boolean
  allowResume?: boolean
}
export interface downRet {
  fileSize: number
  percent: number
  state: number
  savePath: string
}

export interface imageCacheParams {
  url: string
  encode?: boolean
  policy?: 'default' | 'cache_else_network ' | 'no_cache' | 'cache_only'
  thumbnail?: boolean
}

export interface imageCacheRet {
  status: boolean
  url: string
}

export interface readFileParams {
  sync: boolean
  path: string
}
export interface readFileRet {
  status: boolean
  data: string
}

export interface writeFileParams {
  path: string
  data: string
  append: boolean
}
export interface writeFileRet {
  status: boolean
}

export interface setPrefsParams {
  key: string
  value: string
}

export interface getPrefsParams {
  key: string
  sync: boolean
}
export interface getPrefsRet {
  value: any
}

export interface sizeRet {
  size: number
}

export interface addEventListenerParams {
  name: string
  extra?: {
    threshold?: number
    timeout?: number
  }
}

export interface sendEventParams<extra = {}> {
  name: string
  extra?: extra
}

export interface notificationParams<extra = {}> {
  vibrate?: number[]
  sound?: string
  light?: boolean
  notify?: {
    title?: string
    content?: string
    extra?: extra
    updateCurrent?: boolean
  }
  alarm?: {
    hour?: number
    minutes?: number
    daysOfWeek?: number[]
    time?: number
    openApp?: boolean
  }
}

export interface startLocationParams {
  accuracy?: '10m' | '100m' | '1km' | '3km'
  filter?: number
  autoStop?: boolean
}

export interface startLocationRet {
  longitude: number
  latitude: number
  timestamp: number
  status: boolean
}

export interface startSensorParams {
  type: 'accelerometer' | 'gyroscope' | 'magnetic_field' | 'proximity'
}
export interface startSensorRet {
  x: number
  y: number
  z: number
  proximity: boolean
  status: boolean
}

export interface callParams {
  type?: 'tel' | 'tel_prompt' | 'facetime'
  number: string
}

export interface smsParams {
  numbers: string[]
  text: string
  silent?: boolean
}

export interface mailParams {
  recipients: string[]
  subject: string
  body?: string
  attachments?: string[]
}

export interface utilParams {
  title?: string
  msg?: string
  buttons?: string[]
}
export interface utilRet {
  buttonIndex: number
}

export interface promptParams extends utilParams {
  text?: string
  type?: string
}
export interface promptRet extends utilRet {
  text: string
}

export interface actionSheetParams {
  title?: string
  cancelTitle?: string
  destructiveTitle?: string
  buttons?: string[]
  style?: {
    layerColor?: string
    itemNormalColor: string
    itemPressColor: string
    fontNormalColor: string
    fontPressColor: string
    titleFontColor: string
  }
}

export interface showProgressParams {
  style?: string
  animationType?: 'fade' | 'zoom'
  title?: string
  text?: string
  modal?: boolean
}

export interface toastParams {
  msg: string
  duration?: number
  location?: 'top' | 'middle' | 'bottom'
  global?: boolean
}

export interface openPickerParams {
  type: 'date' | 'time' | 'data_time'
  date?: 'yyyy-MM-dd HH:mm' | ''
  minDate?: 'yyyy-MM-dd HH:mm' | ''
  title?: string
  arrowRect?: {
    x: number
    y: number
    w: number
    h: number
  }
  arrowDirection?: 'left' | 'right' | 'up' | 'down' | 'any'
}
export interface openPickerRet {
  year: number
  month: number
  day: number
  hour: number
  minute: number
}

export interface setRefreshHeaderInfoParams {
  visible?: boolean
  loadingImg?: string
  bgColor?: string
  textColor?: string
  textDown?: string
  textUp?: string
  textLoading?: string
  textTime?: string
  showTime?: boolean
}

export interface getPictureParams {
  sourceType?: 'library' | 'camera' | 'album'
  encodingType?: 'jpg' | 'png'
  mediaValue?: 'pic' | 'video' | 'all'
  destinationType?: 'base64' | 'url'
  direction?: 'front' | 'rear'
  allowEdit?: boolean
  preview?: boolean
  quality?: number
  videoQuality?: string
  targetWidth?: number
  targetHeight?: number
  saveToPhotoAlbum?: boolean
  groupName?: string
}

export interface getPictureRet {
  data: string
  base64Data: string
  duration: number
}
