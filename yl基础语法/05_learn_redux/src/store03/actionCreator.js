const { ADD_NUMBER, CHANGE_NAME } = require('./constants')


const changeNameAction = (name) => {
  return {
    type: CHANGE_NAME,
    name
  }
}

const addNumberAction = (num) => ({
  type: ADD_NUMBER,
  num
})

module.exports = {
  changeNameAction,
  addNumberAction
}