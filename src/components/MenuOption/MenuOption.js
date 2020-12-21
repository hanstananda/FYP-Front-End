import React from 'react'
import PropTypes from 'prop-types'
import {
  TouchableOpacity, Text, View, Image,
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const styles = {
  root: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    flex: 1,
  },
  flexBox: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
}

const MenuOption = ({
  title,
  width,
  height,
  color,
  backgroundColor,
  onPress,
  children,
  textStyle,
  style,
}) => {
  const btnStyle = [styles.root, { width, height, backgroundColor }, style]
  const txtStyle = [styles.text, { color }, textStyle]
  return (
    <TouchableOpacity onPress={onPress} style={btnStyle}>
      <View>
        <View style={styles.leftIconStyle}>
          <FontAwesomeIcon icon={faCoffee} />
        </View>
        {/* <View style={styles.midText}> */}
        {/*  <Text style={styles.titleCameraButton}>IDENTIFY SNAKES</Text> */}
        {/*  <Text style={styles.descCameraButton}>Came across a snake?</Text> */}
        {/*  <Text style={styles.descCameraButton}> */}
        {/*    Select its image and classify what it was */}
        {/*  </Text> */}
        {/* </View> */}
      </View>

      {title && <Text style={txtStyle}>{title}</Text>}
      {children}
    </TouchableOpacity>
  )
}

MenuOption.propTypes = {
  title: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  onPress: PropTypes.func,
  children: PropTypes.string,
  textStyle: PropTypes.shape({}),
  style: PropTypes.shape({}),
}

MenuOption.defaultProps = {
  title: null,
  width: 'auto',
  height: 'auto',
  color: 'black',
  backgroundColor: '#cacaca',
  onPress: () => {},
  children: null,
  textStyle: {},
  style: {},
}

export default MenuOption
