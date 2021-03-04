import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar, Dimensions,
} from 'react-native'
import { colors } from 'theme'
import MapView, { Marker } from 'react-native-maps'
import getSnakeInfoList from '../../services/SnakeInfo/getSnakeInfoList'
import { logout } from '../../modules/app.module'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})

const MapScene = ({ navigation }) => {
  useEffect(() => {
    logout()
  }, [])
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <MapView
        initialRegion={{
          latitude: 1.29,
          longitude: 103.85,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={styles.map}
      >
        <Marker
          coordinate={{ latitude: 1.35, longitude: 103.68 }}
          title="Asian Vine Snake"
          description="Not that dangerous"
        />
      </MapView>

      {/* <Text style={styles.title}>MapView - Pending Request Approval</Text> */}
    </View>
  )
}

MapScene.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

MapScene.defaultProps = {
  navigation: { navigate: () => null },
}

export default MapScene
