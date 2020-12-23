import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native'
import Button from 'components/Button'
import { colors, images } from 'theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.lightGrayPurple,
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
})

const Details = ({ navigation }) => {
  const { from } = navigation.state.params
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        <StatusBar barStyle="light-content" />
        <View style={styles.centeredContent}>
          <Image style={styles.logo} source={images.sample_snake} />
          <Text style={styles.titleDetails}>Eastern racer</Text>
          <Text style={styles.subtitleDetails}>(Coluber constrictor)</Text>
        </View>
        <Text style={styles.descDetails}>
          The eastern racer is a species of nonvenomous snake in the family
          Colubridae. The species is endemic to North America and Central
          America. Eleven subspecies, including the nominotypical subspecies,
          are recognized, which as a group are commonly referred to as the
          eastern racers
        </Text>
        <Text style={styles.title}>{`Details (from ${from})`}</Text>
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

Details.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        from: PropTypes.string,
      }),
    }),
    goBack: PropTypes.func,
  }),
}

Details.defaultProps = {
  navigation: {
    state: {
      params: {
        from: '',
      },
    },
    goBack: () => null,
  },
}

export default Details
