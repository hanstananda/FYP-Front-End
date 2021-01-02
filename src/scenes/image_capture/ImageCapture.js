import React, { useState, useEffect } from 'react'
import {
  Button,
  Image,
  View,
  Platform,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import PropTypes from 'prop-types'
import { buttonStyles, colors } from '../../theme'

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
  },
  leftIconStyle: {
    flex: 0.15,
    alignItems: 'center', // Centered horizontally
    justifyContent: 'center', // Centered vertically
  },
  iconStyle: {
    height: 30,
    width: 30,
  },
  midText: {
    flex: 0.75,
    alignItems: 'center',
  },
})

const ImageCapture: React.FC = ({ navigation }) => {
  const [image, setImage] = useState(null)
  const btnImageCaptureStyle = [
    buttonStyles.defaultButtonStyle,
    buttonStyles.altButtonStyle,
  ]

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!')
        }
      }
    })()
  }, [])

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    })

    console.log(result)

    if (!result.cancelled) {
      setImage(result.uri)
    }
  }

  return (
    <View style={styles.root}>
      <TouchableOpacity style={btnImageCaptureStyle} onPress={pickImage}>
        <View>
          <Text>Pick an image from camera roll</Text>
        </View>
      </TouchableOpacity>
      {image && (
        <Image source={{ uri: image }} style={{ width: 224, height: 224 }} />
      )}
    </View>
  )
}

ImageCapture.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }),
}

ImageCapture.defaultProps = {
  navigation: {
    dispatch: () => null,
  },
}

export default ImageCapture
