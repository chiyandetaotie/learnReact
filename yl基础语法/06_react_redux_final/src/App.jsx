import React, { PureComponent } from 'react'
import Home from './pages/home'
import Profile from './pages/profile'
import About from './pages/about'
import Category from './pages/category'
import Category2 from './pages/category2'

import './style.css'
import store from './store'

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      // counter: 0
      counter: store.getState().counter.counter
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      const counter = store.getState().counter.counter
      this.setState({counter: counter})
    })
  }
  
  render() {
    const {counter} = this.state
    return (
      <div>
        <h2>App Counter: {counter}</h2>
        <hr/>
        <div className='pages'>
          <Home/>
          <hr/>
          <Profile/>
          <hr/>
          <About/>
          <hr/>
          <Category/>
          <hr/>
          <Category2/>
        </div>
      </div>
    )
  }
}
