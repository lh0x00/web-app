import React, { PureComponent } from 'react'
import compose from 'lib/hoc/compose'
import withSession from 'lib/hoc/withSession'

class Home extends PureComponent<PropsComponent, StateComponent> {
  render() {
    return (
      <div>
        <div>welcome to home!</div>
      </div>
    )
  }
}

export default compose(withSession)(Home)
