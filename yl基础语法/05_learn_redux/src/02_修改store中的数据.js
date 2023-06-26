const store = require('./store01')

console.log('01: ', store.getState());


// 修改store中的数据: 必须action
const nameAction = {type: 'change_name', name: 'kobe'}
store.dispatch(nameAction)
console.log('02: ', store.getState());



const counterAction = {type: 'add_number', num: 22}
store.dispatch(counterAction)
console.log('03: ', store.getState());