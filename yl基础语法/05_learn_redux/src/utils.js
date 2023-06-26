const store = require('./store03')
const { changeNameAction, addNumberAction} = require('./store03/actionCreator')

store.dispatch(changeNameAction('yy'))
console.log(store.getState());