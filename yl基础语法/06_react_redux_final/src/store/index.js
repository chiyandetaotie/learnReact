import { createStore, compose, combineReducers} from 'redux'
import { log, thunk, applymiddleware } from "./middleware"
import counterReducer from './counter'
import userReducer from './user'
import homeReducer from './home'


const reducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  home: homeReducer
})

// combineReducers实现原理(了解)
// function reducer(state = {}, action) {
//   // 返回一个对象, store的state
//   return {
//     counter: counterReducer(state.counter, action),
//     home: homeReducer(state.home, action),
//     user: userReducer(state.user, action)
//   }
// }


// redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;
// const store = createStore(reducer)
const store = createStore(reducer, composeEnhancers())
applymiddleware(store, log, thunk)

export default store