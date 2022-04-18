import React, { useEffect, useState } from "react";
import {View, StyleSheet, Text, Image} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
  'sk.eyJ1IjoiYXZ2YWt1bW92aWQiLCJhIjoiY2wyMGQ0M2JhMHZrdDNkbnJpOTh4YXpmdyJ9.pqVM1LvwnKEatZAT-CR6Yw',
);

const Map = () => {
  const [coordinates] = useState([36.8253, 55.7178]);
  useEffect(() => {
   const d = MapboxGL.requestAndroidLocationPermissions()
  }, [])
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView  style={styles.map} attributionPosition={{top: 8, left: 8}} logoEnabled={false} surfaceView={true}>
          <MapboxGL.UserLocation visible={true} showsUserHeadingIndicator={true}/>
          <MapboxGL.Camera zoomLevel={14} centerCoordinate={coordinates} />
          {/*<MapboxGL.PointAnnotation i coordinate={coordinates} />*/}
        </MapboxGL.MapView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default Map;
