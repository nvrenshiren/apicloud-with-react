import * as React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import * as Color from '@material-ui/core/colors'
import commonFunc from '@/functions/common.func'
import apiEvent from '@/apicloud/api.event'
interface State {
  theme?: string
  dark?: boolean
}
class Layout extends React.PureComponent<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      theme: commonFunc.Theme,
      dark: commonFunc.Dark
    }
  }
  state: State
  get Theme() {
    let Theme = Color[this.state.theme]
    window.Theme = createMuiTheme({
      palette: {
        primary: Object.assign({}, Theme),
        secondary: Object.assign({}, Color['amber']),
        type: this.state.dark ? 'dark' : 'light',
        divider: 'rgba(0, 0, 0, 0.05)'
      }
    })

    /**
     * 定义状态栏样式
     */
    api.setStatusBarStyle({
      style: 'light',
      color: 'rgba(0,0,0,0)',
      animated: true
    })
    return window.Theme
  }
  render() {
    return (
      <MuiThemeProvider theme={this.Theme}>
        <React.Fragment>
          <CssBaseline />
          {this.props.children}
        </React.Fragment>
      </MuiThemeProvider>
    )
  }

  componentDidMount() {}
  componentWillMount() {
    //监听全局夜间模式切换
    apiEvent.on('changeDark', () => {
      this.setState({
        dark: commonFunc.Dark
      })
    })
    //监听当前页夜间模式切换
    apiEvent.on('changePageDark', (ret: any) => {
      this.setState({
        dark: ret.isdark
      })
    })
    //监听主题切换
    apiEvent.on('changeTheme', (ret: any) => {
      commonFunc.setItem('theme', ret)
      this.setState({
        theme: ret
      })
    })
    //安卓返回操作监听
    apiEvent.on('keyback', () => {
      apiEvent.send('pageBack')
    })
  }
  componentWillUnmount() {
    this.setState(() => {})
  }
}

export default Layout
