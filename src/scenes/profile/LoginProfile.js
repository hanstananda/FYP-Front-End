import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native'
import Button from 'components/Button'
import { colors, images } from 'theme'
import axios from 'axios'
import { showMessage } from 'react-native-flash-message'
import postLogin from '../../services/Auth'
import { actions, authenticate } from '../../modules/app.module'
import Connector from '../../utils/connector'

import { UserContext } from '../../utils/user-context'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  formInput: {
    height: 50,
    minWidth: 250,
    borderColor: colors.blue,
    borderWidth: 1,
    borderRadius: 25,
    paddingLeft: 20,
    marginBottom: 20,
  },
  loginButton: {
    height: 50,
    minWidth: 250,
    backgroundColor: colors.blue,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
    textTransform: 'uppercase',
  },
  logo: {
    marginTop: 50,
    width: 150,
    height: 150,
    marginBottom: 50,
  },
})

const LoginProfile = ({ navigation }) => {
  const [username, onChangeUsername] = React.useState('Username')
  const [password, onChangePassword] = React.useState('Password')
  const user = React.useContext(UserContext)

  const login = async () => {
    console.log('Login pressed!')
    await postLogin({
      username,
      password,
    })
      .then((resp) => {
        console.log('Login successful!')
        console.log(resp.data)
        axios.defaults.headers.common.Authorization = `Token ${resp.data.token}`
        user.setID(resp.data.user_id)
        // authenticate(resp.data.token)
        // setToken(resp.data.token)
      })
      .catch((error) => {
        if (error.response) {
          showMessage({
            message: 'Login Error!',
            description: 'invalid credentials entered',
            type: 'danger',
          })
        } else {
          showMessage({
            message: 'Login Error!',
            description: 'Unknown error occurred when trying to login',
            type: 'danger',
          })
        }
        console.log(error)
      })
  }

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Image style={styles.logo} source={images.logo_sm} />
      {/* <Text style={styles.title}>Profile</Text> */}
      <TextInput
        style={styles.formInput}
        placeholder="Username"
        onChangeText={(text) => onChangeUsername(text)}
        // value={username}
      />
      <TextInput
        style={styles.formInput}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => onChangePassword(text)}
        // value={password}
      />
      <TouchableOpacity style={styles.loginButton} onPress={login}>
        {/* <View  style={styles.loginButton}> */}
        <Text style={styles.loginText}>Login</Text>
        {/* </View> */}
      </TouchableOpacity>
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

LoginProfile.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

LoginProfile.defaultProps = {
  navigation: { navigate: () => null },
}

export default LoginProfile
