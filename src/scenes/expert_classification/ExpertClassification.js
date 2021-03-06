import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import Button from 'components/Button'
import { colors, images } from 'theme'
import { Picker } from '@react-native-picker/picker'
import { defaultSnakeList } from 'utils/store'
import { showMessage, hideMessage } from 'react-native-flash-message'
import getSnakeInfoList from '../../services/SnakeInfo/getSnakeInfoList'
import getRandomSnakeImage from '../../services/SnakeImage/getRandomSnakeImage'
import postSnakeClassify from '../../services/SnakeClassify/postSnakeClassify'
import postExpertClassify from '../../services/SnakeClassify/postExpertClassify'
import { UserProvider } from '../../utils/user-context'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  centeredContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop: 10,
    width: 300,
    height: 300,
    marginBottom: 15,
  },
  submitButton: {
    height: 50,
    minWidth: 300,
    backgroundColor: colors.blue,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
    textTransform: 'uppercase',
  },
  skipButton: {
    marginTop: 20,
    height: 50,
    minWidth: 300,
    backgroundColor: colors.orange,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
    textTransform: 'uppercase',
  },
  selectionItem: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  selectionMenu: {
    height: 80,
    minWidth: 300,
  },
})

const ExpertClassification = ({ route, navigation }) => {
  const [getError, setGetError] = useState(null)
  const [valid, setValid] = useState(true)
  const [item, setItem] = useState({})
  const [itemList, setItemList] = useState(defaultSnakeList)
  const [snakeSpeciesClassified, setSnakeSpeciesClassified] = useState(1)

  const getNewRandomSnakeImage = () => {
    getRandomSnakeImage().then(
      (data) => {
        setItem(data)
      },
      (err) => {
        setGetError(err)
      },
    )
  }

  const snakeSpeciesPickerList = itemList.map((s, i) => (
    <Picker.Item key={s.id} value={s.id} label={`${s.name}(${s.latin_name})`} />
  ))

  const expertSnakeClassify = async () => {
    const payload = {
      snake_image: item.id,
      classification: snakeSpeciesClassified,
    }
    console.log(payload)
    await postExpertClassify(payload)
      .then((resp) => {
        console.log('Manual species identification successfully sent!')
        console.log(resp.data)
        getNewRandomSnakeImage()
        showMessage({
          message: 'Success!',
          description:
            'Your species identification was submitted successfully!',
          type: 'success',
        })
      })
      .catch((error) => {
        console.log(error)
        showMessage({
          message: 'Error!',
          description:
            'Error occurred when trying to submit your species identification. Please try again later.',
          type: 'danger',
        })
      })
  }

  useEffect(() => {
    getNewRandomSnakeImage()
  }, [])

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <TouchableOpacity
          style={styles.skipButton}
          onPress={getNewRandomSnakeImage}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        <View style={styles.centeredContent}>
          <Image
            onError={() => setValid(false)}
            style={styles.logo}
            source={valid ? { uri: item.image } : images.logo_lg}
          />
        </View>
        <Picker
          selectedValue={snakeSpeciesClassified}
          style={styles.selectionMenu}
          dropdownIconColor="black"
          itemStyle={styles.selectionItem}
          onValueChange={(itemValue, itemIndex) => setSnakeSpeciesClassified(itemValue)}
        >
          {snakeSpeciesPickerList}
        </Picker>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={expertSnakeClassify}
        >
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

ExpertClassification.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

ExpertClassification.defaultProps = {
  navigation: { navigate: () => null },
}

export default ExpertClassification
