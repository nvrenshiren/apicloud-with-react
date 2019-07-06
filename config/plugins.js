export default [
  [
    'umi-plugin-react',
    {
      antd: false,
      dva: false,
      routes: {
        exclude: []
      },
      locale: {
        enable: true,
        default: 'zh-CN',
        baseNavigator: false,
        antd: false
      },
      library: 'react',
      dynamicImport: {
        webpackChunkName: true,
        loadingComponent: './components/loading/loading.tsx',
        level: 99
      },
      pwa: false,
      fastClick: false
    }
  ]
]
