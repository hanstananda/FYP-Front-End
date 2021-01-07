import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import store from 'utils/store'
import 'utils/ignore'

// Icons
// import { fab } from '@fortawesome/free-brands-svg-icons'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

// assets
import { imageAssets } from 'theme/images'
import { fontAssets } from 'theme/fonts'
import Constants from 'expo-constants'
import Router from './routes'

library.add(fas)

// axios

const axios = require('axios').default
/*
https://docs.expo.io/guides/environment-variables/
For security reasons, only the variables that starts with REACT_NATIVE_ or EXPO_ are available.
*/
// console.log(process.env.EXPO_BACKEND_URL)

// axios.defaults.baseURL = process.env.EXPO_BACKEND_URL;
axios.defaults.baseURL = 'http://192.168.0.100:8000'

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
      <Router />
    </Provider>
  )
}

export default App
