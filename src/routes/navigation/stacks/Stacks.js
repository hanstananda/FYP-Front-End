import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from 'theme'
import Home from 'scenes/home'
import Profile from 'scenes/profile'
import Details from 'scenes/snake_detail'
import SnakeList from 'scenes/snake_list'
import MapView from 'scenes/map'
import ImageCapture from 'scenes/image_capture'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

const navigationProps = {
  headerTintColor: 'white',
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

// export const HomeNavigator = createStackNavigator({
//   Home: {
//     screen: Home,
//     navigationOptions: ({ navigation }) => ({
//       titleCameraButton: 'Home',
//       headerLeft: <HeaderLeft navigation={navigation} />,
//       headerTitle: <HeaderTitle />,
//       ...navigationProps,
//     }),
//   },
//   Details: {
//     screen: Details,
//     navigationOptions: ({ navigation }) => ({
//       titleCameraButton: 'Details',
//       headerLeft: <HeaderLeft navigation={navigation} />,
//       headerTitle: <HeaderTitle />,
//       ...navigationProps,
//     }),
//   },
//   MapView: {
//     screen: MapView,
//     navigationOptions: ({ navigation }) => ({
//       titleCameraButton: 'MapView',
//       headerLeft: <HeaderLeft navigation={navigation} />,
//       headerTitle: <HeaderTitle />,
//       ...navigationProps,
//     }),
//   },
//   SnakeList: {
//     screen: SnakeList,
//     navigationOptions: ({ navigation }) => ({
//       titleCameraButton: 'SnakeList',
//       headerLeft: <HeaderLeft navigation={navigation} />,
//       headerTitle: <HeaderTitle />,
//       ...navigationProps,
//     }),
//   },
//   ImageCapture: {
//     screen: ImageCapture,
//     navigationOptions: ({ navigation }) => ({
//       titleCameraButton: 'ImageCapture',
//       headerLeft: <HeaderLeft navigation={navigation} />,
//       headerTitle: <HeaderTitle />,
//       ...navigationProps,
//     }),
//   },
// })

export const ProfileNavigator = () => (
  <Stack.Navigator
    initialRouteName="Profile"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={({ navigation }) => ({
        title: 'Profile',
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
