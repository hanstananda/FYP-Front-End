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
import { defaultSnakeList } from 'utils/store'
import { showMessage } from 'react-native-flash-message'
// import SnakeInfo from 'services/SnakeInfo'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: colors.white,
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
  const [itemList, setItemList] = useState(defaultSnakeList)

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    getSnakeInfoList().then(
      (data) => {
        setItemList(data)
      },
      (err) => {
        showMessage({
          message: 'Network Error!',
          description: 'Network error occurred when trying to fetch snake list',
          type: 'danger',
        })
        console.log(err)
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
