import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  TouchableHighlight,
} from 'react-native'
import { colors } from 'theme'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'
import { showMessage } from 'react-native-flash-message'
import getSnakeReportList from 'services/SnakeReport/getSnakeReportList'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  map: {
    flex: 1,
    minWidth: 300,
  },
  customView: {
    width: 50,
    backgroundColor: colors.orange,
  },
  calloutText: {
    fontSize: 20,
  },
})

const MapScene = ({ navigation }) => {
  const [markers, setMarkers] = useState([
    {
      id: 1,
      title: 'Test',
      description: 'Test',
      coordinate: {
        latitude: 1.35,
        longitude: 103.68,
      },
    },
  ])
  const [region, setRegion] = useState({
    latitude: 1.29,
    longitude: 103.85,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  })

  useEffect(() => {
    getSnakeReportList().then(
      (res) => {
        const markersFromRequest = res.map((report) => ({
          id: report.id,
          coordinate: {
            latitude: report.latitude,
            longitude: report.longitude,
          },
          title: report.request.classification.name,
          description: report.request.classification.short_desc,
        }))
        setMarkers(markersFromRequest)
      },
      (err) => {
        showMessage({
          message: 'Network Error!',
          description:
            'Network error occurred when trying to fetch snake sighting reports',
          type: 'danger',
        })
        console.log(err)
      },
    )
  }, [])
  useEffect(() => {
    (async () => {
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
      console.log(location)
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: region.latitudeDelta,
        longitudeDelta: region.longitudeDelta,
      })
    })()
  }, [])
  return (
    <SafeAreaView style={styles.root}>
      {/* <StatusBar barStyle="light-content" /> */}

      <MapView
        followUserLocation
        zoomEnabled
        minZoomLevel={12}
        showsUserLocation
        region={region}
        style={styles.map}
      >
        {markers.map((marker, index) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
          >
            {/* <MapView.Callout tooltip> */}
            {/*  <TouchableHighlight onPress= {markerClick} underlayColor='#dddddd'> */}
            {/*    <View style={styles.calloutText}> */}
            {/*      <Text>{marker.title}{"\n"}{marker.description}</Text> */}
            {/*    </View> */}
            {/*  </TouchableHighlight> */}
            {/* </MapView.Callout> */}
          </Marker>
        ))}
      </MapView>

      {/* <Text style={styles.title}>MapView - Pending Request Approval</Text> */}
    </SafeAreaView>
  )
}

MapScene.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

MapScene.defaultProps = {
  navigation: { navigate: () => null },
}

export default MapScene
