import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native'
import { colors } from 'theme'
import SnakeItem from 'components/SnakeItemList'
import { connect } from 'react-redux'
import snakesInfoReducer from 'modules/SnakesInfo.module'
import getSnakeInfoList from 'services/SnakeInfo/getSnakeInfoList'
// import SnakeInfo from 'services/SnakeInfo'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  main: {
    flex: 1,
  },
})

const SnakeList = ({ navigation }) => {
  const [getError, setGetError] = useState(null)
  const [itemList, setItemList] = useState([
    {
      id: 0,
      name: 'Asian vine snake',
      latin_name: 'Ahaetulla prasine',
      description: 'mildly venomous, non harmful to humans',
      image: {
        image: 'sample_snake',
      },
    },
    {
      id: 1,
      name: 'many-banded krait',
      latin_name: 'Bungarus multicinctus',
      description: 'venomous',
      image: {
        image: 'sample_snake',
      },
    },
    {
      id: 2,
      name: 'golden tree snake',
      latin_name: 'Chrysopelea ornate',
      description:
        'mildly venomous, not considered so dangerous to humans that require medical importance',
      image: {
        image: 'sample_snake',
      },
    },
    {
      id: 3,
      name: 'painted bronzeback',
      latin_name: 'Dendrelaphis pictus',
      description: 'non venomous',
      image: {
        image: 'sample_snake',
      },
    },
    {
      id: 4,
      name: 'common mock viper',
      latin_name: 'Psammodynastes pulverulentus',
      description: 'non venomous',
      image: {
        image: 'sample_snake',
      },
    },
    {
      id: 5,
      name: 'Indian rat snake',
      latin_name: 'Ptyas mucosa',
      description: 'non-venomous',
      image: {
        image: 'sample_snake',
      },
    },
    {
      id: 6,
      name: 'red-necked keelback',
      latin_name: 'Rhabdophis subminiatus',
      description: 'venomous',
      image: {
        image: 'sample_snake',
      },
    },
    {
      id: 7,
      name: 'white-lipped pit viper',
      latin_name: 'Trimeresurus albolabris',
      description: 'venomous',
      image: {
        image: 'sample_snake',
      },
    },
    {
      id: 8,
      name: 'Reticulated Python',
      latin_name: 'Malayopython reticulatus',
      description: 'non-venomous',
      image: {
        image: 'sample_snake',
      },
    },
  ])

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    getSnakeInfoList().then(
      (data) => {
        setItemList(data)
      },
      (err) => {
        setGetError(err)
      },
    )
  }, [])

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" />
      <FlatList
        data={itemList}
        renderItem={({ item }) => (
          <View style={styles.main}>
            <SnakeItem
              title={item.name}
              subtitle={item.latin_name}
              image={item.image}
              onPress={() => {
                navigation.navigate('Details', { snakeInfo: item })
              }}
            />
          </View>
        )}
      />
      <ScrollView style={styles.scrollView}>{/* {itemSetter} */}</ScrollView>
    </SafeAreaView>
  )
}

SnakeList.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

SnakeList.defaultProps = {
  navigation: { navigate: () => null },
}

export default connect(null, { SnakeList })(SnakeList)