export default function applymiddleware(store, ...funs) {
  funs.forEach(fun => {
    fun(store)
  })

}