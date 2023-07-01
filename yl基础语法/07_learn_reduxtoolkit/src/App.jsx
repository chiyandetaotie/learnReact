import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import "./style.css"

import Profile from './pages/profile'
import Home from './pages/Home'
import About from './pages/About'

export class App extends PureComponent {
  render() {
    const { counter } = this.props
    return (
      <div>
        <h2>App Counter: {counter}</h2>
        <div className='pages'>
          <Home/>
          <Profile/>
          <About/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter
})
export default connect(mapStateToProps)(App)