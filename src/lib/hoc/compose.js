const compose = (...rest: any): Component => (
  WrappedComponent: Component,
): Component => {
  const hocs = rest || []
  const WrapperComponent = hocs.reduce(
    (Component, hoc) => hoc(Component),
    WrappedComponent,
  )

  return WrapperComponent
}

export default compose
