import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { svgs } from 'theme/images'

const Svg = ({
  name, width, height, style,
}) => {
  const Icon = svgs[name]
  if (!Icon) return <Text>Not found!</Text>
  return <Icon />
}

Svg.propTypes = {
  name: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.shape({}),
}

Svg.defaultProps = {
  name: '',
  width: 40,
  height: 40,
  style: {},
}

export default Svg
