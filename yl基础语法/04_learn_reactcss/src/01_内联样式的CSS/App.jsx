import React, { PureComponent } from 'react'

export default class App extends PureComponent {

  constructor() {
    super()

    this.state = {
      titleSize: 30
    }
  }

  addTitleSize() {
    this.setState({titleSize: this.state.titleSize + 2})
  }

  render() {
    return (
      <div>
        <div onClick={()=>this.addTitleSize()} style={{border: '1px solid green', width: '100px', padding: '5px 20px'}}> 变大标题 + 2</div>
        <div style={{color: 'blue', fontSize: `${this.state.titleSize}px`}}>我是标题</div>
        <p style={{color: 'red', fontSize: '20px'}}>我是内容，哈哈哈</p>
      </div>
    )
  }
}
