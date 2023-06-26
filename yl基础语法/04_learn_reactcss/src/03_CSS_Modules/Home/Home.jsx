import React, { PureComponent } from 'react'
import homeStyle from './home.module.css'

export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <div className={homeStyle.title}>Home</div>
      </div>
    )
  }
}
