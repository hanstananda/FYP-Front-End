import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import DrawerMenu from './DrawerMenu'
import TabNavigator from '../tabs'
import { HomeNavigator, ProfileNavigator } from '../stacks'
import HeaderLeft from '../stacks/HeaderLeft'
import HeaderTitle from '../stacks/HeaderTitle'
import MapView from '../../../scenes/map'
import {
  ImageCaptureNavigator,
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
const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home" drawerContent={DrawerMenuContainer}>
    <Drawer.Screen name="Home" component={HomeNavigator} />
    <Drawer.Screen name="Profile" component={ProfileNavigator} />
    <Drawer.Screen name="Snake List Navigator" component={SnakeListNavigator} />
    <Drawer.Screen
      name="MapView"
      component={MapViewNavigator}
      options={({ navigation }) => ({
        title: 'MapView',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Drawer.Screen name="Identify Snakes" component={ImageCaptureNavigator} />
  </Drawer.Navigator>
)

export default DrawerNavigator
