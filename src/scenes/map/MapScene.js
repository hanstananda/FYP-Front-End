import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native'
import { colors } from 'theme'

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
})

const MapScene = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.title}>MapView - Approval Pending</Text>
  </View>
)

MapScene.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

MapScene.defaultProps = {
  navigation: { navigate: () => null },
}

export default MapScene
