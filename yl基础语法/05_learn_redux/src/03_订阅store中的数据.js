// const store = require('./store01')
// const store = require('./store02')
const store = require('./store03')

const unSubscribe = store.subscribe(() => {
  console.log('订阅数据的变化:', store.getState());
})

store.dispatch({type:'change_name', name: 'kobe'})
store.dispatch({type:'add_number', num: 50})

// unSubscribe()

store.dispatch({type:'change_name', name: 'yy'})
store.dispatch({type:'add_number', num: 350})