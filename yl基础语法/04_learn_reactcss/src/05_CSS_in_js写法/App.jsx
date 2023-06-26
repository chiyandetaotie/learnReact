import React, { PureComponent } from 'react'
import {AppWrapper, SectionWrapper} from './Style'
import Home from './Home'

export default class App extends PureComponent {
  constructor() {
    super()
    this.state ={ 
      size: 30,
      color: 'green'
    }
  }
  render() {
    const { size, color} = this.state

    return (
      <AppWrapper>
        <SectionWrapper size={size} color={color}>
          <h2 className='title'>我是标题</h2>
          <p className='content'>我是内容</p>
          <button onClick={e => this.setState({color: "skyblue"})}>修改颜色</button>
        </SectionWrapper>

        <Home/>

        <div className='footer'>
          <p>免责声明</p>
          <p>版权声明</p>
        </div>
      </AppWrapper>
    )
  }
}
