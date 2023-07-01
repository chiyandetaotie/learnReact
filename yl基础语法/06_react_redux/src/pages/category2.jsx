import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchHomeMultidataAction } from '../store/actionCreators'

export class Category2 extends PureComponent {
  render() {
    const { counter, banners, recommends } = this.props
    return (
      <div>
        <h2>Category2 Counter: {counter}</h2>
        <div className='banners'>
          <h2>轮播图数据:</h2>
          <ul>
            {
              banners.map((item, index) => {
                return(<li key={index}> {item.title} </li>)
              })
            }
          </ul>
        </div>
        <div className='recommends'>
          <h2>推荐数据:</h2>
          <ul>
            {
              recommends.map((item, index) => {
                return(<li key={index}> {item.title} </li>)
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  counter: state.counter,
  banners: state.banners,
  recommends: state.recommends
})

const mapDispatchToProps = (dispatch) => ({
  fecthData() {
    dispatch(fetchHomeMultidataAction())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Category2)