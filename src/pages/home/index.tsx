import * as React from 'react'
import ajpush from '@/apicloud/ajpush'

interface State {}

class HomeIndex extends React.PureComponent<{}, State> {
  constructor(props: any) {
    super(props)

    this.state = {}
  }

  render() {
    return <div className="full">首页</div>
  }
  AppInit() {
    /**
     * 极光推送IOS监听
     */
    ajpush.init().then(() => {
      if (api.systemType === 'ios') {
        ajpush.setListener((ret) => {
          //IOS应用运行期间的推送监听
        })
      }
    })
  }
  componentDidMount() {}
  componentWillMount() {
    //APP初始化操作
    //初始事件监听,例如推送时间
  }
  componentWillUnmount() {
    this.setState(() => {})
  }
}

export default HomeIndex
