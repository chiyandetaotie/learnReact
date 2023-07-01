import React, { PureComponent } from 'react'
import "./style.css"
import store from "./store"
import Home from './pages/home';
import Profile from './pages/profile';
import About from './pages/about';
import Category from './pages/category';
import Category2 from './pages/category2';

export default class App extends PureComponent {

  componentDidMount() {
    console.log(store.getState());

  }

  
  render() {
    return (
      <div>
        App
        <hr/>
        <div>
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
