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
import postSnakeReport from 'services/SnakeReport/postSnakeReport'
import { showMessage } from 'react-native-flash-message'
import * as Location from 'expo-location'

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
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnReport: {
    marginTop: 0,
    marginBottom: 0,
  },
})

const Report = ({ route, navigation }) => {
  const [valid, setValid] = useState(true)
  const { from } = route.params
  const { snakeInfo } = route.params
  const snakeSightingText = [styles.btnText, { color: colors.white }]
  const btnSnakeReportStyle = [
    buttonStyles.defaultButtonStyle,
    buttonStyles.mainButtonStyle,
    styles.btnReport,
  ]

  const reportSnakeSighting = async () => {
    const { status } = await Location.requestPermissionsAsync()
    if (status !== 'granted') {
      showMessage({
        message: 'Error!',
        description: 'Permission to access location was denied.',
        type: 'danger',
      })
      return
    }
    const location = await Location.getCurrentPositionAsync({})
    await postSnakeReport({
      request: route.params.snakeClassRequestId,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    })
      .then((resp) => {
        console.log('Reporting successful!')
        console.log(resp.data)
        showMessage({
          message: 'Success!',
          description: 'Your snake sighting report was submitted successfully!',
          type: 'success',
        })
      })
      .catch((error) => {
        console.log(error)
        showMessage({
          message: 'Error!',
          description:
            'Error occurred when trying to submit the sighting report. Please try again later.',
          type: 'danger',
        })
      })
  }

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
          <TouchableOpacity
            style={btnSnakeReportStyle}
            onPress={reportSnakeSighting}
          >
            <View style={styles.flexBox}>
              <View style={styles.leftIconStyle}>
                <FontAwesomeIcon
                  icon="exclamation-circle"
                  color={colors.white}
                  size={32}
                />
              </View>

              <View style={styles.midText}>
                <Text style={snakeSightingText}>Report snake sighting!</Text>
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.titleDetails}>{snakeInfo.name}</Text>
          <Text style={styles.subtitleDetails}>({snakeInfo.latin_name})</Text>
          <Text style={styles.descDetails}>{snakeInfo.description}</Text>
        </View>

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
      snakeClassRequestId: PropTypes.number,
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
      snakeClassRequestId: 0,
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
