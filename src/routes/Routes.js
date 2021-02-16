import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import Connector from 'utils/connector'
import Main from './navigation'
import MainAuth from './navigationAuth'
import { UserContext } from '../utils/user-context'

const Routes = ({ actions, checked, loggedIn }) => {
  const user = React.useContext(UserContext)

  useEffect(() => {
    // actions.authenticate()
  }, [])

  // TODO: switch router by loggedIn state
  console.log('[##] loggedIn', loggedIn)

  // rendering
  // if (!checked) return <Text>Loading...</Text>
  if (user.id !== 0) {
    return <MainAuth />
  }
  return <Main />
}

Routes.propTypes = {
  actions: PropTypes.shape({
    authenticate: PropTypes.func,
  }),
  checked: PropTypes.bool,
  loggedIn: PropTypes.bool,
}

Routes.defaultProps = {
  actions: {
    authenticate: () => null,
  },
  checked: false,
  loggedIn: false,
}

export default (props) => (
  <Connector>
    {({ actions, state: { app } }) => (
      <Routes actions={actions.app} {...app} {...props} />
    )}
  </Connector>
)
