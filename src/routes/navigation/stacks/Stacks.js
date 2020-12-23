import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { colors } from 'theme'
import Home from 'scenes/home'
import Profile from 'scenes/profile'
import Details from 'scenes/details'
import SnakesList from 'scenes/snakes_guide'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'

const navigationProps = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: colors.white },
  headerTitleStyle: { fontSize: 18 },
}

export const HomeNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      titleCameraButton: 'Home',
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: ({ navigation }) => ({
      titleCameraButton: 'Details',
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
  SnakesList: {
    screen: SnakesList,
    navigationOptions: ({ navigation }) => ({
      titleCameraButton: 'SnakesList',
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
})

export const ProfileNavigator = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      titleCameraButton: 'Profile',
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: () => ({
      titleCameraButton: 'Details',
      ...navigationProps,
    }),
  },
})
