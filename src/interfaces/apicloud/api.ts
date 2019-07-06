import {
  openWinParams,
  closeWinParams,
  closeToWinParams,
  setWinAttrParams,
  openFrameParams,
  closeFrameParams,
  setFrameAttrParams,
  bringFrameToFrontParams,
  sendFrameToBackParams,
  setFrameClientParams,
  setFrameClientRet,
  animationParams,
  openFrameGroupParams,
  openFrameGroupRet,
  setFrameGroupAttrParams,
  setFrameGroupIndexParams,
  openPopoverWinParams,
  openSlidLayoutParams,
  openSlidLayoutRet,
  openDrawerLayoutParams,
  loadDataParams,
  execScriptParams,
  setBlurEffectParams,
  historyParams,
  historyRet,
  pageScrollParams,
  pageScrollRet,
  pageAnimation,
  ajaxParams,
  ajaxReturnAll,
  ajaxUpReport,
  ajaxError,
  downRet,
  downloadParams,
  imageCacheParams,
  imageCacheRet,
  readFileRet,
  writeFileParams,
  writeFileRet,
  readFileParams,
  setPrefsParams,
  getPrefsRet,
  sizeRet,
  getPrefsParams,
  addEventListenerParams,
  sendEventParams,
  notificationParams,
  startLocationRet,
  startLocationParams,
  startSensorRet,
  startSensorParams,
  callParams,
  smsParams,
  mailParams,
  utilParams,
  utilRet,
  promptParams,
  promptRet,
  actionSheetParams,
  showProgressParams,
  toastParams,
  openPickerParams,
  openPickerRet,
  setRefreshHeaderInfoParams,
  getPictureParams,
  getPictureRet
} from './api.params'

export declare type PermissionKey =
  | 'camera'
  | 'contacts'
  | 'microphone'
  | 'photos'
  | 'location'
  | 'locationAlways'
  | 'notification'
  | 'calendar'
  | 'phone'
  | 'sensor'
  | 'sms'
  | 'storage'

export interface api {
  /**
   * 应用的 ID，可以在网站控制台概览里面查看，字符串类型
   */
  appId: string
  /**
   * 应用在桌面显示名称，字符串类型
   */
  appName: string
  /**
   * 应用版本号，字符串类型
   */
  appVersion: string
  /**
   * 系统类型，字符串类型
   */
  systemType: 'ios' | 'android' | 'win' | 'wp'
  /**
   * 手机平台的系统版本，字符串类型
   */
  systemVersion: string

  /**
   * 引擎版本信息，字符串类型
   */
  version: string

