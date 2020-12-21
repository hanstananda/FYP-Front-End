import React from 'react'
import PropTypes from 'prop-types'
import {
  TouchableOpacity, Text, View, Image,
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const styles = {
  root: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  flexBox: {
    flex: 1,
    flexDirection: 'row',
    minHeight: 50,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
  },
  leftIconStyle: {
    flex: 0.15,
    alignItems: 'center', // Centered horizontally
    justifyContent: 'center', // Centered vertically
  },
  midText: {
    flex: 0.85,
    paddingLeft: 20,
    alignItems: 'left', // Centered horizontally
    justifyContent: 'center', // Centered vertically
  },
}

const MenuOption = ({
  title,
  icon,
  color,
  backgroundColor,
  onPress,
  textStyle,
  style,
}) => {
  const btnStyle = [styles.root, { backgroundColor }, style]
  const txtStyle = [styles.text, { color }, textStyle]
  return (
    <TouchableOpacity onPress={onPress} style={btnStyle}>
      <View style={styles.flexBox}>
        <View style={styles.leftIconStyle}>
          <FontAwesomeIcon icon={icon} size={32} />
        </View>

        <View style={styles.midText}>
          {title && <Text style={txtStyle}>{title}</Text>}
        </View>
      </View>
    </TouchableOpacity>
  )
}

MenuOption.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  onPress: PropTypes.func,
  textStyle: PropTypes.shape({}),
  style: PropTypes.shape({}),
}

MenuOption.defaultProps = {
  title: null,
  icon: 'coffee',
  color: 'black',
  backgroundColor: 'auto',
  onPress: () => {},
  textStyle: {},
  style: {},
}

export default MenuOption
