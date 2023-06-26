import React, { PureComponent } from 'react'
import './App.less'

export class App extends PureComponent {
  render() {
    return (
      <div className='app'>
        <div className='section'>
          <div className='title'>我是标题</div>
          <div className='content'>我是内容, 哈哈哈</div>
        </div>
      </div>
    )
  }
}

export default App
