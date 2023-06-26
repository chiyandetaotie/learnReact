const store = require('./store03')
const { changeNameAction, addNumberAction } = require('./store03/actionCreator')

const unSubcribe = store.subscribe(() => {
  console.log(store.getState());
}) 


store.dispatch(changeNameAction('kobe'))
store.dispatch(addNumberAction(66))

