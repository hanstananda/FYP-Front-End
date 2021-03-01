import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import store from 'utils/store'
import 'utils/ignore'

// Icons
// import { fab } from '@fortawesome/free-brands-svg-icons'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

// assets
import { imageAssets } from 'theme/images'
import { fontAssets } from 'theme/fonts'
import Constants from 'expo-constants'
import FlashMessage from 'react-native-flash-message'
import Router from './routes'
import { UserProvider } from './utils/user-context'

library.add(far, fas)

// axios

const axios = require('axios').default
/*
https://docs.expo.io/guides/environment-variables/
For security reasons, only the variables that starts with REACT_NATIVE_ or EXPO_ are available.
*/
// console.log(process.env.EXPO_BACKEND_URL)

// axios.defaults.baseURL = process.env.EXPO_BACKEND_URL;
axios.defaults.baseURL = 'http://34.126.78.113:8080'

console.log('Default base url is ', axios.defaults.baseURL)

const App = () => {
  // state
  const [didLoad, setDidLoad] = useState(false)

  // handler
  const handleLoadAssets = async () => {
    // assets preloading
    await Promise.all([...imageAssets, ...fontAssets])
    setDidLoad(true)
  }

  // lifecycle
  useEffect(() => {
    handleLoadAssets()
  }, [])

  // rendering
  if (!didLoad) return <View />
  return (
    <Provider store={store}>
      <UserProvider>
        <Router />
        <FlashMessage position="bottom" />
      </UserProvider>
    </Provider>
  )
}

export default App
