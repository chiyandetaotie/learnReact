import React, { PureComponent } from 'react'
import { Link, Outlet } from 'react-router-dom'

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home Page</h2>
        <div className='home-nav'>
          <Link to="/home/recommend">推荐</Link>
          <Link to="/home/ranking">排行榜</Link>

        </div>
        {/* 占位的组件 */}
        <Outlet/>
      </div>
    )
  }
}
