const { createStore } = require('redux')

const initialState = {
  name: 'why',
  counter: 100
}

// 定义reducer函数：纯函数
// 两个参数
// 参数一：store 中目前保存的 state
// 参数二: 本次需要更新的 action (dispatch 传入的 action)
// 返回值: 它的返回值会作为store之后存储的state
function reducer (state = initialState, action) {
  switch(action.type) {
    case 'change_name':
      return { ...state, name: action.name}
    case 'add_number':
      return {...state, counter: state.counter + action.num}
    default:
      return state
  }

}

const store = createStore(reducer)

module.exports = store
