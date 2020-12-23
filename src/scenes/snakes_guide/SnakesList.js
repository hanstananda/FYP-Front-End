import React from 'react'
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
import MenuOption from '../../components/MenuOption'

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

const itemList = {
  items: [
    {
      id: 0,
      name: 'test1',
      description: 'test1111',
      image: 'sample_snake',
      key: 'test1',
    },
    {
      id: 1,
      name: 'test2',
      description: 'test222',
      image: 'sample_snake',
      key: 'test2',
    },
  ],
}

const SnakesList = ({ navigation }) => (
  <SafeAreaView style={styles.root}>
    <StatusBar barStyle="light-content" />
    <FlatList
      data={itemList.items}
      renderItem={({ item }) => (
        <View style={styles.main}>
          <SnakeItem title={item.name} image={item.image} />
        </View>
      )}
    />
    <ScrollView style={styles.scrollView}>{/* {itemSetter} */}</ScrollView>
  </SafeAreaView>
)

SnakesList.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

SnakesList.defaultProps = {
  navigation: { navigate: () => null },
}

export default SnakesList
