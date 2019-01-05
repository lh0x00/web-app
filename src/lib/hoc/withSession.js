import React, { PureComponent } from 'react'

const withSession = (WrappedComponent: Component): Component => {
  class WrapperComponent extends PureComponent<PropsComponent, StateComponent> {
    static async getInitialProps(ctx: object): object {
      const { session } = ctx.req || {}
      return { session }
    }

    render() {
      const { props } = this

      return <WrappedComponent {...props} />
    }
  }

  WrapperComponent.displayName = 'withSession'
  return WrapperComponent
}

export default withSession
