import React, { PureComponent } from 'react'
import store from '../store'
import { addNumberAction } from '../store/actionCreators'

export default class home extends PureComponent {
  constructor() {
    super()
    this.state = {
      counter: store.getState().counter,
      message: "Hello world",
      friends: [
        { id: 111, name: 'why01'},
        { id: 222, name: 'why02'},
        { id: 333, name: 'why03'}
      ],
      unSubscribe: null
    }
  }

  componentDidMount() {
    const unSubscribe = store.subscribe(() => {
      this.setState({counter: store.getState().counter})
    })
    this.setState({unSubscribe})
  }

  componentWillUnmount() {
    this.state.unSubscribe()
  }

  addNumber(num) {
    store.dispatch(addNumberAction(num))
  }

  render() {
    const { counter }= this.state
    return (
      <div>
        <h2>Home COunter: {counter}</h2>
        <div>
          <button onClick={e => this.addNumber(1)}>+1</button>
          <button onClick={e => this.addNumber(5)}>+5</button>
          <button onClick={e => this.addNumber(8)}>+8</button>
        </div>
      </div>
    )
  }
}
