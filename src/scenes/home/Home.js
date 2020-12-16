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
import { colors, images } from 'theme'
import Svg from 'components/Svg'
import { SvgUri, SvgXml } from 'react-native-svg'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  flexBox: {
    flexDirection: 'row',
    padding: 5,
    minWidth: 300,
    height: 70,
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
  title: {
    fontSize: 20,
    color: colors.white,
    marginBottom: 5,
  },
  desc: {
    fontSize: 10,
    color: colors.white,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 50,
  },
  button: {
    color: colors.white,
    backgroundColor: colors.orange,
    alignItems: 'center',
    minWidth: 200,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.orange,
    marginBottom: 50,
  },
})

const Home = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <Image style={styles.logo} source={images.logo_sm} />
    {/* <Text style={styles.title}>Home</Text> */}
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        navigation.navigate('Details', { from: 'Home' })
      }}
    >
      <View style={styles.flexBox}>
        <View style={styles.leftIconStyle}>
          <Image style={styles.iconStyle} source={images.camera} />
        </View>
        <View style={styles.midText}>
          <Text style={styles.title}>IDENTIFY SNAKES</Text>
          <Text style={styles.desc}>Came across a snake?</Text>
          <Text style={styles.desc}>
            Select its image and classify what it was
          </Text>
        </View>
        <View style={styles.rightIconStyle}>
          <Image style={styles.iconStyle} source={images.right_arrow} />
        </View>
      </View>
    </TouchableOpacity>
    {/* <Button */}
    {/*  title="Identify Snakes" */}
    {/*  color="white" */}
    {/*  backgroundColor={colors.orange} */}
    {/*  onPress={() => { */}
    {/*    navigation.navigate('Details', { from: 'Home' }) */}
    {/*  }} */}
    {/* /> */}
  </View>
)

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home
