import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar, TextInput,
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  formInput: {
    height: 40,
    minWidth: 250,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 25,
  },
})

const Profile = ({ navigation }) => {
  const [value, onChangeText] = React.useState('Useless Placeholder')

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Profile</Text>
      <TextInput
        style={styles.formInput}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      {/* <Button */}
      {/*  title="Go to Details" */}
      {/*  color="white" */}
      {/*  backgroundColor={colors.lightPurple} */}
      {/*  onPress={() => { */}
      {/*    navigation.navigate('SnakeList', { from: 'Profile' }) */}
      {/*  }} */}
      {/* /> */}
    </View>
  )
}

Profile.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

Profile.defaultProps = {
  navigation: { navigate: () => null },
}

export default Profile
