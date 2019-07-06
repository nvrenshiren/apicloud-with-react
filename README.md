# apicloud-with-react 
## 项目介绍
    用React来开发Apicloud相比较之前的方式来说,更便捷以及更方便维护
    另外引入了TypeScript,在代码提示和团队协作开发方面十分酸爽
    UI使用的目前国际上较流行的Material-UI
    该项目目前已经使用在本人最近的APP项目中,
  > 测试地址
  >
  >   ![测试](https://app.cnchu.com/app/applink.png)
## 目录介绍
  - 根目录/
      - config  
        - config.js [UMI配置文件](https://umijs.org/zh/config/)
        - plugins.js [umi-plugin-dva配置文件](https://umijs.org/zh/plugin/umi-plugin-react.html#%E9%85%8D%E7%BD%AE%E9%A1%B9)
        - webpack.js  [webpack配置文件](https://umijs.org/zh/config/#webpack)
      - dev
        - index.html (开发模式,跳转umi调试页面的入口文件)
      - dist     (umi编译生成的项目文件)
      - mock     [mockjs配置目录](http://mockjs.com/)
      - res      (apicloud目录)
      - script   (node额外脚本目录)
        - sprite.js 雪碧图脚本
      - src     项目源码
        - apicloud    apicloud常用方法封装
        - components  组件目录
        - documents   [umi页面document模版](https://umijs.org/zh/guide/html-template.html#%E4%BF%AE%E6%94%B9%E9%BB%98%E8%AE%A4%E6%A8%A1%E6%9D%BF)
        - functions   自定义函数目录
        - interfaces  接口类型ts目录
        - layouts     [默认layouts](https://umijs.org/zh/guide/app-structure.html#src-layouts-index-js)
        - model       db模块模型配置
        - pages       项目页面目录
          - document.ejs 默认document模版
        - service     ajax接口目录
        - statics     素材目录
          - _icons    图标目录,用来生成雪碧图,只支持png格式
          - css       项目样式文件
          - fonts     字体图标
          - img       图片素材
        - app.ts      [运行时配置文件](https://umijs.org/zh/guide/runtime-config.html)
        - global.ts   [初始化文件](https://umijs.org/zh/guide/app-structure.html#src-global-js-ts)
        - global.less 全局less样式
      - .env          [UMI环境变量](https://umijs.org/zh/guide/env-variables.html)


## 开发相关
   - 使用VS Code编辑器
   - 插件  [自定义同步调试](https://marketplace.visualstudio.com/items?itemName=KAI.apicloud)

