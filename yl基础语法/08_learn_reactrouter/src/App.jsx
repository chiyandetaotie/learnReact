import React, { PureComponent } from 'react'
import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom'

import Home from './pages/Home'
import HomeRecommend from "./pages/HomeRecommend"
import HomeRanking from "./pages/HomeRanking"
import About from "./pages/About"
import Login from "./pages/Login"
import Category from "./pages/Category"
import Order from "./pages/Order"
import NotFound from './pages/NotFound'

export default class App extends PureComponent {
  // navigeteTo(path) {
  //   console.log(path);
  //   const navigate = useNavigate()
  //   navigate(path)
  // }

  render() {
    return (
      <div className='app'>
        <div className="header"></div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />}/>
            <Route path="/home" element={<Home/>}>
              <Route path="/home" element={<Navigate to="/home/recommend"/>}/>
              <Route path="/home/recommend" element={<HomeRecommend/>}/>
              <Route path="/home/ranking" element={<HomeRanking/>}/>

            </Route>
          </Routes>
        </div>
        <div className="footer">
          <hr/>
          Footer
        </div>
      </div>
    )
  }
}
