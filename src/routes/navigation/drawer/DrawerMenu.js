import React from 'react'
import PropTypes from 'prop-types'
import { View, SafeAreaView, Text } from 'react-native'
import { DrawerActions } from 'react-navigation-drawer'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from 'theme'
import MenuOption from 'components/MenuOption'

const styles = {
  root: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  head: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  main: {
    // flexDirection: 'column',
    // justifyContent: 'center',
  },
}

const DrawerMenu = ({ navigation }) => (
  <SafeAreaView style={styles.root}>
    <View style={styles.head}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>By Hans Tananda</Text>
      {/* <FontIcon.Button */}
      {/*  name="times" */}
      {/*  size={20} */}
      {/*  color={colors.gray} */}
      {/*  backgroundColor="white" */}
      {/*  onPress={() => { */}
      {/*    navigation.dispatch(DrawerActions.closeDrawer()) */}
      {/*  }} */}
      {/* /> */}
    </View>
    {/* <Text>Drawer Menu</Text> */}
    <View style={styles.main}>
      <MenuOption
        title="Home"
        icon="home"
        onPress={() => {
          navigation.navigate('Home')
        }}
      />
      <MenuOption
        title="Map View"
        icon="map"
        onPress={() => {
          navigation.navigate('MapView', { from: 'Map View' })
        }}
      />
      <MenuOption
        title="Snakes Guide"
        icon="info-circle"
        onPress={() => {
          navigation.navigate('SnakesList', { from: 'Snakes Guide' })
        }}
      />
      <MenuOption
        title="Identify Snakes"
        icon="camera"
        onPress={() => {
          navigation.navigate('ImageCapture', { from: 'Identify Snakes' })
        }}
      />
      <MenuOption
        title="Sign In"
        icon="sign-in-alt"
        onPress={() => {
          navigation.navigate('Details', { from: 'Sign In' })
        }}
      />
    </View>
  </SafeAreaView>
)

DrawerMenu.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }),
}

DrawerMenu.defaultProps = {
  navigation: {
    dispatch: () => null,
  },
}

export default DrawerMenu
