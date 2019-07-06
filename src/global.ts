import { api } from './interfaces/apicloud/api'
import { Theme } from '@material-ui/core'

//定义全局变量类型以及设置全局变量

declare global {
  interface Window {
    /**
     * 路由根
     */
    routerBase: string
    /**
     * 项目根目录
     */
    publicPath: string
    /**
     * apiready对象
     */
    apiready: any
    /**
     * APP配置
     */
    AppData: {}
    /**
     * 主题配置
     */
    Theme: Theme
  }
  namespace JSX {
    interface IntrinsicAttributes {
      tapmode?: string
    }
  }

  /**
   * 安卓OS对象
   */
  const os: any
  /**
   * apicloud中的基础api对象
   */
  const api: api
}

//在这里可以添加配置变量
window.AppData = {}
