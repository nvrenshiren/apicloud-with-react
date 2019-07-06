import Plugins from './plugins'
import Webpack from './webpack'
export default Object.assign(
  {
    // 插件配置
    plugins: Plugins,
    // 路由配置
    routes: null,
    // 禁用 redirect 上提。
    disableRedirectHoist: false,
    // 如需切换 history 方式为 hash（默认是 browser history），配置 history: 'hash'。
    history: 'browser',
    // 指定输出路径
    outputPath: './dist',
    // 指定 react-router 的 base，部署到非根目录时需要配置
    base: '/',
    // 指定 webpack 的 publicPath，指向静态资源文件所在的路径。
    publicPath: './',
    // 值为 true 时使用 HTML 里指定的 window.publicPath
    runtimePublicPath: true,
    // 为 CSS 指定额外的 publicPath
    cssPublicPath: './',
    // 指定 react app 渲染到的 HTML 元素 id。
    mountElementId: 'app',
    minimizer: 'uglifyjs',
    // 是否开启 hash 文件后缀。
    hash: false,
    // 配置浏览器最低版本，会自动引入 polyfill 和做语法转换，配置的 targets 会和合并到默认值，所以不需要重复配置。
    targets: { chrome: 39, firefox: 45, safari: 10, edge: 13, ios: 10 },
    // 配置全局 context，会覆盖到每个 pages 里的 context。
    context: {},
    // 如果设为 true 或 Object，则导出全部路由为静态页面，否则默认只输出一个 index.html。
    exportStatic: {
      htmlSuffix: true,
      dynamicRoot: true
    },
    // 如果设为 true，启用单数模式的目录。
    singular: false
  },
  Webpack
)
