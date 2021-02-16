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
import getSnakeInfoList from '../../services/SnakeInfo/getSnakeInfoList'
import getRandomSnakeImage from '../../services/SnakeImage/getRandomSnakeImage'

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
    minWidth: 250,
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
    height: 50,
    minWidth: 250,
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
})

const ExpertClassification = ({ route, navigation }) => {
  const [getError, setGetError] = useState(null)
  const [valid, setValid] = useState(true)
  const [item, setItem] = useState({})
  const [itemList, setItemList] = useState(defaultSnakeList)
  const [snakeSpeciesClassified, setSnakeSpeciesClassified] = useState(
    'None selected',
  )

  const snakeSpeciesPickerList = itemList.map((s, i) => <Picker.Item key={s.id} value={s.name} label={s.name} />)

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

  useEffect(() => {
    getNewRandomSnakeImage()
  }, [])

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />

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
        style={{ height: 50, width: 200 }}
        onValueChange={(itemValue, itemIndex) => setSnakeSpeciesClassified(itemValue)}
      >
        {snakeSpeciesPickerList}
      </Picker>

      <TouchableOpacity style={styles.submitButton} onPress={() => {}}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

ExpertClassification.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

ExpertClassification.defaultProps = {
  navigation: { navigate: () => null },
}

export default ExpertClassification
