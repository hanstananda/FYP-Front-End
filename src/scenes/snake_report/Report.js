import React, { useState } from 'react'
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
import { buttonStyles, colors, images } from 'theme'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
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
  titleDetails: {
    fontSize: 28,
    color: colors.blue,
    marginBottom: 5,
  },
  subtitleDetails: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
  },
  descDetails: {
    margin: 10,
    padding: 10,
    fontSize: 16,
    textAlign: 'justify',
    color: colors.black,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnReport: {
    marginTop: 15,
  },
})

const Report = ({ route, navigation }) => {
  const [valid, setValid] = useState(true)
  const { from } = route.params
  const { snakeInfo } = route.params
  console.log(route.params.from)
  const cameraTextStyle = [styles.btnText, { color: colors.orange }]
  const btnSnakeReportStyle = [
    buttonStyles.defaultButtonStyle,
    buttonStyles.altButtonStyle2,
    styles.btnReport,
  ]

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        <StatusBar barStyle="light-content" />
        <View style={styles.centeredContent}>
          <Image
            onError={() => setValid(false)}
            style={styles.logo}
            source={valid ? { uri: snakeInfo.image.image } : images.logo_lg}
          />
          <Text style={styles.titleDetails}>{snakeInfo.name}</Text>
          <Text style={styles.subtitleDetails}>({snakeInfo.latin_name})</Text>
        </View>
        <Text style={styles.descDetails}>{snakeInfo.description}</Text>
        <TouchableOpacity style={btnSnakeReportStyle} onPress={() => {}}>
          <View style={styles.flexBox}>
            <View style={styles.leftIconStyle}>
              <FontAwesomeIcon
                icon="exclamation-circle"
                color={colors.orange}
                size={32}
              />
            </View>

            <View style={styles.midText}>
              <Text style={cameraTextStyle}>Report Snake sighting!</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* <Text style={styles.title}>{`Details (from ${from})`}</Text> */}
        {/* <Button */}
        {/*  title="Go Back" */}
        {/*  color="white" */}
        {/*  backgroundColor={colors.pink} */}
        {/*  onPress={() => { */}
        {/*    navigation.goBack() */}
        {/*  }} */}
        {/* /> */}
      </ScrollView>
    </SafeAreaView>
  )
}

Report.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      from: PropTypes.string,
      snakeInfo: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        latin_name: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.shape({
          image: PropTypes.string,
        }),
      }),
    }),

    goBack: PropTypes.func,
  }),
  navigation: PropTypes.shape({}),
}

Report.defaultProps = {
  route: {
    params: {
      from: '',
      snakeInfo: {
        id: 0,
        name: 'Asian vine snake',
        latin_name: 'Ahaetulla prasine',
        description: 'mildly venomous, non harmful to humans',
        image: {
          image: 'sample_snake',
        },
      },
    },
  },
  navigation: {
    state: {
      params: {},
    },
    goBack: () => null,
  },
}

export default Report
