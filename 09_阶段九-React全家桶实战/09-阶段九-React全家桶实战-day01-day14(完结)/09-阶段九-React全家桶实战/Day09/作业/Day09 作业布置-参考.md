# Day09 作业布置

## 一. 完成课堂所有的代码

- 重点
  - useEffect的基本使用
  - 常见的hooks
  - 自定义hook

## 二. 总结常见的Hooks，以及说明它们的作用。（重点state、effect）

- useState
  - 在函数组件中帮助我们想要保存的状态
  - 传入我们想要定义的数据
  - 返回一个数组,一个元素是我们定义的数组,可以在jsx中使用
  - 第二个元素是一个函数,调用这个函数可以设置新的数据,函数式组件会重新渲染
- useEffect
  - 在函数组件中可以让我实现在class组件中类似于生命周期的功能
  - 传入一个回调函数,这个函数会在更新完DOM后执行
  - 传入的回调函数可以返回一个函数,这个函数会在组件卸载时被调用
- useContext
  - 通过这个hook可以直接获取到某个context的值
  - 避免使用多个Context共享时存在的大量嵌套
  - 传入context对象 ---> 返回定义在context中定义的数据
- useReducer
  - 适合处理逻辑比较复杂的state,可以通过useReducer进行拆分
  - 本次修改的state需要依赖之前的state
  - 参数
    - 第一个参数是类似redux中reducer的纯函数,返回新的state
    - 第二个参数是我们想要定义的数据
  - 返回值
    - 数组类型
    - 第一个元素是我们定义的state
    - 第二个参数是函数dispatch,调用时可以传递一个对象action,这个action会传递到前面定义reducer

- useCallback
  - 参数
    - 第一个参数是回调函数
    - 第二个参数是依赖 ---> 数组类型
  - 返回值
    - 是一个函数,如果在依赖的数据没有变化的情况下,返回函数同一个对象
- useMemo
  - 参数
    - 第一个参数是回调函数
    - 第二个参数是依赖
  - 返回值
    - 是一个对象,如果在依赖的数据没有变化的情况下,返回同一个对象
- useRef
  - 用法
    - 引入DOM元素或者元素
    - 保存一个数据,返回一个对象,这个对象在整个生命周期中可以保持不变
- useImperativeHandle
- uselayoutEffect
  - useEffect会在渲染的内容更新到DOM上后执行,不会阻塞DOM的更新
  - useLayoutEffect会在渲染的内容更新到DOM上之前执行,会阻塞Dom的更新

## 三. useEffect在使用上有哪里方式和注意事项？

- 可以在同一个函数组件中多次使用useEffect
  - 好处 --->  可以将不同的代码逻辑拆分,不会像生命周期函数一样编写到一块
- 清除effect
  - 在useEffect中传入的回调函数可以返回一个函数
  - 这个函数会在组件卸载时被调用
- 性能优化
  - 第二个参数传入要依赖的数据,数组类型
  - 当依赖的数据没有发生变化时,useEffect中的回调函数不会执行

## 四. useMemo和useCallback有什么区别？

- useMemo
  - 返回值是一个对象
  - 可以实现useCallback一样的功能
- useCallback
  - 返回值是一个函数

## 五. 什么是闭包陷阱？如何解决出现的闭包陷阱？（面试题）

- 闭包陷阱
  - 函数在定义时,因为闭包的原因,会保留对外界变量引用的值,在后续函数多次调用时无法获取到最新的state的值,即使state的值已经改变
- 解决方案
  - 使用useRef每次render是都会返回 用一个引用类型的对象,我们设置值和读取值都可以在这个对象上处理,这样就能获取到最新的value值了
  - 更新State时在State中传入回调函数,回调函数里取到的值是最新的