import React, { PureComponent } from 'react'
// import { connect } from 'react-redux'
import { addNumber } from "../store/features/counter"
import { connect } from '../hoc'

export class About extends PureComponent {

  addNumber(n) {
    this.props.addNumber(n)
  }

  render() {
    const { counter } = this.props
    return (
      <div>
        <h2>About Counter: { counter }</h2>
        <button onClick={e => this.addNumber(100)}>+100</button>
        <button onClick={e => this.addNumber(200)}>+200</button>
        <button onClick={e => this.addNumber(500)}>+500</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter

})

const mapDispatchToProps = (dispatch) => ({
  addNumber(n) {
    dispatch(addNumber(n))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(About)