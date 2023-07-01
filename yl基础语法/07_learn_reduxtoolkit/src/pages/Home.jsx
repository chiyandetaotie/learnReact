import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { addNumber } from '../store/features/counter'
import { fetchHomeMultidataAction } from '../store/features/home'

export class Home extends PureComponent {

  componentDidMount() {
    this.props.fetchHomeMultidataAct({name: 'aaa', age: 111})
  }

  addNumber(n) {
    this.props.addNumber(n)
  }
  
  render() {
    const { counter } = this.props

    return (
      <div>
        <h2>Home Counter: {counter}</h2>
        <button onClick={e => this.addNumber(1)}>+1</button>
        <button onClick={e => this.addNumber(5)}>+5</button>
        <button onClick={e => this.addNumber(10)}>+10</button>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  banners: state.home.banners,
  recommends: state.home.resommends
})

const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumber(num))
  },

  fetchHomeMultidataAct(obj) {
    dispatch(fetchHomeMultidataAction(obj))
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
