import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  TouchableOpacity, Text, View, Image,
} from 'react-native'
import { colors, images } from 'theme'

const styles = {
  root: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  flexBox: {
    flex: 1,
    flexDirection: 'row',
    minHeight: 70,
    borderBottomWidth: 1,
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 28,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  leftIconStyle: {
    flex: 0.15,
    alignItems: 'center', // Centered horizontally
    justifyContent: 'center', // Centered vertically
  },
  midText: {
    flex: 0.85,
    paddingLeft: 20,
    alignItems: 'flex-start',
    justifyContent: 'center', // Centered vertically
  },
}

const SnakeItem = ({
  title,
  image,
  color,
  backgroundColor,
  onPress,
  textStyle,
  style,
}) => {
  const [valid, setValid] = useState(true)
  const btnStyle = [styles.flexBox, { backgroundColor }, style]
  const txtStyle = [styles.text, { color }, textStyle]
  return (
    <TouchableOpacity onPress={onPress} style={btnStyle}>
      <View style={styles.flexBox}>
        <View style={styles.leftIconStyle}>
          <Image
            onError={() => setValid(false)}
            style={styles.image}
            source={{ uri: image.image }}
          />
        </View>

        <View style={styles.midText}>
          {title && <Text style={txtStyle}>{title}</Text>}
        </View>
      </View>
    </TouchableOpacity>
  )
}

SnakeItem.propTypes = {
  title: PropTypes.string,
  image: PropTypes.shape({
    image: PropTypes.string,
  }),
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  onPress: PropTypes.func,
  textStyle: PropTypes.shape({}),
  style: PropTypes.shape({}),
}

SnakeItem.defaultProps = {
  title: 'test',
  image: {
    image: 'sample_snake',
  },
  color: colors.blue,
  backgroundColor: 'auto',
  onPress: () => {},
  textStyle: {},
  style: {},
}

export default SnakeItem
