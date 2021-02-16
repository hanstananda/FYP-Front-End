import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from 'theme'
import Home from 'scenes/home'
import LoginProfile from 'scenes/profile'
import Details from 'scenes/snake_detail'
import SnakeList from 'scenes/snake_list'
import MapView from 'scenes/map'
import ImageCapture from 'scenes/image_capture'
import ExpertClassification from 'scenes/expert_classification'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'
import { UserContext } from '../../../utils/user-context'

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

const navigationProps = {
  headerTintColor: colors.black,
  headerStyle: { backgroundColor: colors.white },
  headerTitleStyle: { fontSize: 18 },
}

// ------------------------------------
// Navigators
// ------------------------------------

export const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={({ navigation }) => ({
        title: 'Home',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={({ navigation }) => ({
        title: 'Home',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="MapView"
      component={MapView}
      options={({ navigation }) => ({
        title: 'Home',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="SnakeList"
      component={SnakeList}
      options={({ navigation }) => ({
        title: 'Home',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="ImageCapture"
      component={ImageCapture}
      options={({ navigation }) => ({
        title: 'Home',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
  </Stack.Navigator>
)

export const ProfileNavigator = () => (
  <Stack.Navigator
    initialRouteName="Login"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Login"
      component={LoginProfile}
      options={({ navigation }) => ({
        title: 'Login',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={{
        title: 'Details',
      }}
    />
  </Stack.Navigator>
)

export const ExpertClassificationNavigator = () => (
  <Stack.Navigator
    initialRouteName="ExpertClassification"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="ExpertClassification"
      component={ExpertClassification}
      options={({ navigation }) => ({
        title: 'Expert Classification',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
  </Stack.Navigator>
)

export const LogoutNavigator = () => {
  const user = React.useContext(UserContext)
  user.setID(0)
  return ProfileNavigator()
}

export const SnakeListNavigator = () => (
  <Stack.Navigator
    initialRouteName="SnakeList"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="SnakeList"
      component={SnakeList}
      options={({ navigation }) => ({
        title: 'Snake List',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={{
        title: 'Details',
      }}
    />
  </Stack.Navigator>
)

export const MapViewNavigator = () => (
  <Stack.Navigator
    initialRouteName="MapView"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="MapView"
      component={MapView}
      options={({ navigation }) => ({
        title: 'Map View',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={{
        title: 'Details',
      }}
    />
  </Stack.Navigator>
)

export const ImageCaptureNavigator = () => (
  <Stack.Navigator
    initialRouteName="ImageCapture"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="ImageCapture"
      component={ImageCapture}
      options={({ navigation }) => ({
        title: 'Image Capture',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={{
        title: 'Details',
      }}
    />
  </Stack.Navigator>
)
