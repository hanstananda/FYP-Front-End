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
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import postSnakeImage from 'services/SnakeImage/postSnakeImage'
import { buttonStyles, colors } from '../../theme'
import postSnakeClassify from '../../services/SnakeClassify/postSnakeClassify'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  topButton: {
    marginTop: 30,
    marginBottom: 20,
  },
  flexBox: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    maxWidth: 300,
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
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})

const ImageCapture: React.FC = ({ navigation }) => {
  const [image, setImage] = useState(null)
  const [snakeClass, setSnakeClass] = useState(0)
  const btnImageFromFileStyle = [
    buttonStyles.defaultButtonStyle,
    buttonStyles.altButtonStyle,
    styles.topButton,
  ]
  const btnImageCaptureStyle = [
    buttonStyles.defaultButtonStyle,
    buttonStyles.mainButtonStyle,
    styles.topButton,
  ]
  const folderTextStyle = [styles.text, { color: colors.darkGreen }]
  const cameraTextSTyle = [styles.text, { color: colors.white }]

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

    // console.log(result)

    if (!result.cancelled) {
      setImage(result.uri)
    }
  }

  const sendImage = async () => {
    const formData = new FormData()

    // ImagePicker saves the taken photo to disk and returns a local URI to it
    const localUri = image
    const filename = localUri.split('/').pop()

    // Infer the type of the image
    const match = /\.(\w+)$/.exec(filename)
    const type = match ? `image/${match[1]}` : 'image'

    formData.append('image', { uri: localUri, name: filename, type })

    let id = 0

    // console.log(formData)
    await postSnakeImage(formData)
      .then((resp) => {
        console.log('Image upload successful!')
        id = resp.data.id
      })
      .catch((error) => {
        console.log(error.response.data.error)
      })

    await postSnakeClassify({
      snake_image: id,
    })
      .then((resp) => {
        console.log('Classification successful!')
        console.log(resp.data)
        setSnakeClass(resp.data.classification)
      })
      .catch((error) => {
        console.log(error.response.data.error)
      })
  }

  return (
    <View style={styles.root}>
      <TouchableOpacity style={btnImageFromFileStyle} onPress={pickImage}>
        <View style={styles.flexBox}>
          <View style={styles.leftIconStyle}>
            <FontAwesomeIcon icon="folder" color={colors.darkGreen} size={32} />
          </View>

          <View style={styles.midText}>
            <Text style={folderTextStyle}>Select from Files</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Image source={{ uri: image }} style={{ width: 299, height: 299 }} />
      {image && (
        <TouchableOpacity style={btnImageCaptureStyle} onPress={sendImage}>
          <View style={styles.flexBox}>
            <View style={styles.leftIconStyle}>
              <FontAwesomeIcon icon="camera" color={colors.white} size={32} />
            </View>

            <View style={styles.midText}>
              <Text style={cameraTextSTyle}>Classify Snake!</Text>
            </View>
          </View>
        </TouchableOpacity>
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