  /**
   * 设备唯一标识，字符串类型
   */
  deviceId: string
  /**
   * iOS中用于推送的Token，若未从系统获取到则返回空字符串，字符串类型
   */
  deviceToken: string
  /**
   * 设备型号，字符串类型
   */
  deviceModel: string
  /**
   * 设备名称，字符串类型
   */
  deviceName: string
  /**
   * uiMode
   */
  uiMode: 'pad' | 'phone' | 'tv' | 'car' | 'desk' | 'watch'
  /**
   * 运营商名称，若未获取到则返回none，字符串类型
   */
  operator: string
  /**
   * 当前网络连接类型
   */
  connectionType: 'unknown' | 'ethernet' | 'wifi' | '2g' | '3g' | '4g' | 'none'
  /**
   * 应用是否全屏，布尔类型，只支持iOS
   */
  fullScreen: boolean
  /**
   * 屏幕分辨率宽，数字类型
   */
  screenWidth: number
  /**
   * 屏幕分辨率高，数字类型
   */
  screenHeight: number
  /**
   * 当前 window 名称，字符串类型
   * 该属性值为 openWin(params:any) 时传递的 name 参数值，注意首页的名称为 root
   */
  winName: string
  /**
   * 当前 window 宽度，数字类型
   * 此属性值不同于屏幕的分辨率，比如 iPhone 5 的分辨率为 640*1136，但是其 winWidth 为 320，因此前端需根据 winWidth 和 winHeight 来进行布局
   */
  winWidth: number
  /**
   * 当前 window 高度，数字类型
   * 此属性值不同于屏幕的分辨率，比如 iPhone 5 的分辨率为 640*1136，但是其 winHeight 为 568（若不使用iOS7风格则为 548），因此前端需根据 winWidth 和 winHeight 来进行布局
   */
  winHeight: number
  /**
   * frame 名称，字符串类型
   * 若当前环境为 window 中，则该属性值为空字符串
   */
  frameName: string
  /**
   * frame 宽度，数字类型
   * 若当前环境为 window 中，则值和 winWidth 相同
   */
  frameWidth: number
  /**
   * frame 高度，数字类型
   * 若当前环境为 window 中，则值和 winHeight 相同
   */
  frameHeight: number
  /**
   * 页面不被其它内容（如状态栏）遮住的区域，JSON对象
   * 通过safeArea能够知道当前页面哪些地方被遮住，从而做出相应的调整，保证页面重要元素不被遮挡住。
   * 比如应对顶部header被状态栏遮住一部分，可以为header增加一个paddingTop，如：
   * header.style.paddingTop = api.safeArea.top + 'px';
   * 在比如在iPhone X上面，底部的导航菜单会被虚拟Home键遮住一部分，可以为footer增加一个paddingBottom，如：
   * footer.style.paddingBottom = api.safeArea.bottom + 'px';
   */
  safeArea: {
    /**
     * 安全区域上边缘，对于沉浸式下window中该值通常为状态栏高度，全屏或非沉浸式下为0（iPhone X竖屏时全屏状态下也为44）
     */
    top: number
    /**
     * 安全区域左边缘，通常为0（iPhone X横屏时为44）
     */
    left: number
    /**
     * 安全区域下边缘，通常为0（iPhone X竖屏时为34，横屏时为21）
     */
    bottom: number
    /**
     * 安全区域右边缘，通常为0（iPhone X横屏时为44）
     */
    right: number
  }
  /**
   * 页面参数，JSON 对象类型
   * 用于获取页面间传递的参数值，为 openWin(params:any)、openFrame(params:any) 等方法中的 pageParam 参数对应值
   */
  pageParam: any
  /**
   * widget 参数，JSON 对象类型
   * 用于获取 widget 间传递的参数值，为 openWidget(params:any) 方法中的 wgtParam 参数对应值
   */
  wgtParam: any
  /**
   * 当应用被第三方应用打开时，传递过来的参数，字符串类型
   * 建议通过appintent事件监听应用被第三方应用调起，并在事件回调里面获取参数进行处理。
   */
  appParam: any
  /**
   * 当前应用状态栏是否支持沉浸式效果，布尔类型
   */
  statusBarAppearance: boolean
  /**
   * widget: //协议对应的真实目录，即 widget 网页包的根目录，字符串类型
   * 注意该目录为只读，不要往该目录下面写文件
   */
  wgtRootDir: string
  /**
   * fs: //协议对应地真实目录，字符串类型
   */
  fsDir: string
  /**
   * cache://协议对应的真实目录，字符串类型
   * iOS 平台下载的文件一般存放于该目录下，否则提交 AppStore 审核时可能会不通过，且此目录下的内容在手机备份时不会被备份
   */
  cacheDir: string
  /**
   * box://协议对应的真实目录，字符串类型
   * iOS上面在应用Documents下，安卓上面在系统为app分配的沙箱下，root或者越狱的手机可看到。
   */
  boxDir: string
  /**
   * 获取config.xml配置的debug字段的值。
   */
  debug: boolean
  /**
   * 渠道号，字符串类型
   */
  channel: string
  /**
   * 设备是否越狱，布尔类型
   */
  jailbreak: boolean

