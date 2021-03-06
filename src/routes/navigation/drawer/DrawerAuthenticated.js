import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import DrawerMenu from './DrawerMenu'
import TabNavigator from '../tabs'
import { HomeNavigator, ProfileNavigator } from '../stacks'
import HeaderLeft from '../stacks/HeaderLeft'
import HeaderTitle from '../stacks/HeaderTitle'
import MapView from '../../../scenes/map'
import {
  ExpertClassificationNavigator,
  ImageCaptureNavigator,
  LogoutNavigator,
  MapViewNavigator,
  SnakeListNavigator,
} from '../stacks/Stacks'

const Drawer = createDrawerNavigator()

const DrawerMenuContainer = (props) => {
  const { state, ...rest } = props
  const newState = { ...state }
  // newState.routes = newState.routes.filter((item) => item.name !== 'Home')
  return (
    <DrawerContentScrollView {...props}>
      <DrawerMenu {...props} />
      <DrawerItemList state={newState} {...rest} />
    </DrawerContentScrollView>
  )
}
const DrawerNavigatorAuthenticated = () => (
  <Drawer.Navigator initialRouteName="Home" drawerContent={DrawerMenuContainer}>
    <Drawer.Screen
      name="Home"
      component={HomeNavigator}
      options={{
        drawerIcon: ({ size }) => <FontAwesomeIcon icon="home" size={size} />,
      }}
    />
    <Drawer.Screen
      name="Expert Classification"
      component={ExpertClassificationNavigator}
      options={{
        drawerIcon: ({ size }) => <FontAwesomeIcon icon="search" size={size} />,
      }}
    />

    <Drawer.Screen
      name="Identify Snakes"
      options={{
        drawerIcon: ({ size }) => <FontAwesomeIcon icon="camera" size={size} />,
      }}
      component={ImageCaptureNavigator}
    />

    <Drawer.Screen
      name="Snake List"
      component={SnakeListNavigator}
      options={{
        drawerIcon: ({ size }) => (
          <FontAwesomeIcon icon="info-circle" size={size} />
        ),
      }}
    />

    <Drawer.Screen
      name="Logout"
      component={LogoutNavigator}
      options={{
        drawerIcon: ({ size }) => (
          <FontAwesomeIcon icon="sign-out-alt" size={size} />
        ),
      }}
    />

    <Drawer.Screen
      name="Map View"
      component={MapViewNavigator}
      options={{
        drawerIcon: ({ size }) => <FontAwesomeIcon icon="map" size={size} />,
      }}
    />
  </Drawer.Navigator>
)

export default DrawerNavigatorAuthenticated
