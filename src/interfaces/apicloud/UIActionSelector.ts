export interface cityItem {
  name: string
  id: string
  sub: cityItem[]
}

export interface openParams {
  datas: cityItem[] | string
  iPhoneXBottomHeight?: number
  layout?: {
    row?: number //（可选项）数字类型；每屏显示的数据行数，超出的数据可以滑动查看，只能是奇数；默认：5
    col?: number //（可选项）数字类型；数据源的数据级数，最多3级；默认：3
    height?: number //（可选项）数字类型；每行选项的高度；默认：30
    size?: number //（可选项）数字类型；普通选项的字体大小；默认：12
    sizeActive?: number //（可选项）数字类型；当前选项的字体大小；默认：同 size
    rowSpacing?: number //（可选项）数字类型；行与行之间的距离；默认：5
    colSpacing?: number //（可选项）数字类型；列与列之间的距离；默认：10
    maskBg?: string //（可选项）字符串类型；遮罩层背景，点击该区域隐藏选择器，支持 rgb，rgba，#，img；默认：rgba(0,0,0,0.2)
    bg?: string //（可选项）字符串类型；选择器有效区域背景，支持 rgb，rgba，#，img；默认：#fff
    color?: string //（可选项）字符串类型；选项的文字颜色，支持 rgb，rgba，#；默认：#848484
    colorSelected?: string //（可选项）字符串类型；已选项的文字颜色，支持 rgb，rgba，#；默认：同 colorActive
    leftMargin?: number //（可选项）数字类型；选择器分割线的左边距；默认：0
    rightMargin?: number //（可选项）数字类型；选择器分割线的右边距；默认：0
  }
  animation?: boolean
  cancel?: {
    text?: string //（可选项）字符串类型；取消按钮的显示文字；默认：未设置时只显示背景
    size?: number //（可选项）数字类型；取消按钮的显示文字大小；默认：12
    w?: number //（可选项）数字类型；取消按钮的宽；默认：90
    h?: number //（可选项）数字类型；取消按钮的高；默认：35
    bg?: string //（可选项）字符串类型；取消按钮的背景，支持 rgb，rgba，#，img；默认：'#fff'
    bgActive?: string //（可选项）字符串类型；取消按钮的背景高亮，支持 rgb，rgba，#，img；默认：同 bg
    color?: string //（可选项）字符串类型；取消按钮的文字颜色，支持 rgb，rgba，#；默认：'#848484'
    colorActive?: string //（可选项）字符串类型；取消按钮的文字颜色高亮，支持 rgb，rgba，#；默认：同 color
  }
  ok?: {
    text?: string //（可选项）字符串类型；确定按钮的显示文字；默认：未设置时只显示背景
    size?: number //（可选项）数字类型；确定按钮的显示文字大小；默认：12
    w?: number //（可选项）数字类型；确定按钮的宽；默认：90
    h?: number //（可选项）数字类型；确定按钮的高；默认：35
    bg?: string //（可选项）字符串类型；确定按钮的背景，支持 rgb，rgba，#，img；默认：'#fff'
    bgActive?: string //（可选项）字符串类型；确定按钮的背景高亮，支持 rgb，rgba，#，img；默认：同 bg
    color?: string //（可选项）字符串类型；确定按钮的文字颜色，支持 rgb，rgba，#；默认：'#848484'
    colorActive?: string //（可选项）字符串类型；确定按钮的文字颜色高亮，支持 rgb，rgba，#；默认：同 color
  }
  title?: {
    text?: string //（可选项）字符串类型；选择器的标题内容；默认：请选择
    size?: number //（可选项）数字类型；标题内容的文字大小；默认：12
    h?: number //（可选项）数字类型；标题栏的高；默认：44
    bg?: string //（可选项）字符串类型；标题栏的背景，支持 rgb，rgba，#，img；默认：'#eee'
    color?: string //（可选项）字符串类型；标题内容的文字颜色，支持 rgb，rgba，#；默认：'#848484'
    alignment?: string // (可选项)字符串类型；标题内容的文字的对齐方式，默认：'center'
  }
  lineColor?: string
  lineHeight?: number
  selectorDividerColor?: string
  selectedBold?: boolean
  actives?: number[]
  fixedOn?: string
}

export interface openRet {
  eventType: 'ok' | 'cancel'
  level1: string
  level2: string
  level3: string
  selectedInfo: cityItem[]
}

export interface UIActionSelector {
  open: (params: openParams, callback: (ret: openRet) => void) => void
  hide: () => void
  show: () => void
  close: () => void
  setActive: () => void
  getActive: () => void
}
