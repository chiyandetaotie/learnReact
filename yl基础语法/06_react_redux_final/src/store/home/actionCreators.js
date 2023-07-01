import * as actionTypes from './constants'
import axios from "axios"


export const changeBannersAction = (banners) => ({
  type: actionTypes.CHANGE_BANNERS,
  banners
})

export const changeRecommendsAction = (recommends) => ({
  type: actionTypes.CHANGE_RECOMMENDS,
  recommends
})

export const fetchHomeMultidataAction = () => {
  return function(dispacth, getState) {
    axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list

      dispacth(changeBannersAction(banners))
      dispacth(changeRecommendsAction(recommends))
    })
  }

}