  /**
   * 若window已存在，则会把该window显示到最前面，同时若url有变化或者reload参数为true时，页面会重新加载。若当前正在进行openWin、closeWin等带动画过渡的window操作，调用此方法会失效。
   */
  openWin: <pageParam>(params: openWinParams<pageParam>) => void
  /**
   * 若当前正在进行 openWin、closeWin 等带动画过渡的 window 操作，调用此方法会失效
   */
  closeWin: (params?: closeWinParams) => void
  /**
   * 关闭到指定 window，最上面显示的 window 到指定 name 的 window 间的所有 window 都会被关闭
   * 若当前正在进行 openWin、closeWin 等带动画过渡的 window 操作，调用此方法会失效
   */
  closeToWin: (params: closeToWinParams) => void
  /**
   * 设置 window 属性
   */
  setWinAttr: (params?: setWinAttrParams) => void
  /**
   * 若 frame 已存在，则会把该窗口显示到最前面并显示，如果 url 和之前的 url 有变化，或者 reload 为 true 时，页面会刷新
   * 此方法对 frameGroup 里面的 frame 不起作用
   */
  openFrame: <pageParam>(params: openFrameParams<pageParam>) => void
  /**
   * 关闭frame
   */
  closeFrame: (params?: closeFrameParams) => void
  /**
   * 获取当前window中所有打开的frame（包括frameGroup中的frame）。该方法为同步方法。
   */
  frames: () => {
    name: string // frame名字，字符串类型
    parent: string // 父窗口的名字，如果是frameGroup中的frame，该值为frameGroup的名字，字符串类型
  }[]
  /**
   * 设置frame属性
   */
  setFrameAttr: (params: setFrameAttrParams) => void
  /**
   * 调整 frame 到前面
   */
  bringFrameToFront: (params: bringFrameToFrontParams) => void
  /**
   * 调整 frame 到后面
   */
  sendFrameToBack: (params: sendFrameToBackParams) => void
  /**
   * 设置指定 frame 的页面加载监听，仅在 window 中调用生效，可以对多个 frame 进行监听。
   */
  setFrameClient: (
    params: setFrameClientParams,
    callback: (ret: setFrameClientRet, error: any) => void
  ) => void
  /**
   * frame 动画，支持平移，缩放，旋转和透明度变化
   * 仅支持 frame，不支持 window 以及 frameGroup 里面的 frame
   */
  animation: (
    params: animationParams,
    callback?: (ret: any, err: any) => void
  ) => void
  /**
   * 若frame组已存在，则会把该frame组显示到最前面。frame组打开后，当前页面加载完成后，页面会预加载后面指定个数页面
   */
  openFrameGroup: (
    params: openFrameGroupParams,
    callback: (ret: openFrameGroupRet, err: any) => void
  ) => void
  /**
   * 关闭frame组
   */
  closeFrameGroup: (params: { name: string }) => void
  /**
   * 设置 frame 组属性
   */
  setFrameGroupAttr: (params: setFrameGroupAttrParams) => void
  /**
   * 设置 frame 组当前可见 frame
   */
  setFrameGroupIndex: (params: setFrameGroupIndexParams) => void
  /**
   * 打开弹出层窗口，只支持iPad
   * 在弹出层窗口里面不能再打开弹出窗口，页面可以使用所有的 window 和 frame 相关操作，如 openWin、openFrame 等
   * 使用 execScript(params:any) 方法时，引擎只会在整个弹出层里面的窗口中去寻找要执行脚本的窗口，如果要和弹出层下面的窗口间进行通信，可以使用 sendEvent(params:any) 方法实现
   */
  openPopoverWin: <pageParam>(params: openPopoverWinParams<pageParam>) => void
  /**
   * 关闭整个弹出层窗口，只 iPad 上面有效
   * 在当前弹出层里面的任意页面里面调用都会关闭整个弹出层
   */
  closePopoverWin: () => void
  /**
   * 打开侧滑式布局
   * 打开后，其所在 window 的 name 默认为 slidLayout，所以关闭整个侧滑布局可以通过 api.closeWin({name:'slidLayout'}) 实现，同时可以通过 api.openWin({name:'slidLayout'})来把整个侧滑显示到最前面
   */
  openSlidLayout: <fixedPaneParam, slidPaneParam>(
    params: openSlidLayoutParams<fixedPaneParam, slidPaneParam>,
    callback?: (ret: openSlidLayoutRet, err: any) => void
  ) => void
  /**
   * 向左或右进行侧滑
   */
  openSlidPane: (params: { type: 'left' | 'right' }) => void
  /**
   * 当 SlidPane 处于左或右侧滑状态时，将其收起
   */
  closeSlidPane: () => void
  /**
   * 锁住 SlidPane，使其不能跟随手指滑动而移动
   */
  lockSlidPane: () => void
  /**
   * 解锁 SlidPane，使其能跟随手指滑动而移动
   */
  unlockSlidPane: () => void
  /**
   * 打开一个抽屉式侧滑 window，可以从当前 window 的左右边缘滑动拉出侧滑 window。
   * 此方法在 openWin 方法的基础上增加了 leftPane、rightPane 参数，所以可以通过 api.closeWin(params:any)方法来关闭整个抽屉式侧滑。
   */
  openDrawerLayout: <mainParam, leftParam, rightParam>(
    params: openDrawerLayoutParams<mainParam, leftParam, rightParam>
  ) => void
  /**
   * 打开抽屉式侧滑Pane
   */
  openDrawerPane: (params: { type: 'left' | 'right' }) => void
  /**
   * 关闭抽屉式侧滑Pane
   */
  closeDrawerPane: () => void
  /**
   * 在指定 window 或者 frame 中加载HTML数据，对于 frameGroup 里面的 frame 也有效。
   */
  loadData: (params: loadDataParams) => void
  /**
   * 在指定 window 或者 frame 中执行脚本，对于 frameGroup 里面的 frame 也有效，若 name 和 frameName 都未指定，则在当前 window 中执行脚本，具体执行逻辑见补充说明。
   * 统一处理逻辑为：exec->window->frame
   * name 参数： 当 name 不传值，或者传空字符串的情况下，execScript 对象为调用 execScript 的window（该 window 可能位于屏幕或者后台），在该 window 中继续 frameName 的逻辑； 当 name 传值且非空字符串，但并未找到名为 name 的 window，则直接返回不处理（不论 frameName 是否有值）。若找到了对应的 window，则在该 window 中继续 frameName 的逻辑；
   * frameName 参数： 当 frameName 不传值，或者传空字符串的情况下，execScript 对象为调用 execScript 的 window（该 window 可能位于屏幕或者后台），在该 window 中执行 script； 当 frameName 传值且非空字符串，但并未找到名为 frameName 的 frame，则直接返回不处理。若找到了该 frame，则在该 frame 中执行 script。
   */
  execScript: (params: execScriptParams) => void
  /**
   * 对当前页面或应用设置模糊效果
   * 该方法只支持iOS 8及以上系统
   */
  setBlurEffect: (params: setBlurEffectParams) => void
  /**
   * 当前window或者frame的a标签历史记录后退一页
   */
  historyBack: (
    params: historyParams,
    callback: (ret: historyRet, error: any) => void
  ) => void
  /**
   * 当前window或者frame的a标签历史记录前进一页
   */
  historyForward: (
    params: historyParams,
    callback: (ret: historyRet, error: any) => void
  ) => void
  /**
   * 页面向上滚动一页
   */
  pageUp: (
    params: pageScrollParams,
    callback: (ret: pageScrollRet, error: any) => void
  ) => void
  /**
   * 页面向下滚动一页
   */
  pageDown: (
    params: pageScrollParams,
    callback: (ret: pageScrollRet, error: any) => void
  ) => void
  /**
   * 移除启动图。若 config.xml 里面配置 autoLaunch 为 false，则启动图不会自动消失，直到调用此方法移除。
   */
  removeLaunchView: (params?: { animation: pageAnimation }) => void
  /**
   * 重新显示闪屏广告，若没有闪屏广告则不显示。
   */
  showLaunchView: () => void
  /**
   * 解析元素 tapmode 属性，优化点击事件处理
   * 默认页面加载完成后，引擎会对 dom 里面的元素进行 tapmode 属性解析，若是之后用代码创建的 dom 元素，则需要调用该方法后 tapmode 属性才会生效
   */
  parseTapmode: () => void
  /**
   * 安装应用，如果是苹果的AppStore应用地址，将会跳转到AppStore应用详情页面
   */
  installApp: (params: { appUri: string }) => void
  /**
   * 卸载应用，只支持Android
   */
  uninstallApp: (params: { packageName: string }) => void
  /**
   * 打开手机上其它应用，可以传递参数
   */
  openApp: (params?: any) => void
  /**
   * 判断设备上面是否已安装指定应用
   * 注意：iOS9中系统对检测应用是否安装的方法做了限制，若想得到期望的结果，需要在config.xml里面配置可被检测的URL Scheme。
   */
  appInstalled: (params?: any) => void
  /**
   * 重启应用，云修复完成后可以调用此方法来重启应用使云修复生效。
   */
  rebootApp: () => void
  /**
   * 打开 Widget，若此 widget 已经被打开，则会把其调整到最前面显示
   */
  openWidget: (params: any) => void
  /**
   * 关闭指定widget，也可以关闭应用
   */
  closeWidget: (params?: any) => void
  /**
   * 跨域异步请求，支持标准HTTP协议，支持HTTPS单向/双向认证请求，支持文件上传，支持缓存。
   * HTTPS需要向国际受信任的CA证书颁发机构购买CA证书，否则将可能请求失败，可以在config中配置不校验CA证书是否受信任。
   * 云编译开启全局加密的情况下，请务必使用api.ajax，避免使用JQ等框架的ajax，否则将引起请求失败。
   */
  ajax: <PostData = {}, RetData = {}>(
    params: ajaxParams<PostData>,
    callback: (
      ret: ajaxReturnAll<RetData> | ajaxUpReport<RetData> | RetData,
      err: ajaxError
    ) => void
  ) => void
  /**
   * 取消异步请求
   */
  cancelAjax: (params: { tag: string }) => void
  /**
   * 下载文件
   */
  download: (
    params: downloadParams,
    callback: (ret: downRet, err: any) => void
  ) => void
  /**
   * 取消文件下载
   */
  cancelDownload: (params: { url: string }) => void
  /**
   * 图片缓存
   */
  imageCache: (
    params: imageCacheParams,
    callback: (ret: imageCacheRet, err: any) => void
  ) => void
  /**
   * 设置全局HTTPS双向认证，客户端P12证书，证书将作用于ajax网络请求，以及openWin、openFrame等加载web页面。
   * 此配置与ajax的certificate互斥，即如果ajax配置了certificate，将优先使用ajax出入的certificate。
   */
  applyCertificates: (
    params: {
      host: string
      path: string
      password: string
    }[]
  ) => void
  /**
   * 读取文本文件内容，只支持utf-8编码文本类型文件
   */
  readFile: (
    params: readFileParams,
    callback?: (
      ret: readFileRet,
      err: {
        code: number
        msg: string
      }
    ) => void
  ) => readFileRet
  /**
   * 写入内容到文本文件
   */
  writeFile: (
    params: writeFileParams,
    callback: (
      ret: writeFileRet,
      err: {
        code: number
        msg: string
      }
    ) => void
  ) => void
  /**
   * 设置偏好数据
   */
  setPrefs: (params: setPrefsParams) => void
  /**
   * 获取偏好设置值
   */
  getPrefs: (
    params: getPrefsParams,
    callback?: (ret: getPrefsRet, err: any) => void
  ) => string
  /**
   * 删除偏好设置值
   */
  removePrefs: (params: { key: string }) => void
  /**
   * 清除缓存，包括cache://目录下的文件、拍照临时文件、网页缓存文件等，清除时可能需要消耗一定时间。
   */
  clearCache: (params: { timeThreshold: number }, callback?: () => void) => void
  /**
   * 获取缓存占用空间大小，缓存包括cache://目录下的文件、拍照临时文件以及网页缓存文件等，计算可能需要花费一些时间
   */
  getCacheSize: (
    params: { sync: boolean },
    callback?: (ret: sizeRet, err: any) => void
  ) => sizeRet
  /**
   * 获取总存储空间大小
   */
  getTotalSpace: (
    params: { sync: boolean },
    callback?: (ret: sizeRet, err: any) => void
  ) => sizeRet
  /**
   * 获取剩余存储空间大小
   */
  getFreeDiskSpace: (
    params: { sync: boolean },
    callback?: (ret: sizeRet, err: any) => void
  ) => sizeRet
  /**
   * 从加密的key.xml文件中读取指定数据，key.xml文件放置于网页包里面的res目录，配置方式：
   */
  loadSecureValue: (
    params: getPrefsParams,
    callback?: (ret: getPrefsRet, err: any) => void
  ) => string
  /**
   * 监听事件，支持系统事件和自定义事件
   */
  addEventListener: (
    params: addEventListenerParams,
    callback: (ret: any, err: any) => void
  ) => void
  /**
   * 移除事件监听
   */
  removeEventListener: (params: { name: string }) => void
  /**
   * 将任意一个自定义事件广播出去，该事件可在任意页面通过 addEventListener 监听收到。
   */
  sendEvent: <extra>(params: sendEventParams<extra>) => void
  /**
   * 使用 SuperWebView 时，js 向原生发送消息。此方法只在使用 SuperWebView 时有效。
   */
  accessNative: (params: any) => void
  /**
   * 向用户发出震动、声音提示、灯光闪烁、手机状态栏通知等提示行为，支持闹钟功能。
   * 如果是状态栏通知，当用户点击该通知，页面可以通过监听 noticeclicked 事件获取该通知相关内容。
   * 注：当应用在前台弹出通知提示时，iOS平台的通知将在显示几秒后消失，不会在通知栏保留。
   */
  notification: <extra>(
    params: notificationParams<extra>,
    callback?: (ret: { id: number }, err: any) => void
  ) => void
  /**
   * 取消本应用弹出到状态栏的某个或所有通知，也可以清除设定的闹铃
   */
  cancelNotification: (params: { id: number }) => void
  /**
   * 调用系统自带定位功能，开始定位
   */
  startLocation: (
    params: startLocationParams,
    callback: (ret: startLocationRet, err: { msg: string }) => void
  ) => void
  /**
   * 停止定位
   */
  stopLocation: () => void
  /**
   * 获取位置信息，获取成功后自动停止获取。
   * 若之前已通过 startLocation(params:any) 方法进行定位，则直接返回上次定位的数据，否则使用默认设置进行定位
   */
  getLocation: (
    callback: (ret: startLocationRet, err: { msg: string }) => {}
  ) => void
  /**
   * 开启传感器
   */
  startSensor: (
    params: startSensorParams,
    callback: (ret: startSensorRet, err: { msg: string }) => void
  ) => void
  /**
   * 停止传感器
   */
  stopSensor: (params: startSensorParams) => void
  /**
   * 拨打电话或进行faceTime
   */
  call: (params: callParams) => void
  /**
   * 调用系统短信界面发送短信，或者后台直接发送短信
   */
  sms: (
    params: smsParams,
    callback?: (ret: { status: boolean }, err: any) => void
  ) => void
  /**
   * 发送邮件
   */
  mail: (
    params: mailParams,
    callback?: (ret: { status: boolean }, err: any) => void
  ) => void
  /**
   * 在应用内打开系统通讯录界面选择联系人
   */
  openContacts: (
    callback: (
      ret: { status: boolean; name: string; phone: string },
      err: { msg: string }
    ) => void
  ) => void
  /**
   * 设置是否全屏
   */
  setFullScreen: (params: {
    fullScreen: boolean
    animation?: 'none' | 'fade' | 'slide'
  }) => void
  /**
   * 设置状态栏样式为白色（适用于深色背景）或黑色（适用于浅色背景），以及设置状态栏背景颜色
   */
  setStatusBarStyle: (params: {
    style?: 'dark' | 'light'
    color?: string
    animated?: boolean
  }) => void
  /**
   * 设置屏幕旋转方向
   */
  setScreenOrientation: (params: {
    orientation:
      | 'portrait_up'
      | 'portrait_down'
      | 'landscape_left'
      | 'landscape_right'
      | 'auto'
      | 'auto_portrait'
      | 'auto_landscape'
  }) => void
  /**
   * 设置是否禁止屏幕休眠
   */
  setKeepScreenOn: (params: { keepOn: boolean }) => void
  /**
   * 回到系统桌面
   */
  toLauncher: () => void
  /**
   * 设置是否禁止截屏，只支持Android
   */
  setScreenSecure: (params: { secure: boolean }) => void
  /**
   * 设置应用图标右上角数字，支持所有 iOS 手机，以及部分 Android 手机，如小米和三星的某些型号，不支持的设备，表现结果为调用该接口无任何效果
   */
  setAppIconBadge: (params: { badge: number }) => void
  /**
   * 获取本机电话号码，只支持 Android 部分手机
   */
  getPhoneNumber: (
    params: {
      sync: boolean
    },
    callback: (
      ret: {
        value: string
      },
      err: any
    ) => void
  ) => void
  /**
   * 检测应用是否有某个或多个权限。为帮助您更好的使用该接口，论坛维护了一个示例。
   * 注：该方法为同步方法，方法调用后直接返回结果。
   */
  hasPermission: (params: {
    list: PermissionKey[]
  }) => {
    name: string
    granted: boolean
    undetermined: boolean
  }[]
  /**
   * 向系统请求某个或多个权限。为帮助您更好的使用该接口
   * 对于iOS平台，第一次请求权限时会弹出权限选择框，如果用户没有进行选择就退出应用，那么下次再次请求权限时会继续弹出选择框；如果用户选择了不允许，那么再次请求权限时将不会再弹出选择框，而是直接跳转到系统设置中该应用的设置界面（跳转只支持iOS8及以上系统）。
   * 对于Android平台，只要用户没有选择“不再提示”，那么再次请求权限时都将继续弹出权限选择框；如果用户选择了“不再提示”，那么再次请求权限时将不会再弹出选择框，而是直接跳转到系统设置的权限设置界面。
   */
  requestPermission: (
    params: {
      list: PermissionKey[]
      code: number
    },
    callback: (
      ret: {
        list: { name: string; granted: boolean }[]
        never: boolean
        code: number
      },
      err: any
    ) => void
  ) => void
  /**
   *  按钮点击序号，从1开始
   */
  alert: (
    params: utilParams,
    callback: (ret: utilRet, err: any) => void
  ) => void
  /**
   * 弹出带两个或三个按钮的confirm对话框
   */
  confirm: (
    params: utilParams,
    callback: (ret: utilRet, err: any) => void
  ) => void
  /**
   * 弹出带两个或三个按钮和输入框的对话框
   */
  prompt: (
    params: promptParams,
    callback: (ret: promptRet, err: any) => void
  ) => void
  /**
   * 底部弹出框
   */
  actionSheet: (
    params: actionSheetParams,
    callback: (ret: utilRet, err: any) => void
  ) => void
  /**
   * 显示进度提示框
   */
  showProgress: (params: showProgressParams) => void
  /**
   * 隐藏进度提示框
   */
  hideProgress: () => void
  /**
   * 弹出一个定时自动关闭的提示框
   */
  toast: (params: toastParams) => void
  /**
   * 打开时间选择器
   */
  openPicker: (
    params: openPickerParams,
    callback: (ret: openPickerRet, err: any) => void
  ) => void
  /**
   * 显示默认下拉刷新组件，使用默认下拉刷新组件时页面必须设置为弹动。
   */
  setRefreshHeaderInfo: (
    params: setRefreshHeaderInfoParams,
    callback?: () => void
  ) => void
  /**
   * 使用自定义下拉刷新组件之前，需要在config.xml里面配置要使用的自定义下拉刷新模块名称，如：
   */
  setCustomRefreshHeaderInfo: () => void
  /**
   * 设置下拉刷新组件为刷新中状态
   */
  refreshHeaderLoading: () => void
  /**
   * 通知下拉刷新数据加载完毕，组件会恢复到默认状态
   */
  refreshHeaderLoadDone: () => void
  /**
   * 展示一个悬浮框，浮动在屏幕上。
   */
  showFloatBox: (params: any) => void
  /**
   * 通过调用系统默认相机或者图库应用，获取图片以及视频媒体文件。
   */
  getPicture: (
    params: getPictureParams,
    callback?: (ret: getPictureRet, err: { msg: string }) => void
  ) => void
  /**
   * 保存图片和视频到系统相册
   */
  saveMediaToAlbum: (
    params: {
      path: string
      groupName?: string
    },
    callback?: (ret: { status: boolean }, err: any) => void
  ) => void
  /**
   * 录制amr格式音频
   */
  startRecord: (params: { path: string }) => void
  /**
   * 停止录音
   */
  stopRecord: (
    callback: (
      ret: {
        path: string
        duration: number
      },
      err: any
    ) => void
  ) => void
  /**
   * 播放本地音频，支持amr格式
   */
  startPlay: (params: any) => void
  /**
   * 停止播放音频
   */
  stopPlay: (params: any) => void
  /**
   * 打开系统视频播放器
   */
  openVideo: (params: any) => void
  /**
   * 引用模块
   */
  require: (params: string) => any
}
