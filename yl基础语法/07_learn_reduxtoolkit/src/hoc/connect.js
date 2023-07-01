import { PureComponent } from "react";
import { StoreContext } from "./StoreContext";

export const connect = (mapStateToProps, mapDispatchToProps) => {
  return (WrapperComponent) => {
    class NewComponent extends PureComponent{
      constructor(props, context) {
        super(props)

        this.state = mapStateToProps(context.getState())
      }

      componentDidMount() {
        this.unSubscribe = this.context.subscribe(() => {
          this.setState(mapStateToProps(this.context.getState()))

        })

      }
      componentWillUnmount() {
        this.unSubscribe()
      }

      render() {
        const stateObj = mapStateToProps(this.context.getState())
        const dispatchObj = mapDispatchToProps(this.context.dispatch)
        return <WrapperComponent {...this.props} {...stateObj} {...dispatchObj}/>
      }
    }

    NewComponent.contextType = StoreContext
    return NewComponent
  }
}



