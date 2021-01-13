import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native'
import Button from 'components/Button'
import { colors, images, buttonStyles } from 'theme'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: colors.white,
  },
  flexBox: {
    flexDirection: 'row',
    padding: 5,
  },
  leftIconStyle: {
    flex: 0.15,
    // backgroundColor: 'blue',
    alignItems: 'center', // Centered horizontally
    justifyContent: 'center', // Centered vertically
  },
  iconStyle: {
    height: 30,
    width: 30,
  },
  midText: {
    flex: 0.75,
    // backgroundColor: colors.blue,
    alignItems: 'center',
  },
  rightIconStyle: {
    flex: 0.1,
    // backgroundColor: 'red',
    alignItems: 'center', // Centered horizontally
    justifyContent: 'center', // Centered vertically
  },
  titleCameraButton: {
    fontSize: 20,
    color: colors.white,
    marginBottom: 2,
    textTransform: 'uppercase',
  },
  titleInfoButton: {
    fontSize: 20,
    color: colors.darkGreen,
    marginBottom: 2,
    textTransform: 'uppercase',
  },
  descCameraButton: {
    fontSize: 13,
    color: colors.white,
  },
  desInfoButton: {
    fontSize: 13,
    color: colors.darkGreen,
  },
  logo: {
    marginTop: 50,
    width: 150,
    height: 150,
    marginBottom: 50,
  },
})

const Home = ({ navigation }) => {
  const btnCameraStyle = [
    buttonStyles.defaultButtonStyle,
    buttonStyles.mainButtonStyle,
    {
      height: 80,
    },
  ]
  const btnInfoStyle = [
    buttonStyles.defaultButtonStyle,
    buttonStyles.altButtonStyle,
  ]
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Image style={styles.logo} source={images.logo_sm} />
      {/* <Text style={styles.title}>Home</Text> */}
      <TouchableOpacity
        style={btnCameraStyle}
        onPress={() => {
          navigation.navigate('ImageCapture', { from: 'Home' })
        }}
      >
        <View
          style={[
            styles.flexBox,
            {
              width: 350,
              height: 80,
            },
          ]}
        >
          <View style={styles.leftIconStyle}>
            <FontAwesomeIcon icon="camera" color={colors.white} size={32} />
          </View>
          <View style={styles.midText}>
            <Text style={styles.titleCameraButton}>IDENTIFY SNAKES</Text>
            <Text style={styles.descCameraButton}>Came across a snake?</Text>
            <Text style={styles.descCameraButton}>
              Select its image and classify what it was
            </Text>
          </View>
          <View style={styles.rightIconStyle}>
            <FontAwesomeIcon
              icon="chevron-right"
              color={colors.white}
              size={32}
            />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={btnInfoStyle}
        onPress={() => {
          navigation.navigate('SnakeList', { from: 'Home' })
        }}
      >
        <View
          style={[
            styles.flexBox,
            {
              width: 300,
              height: 70,
            },
          ]}
        >
          <View style={styles.leftIconStyle}>
            <FontAwesomeIcon
              icon="info-circle"
              color={colors.darkGreen}
              size={32}
            />
          </View>
          <View style={styles.midText}>
            <Text style={styles.titleInfoButton}>Snakes Guide</Text>
            <Text style={styles.desInfoButton}>Learn more about snakes</Text>
          </View>
          <View style={styles.rightIconStyle}>
            <FontAwesomeIcon
              icon="chevron-right"
              color={colors.darkGreen}
              size={32}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home
