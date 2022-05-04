import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken('Paste your access token here');
MapboxGL.setAccessToken(
  'sk.eyJ1IjoiYXZ2YWt1bW92aWQiLCJhIjoiY2wyMGQ0M2JhMHZrdDNkbnJpOTh4YXpmdyJ9.pqVM1LvwnKEatZAT-CR6Yw',
);
//ss
const Map = () => {
  const [coordinates] = useState([36.8253, 55.7178]);
  const progressListener = (offlineRegion, status) =>
    console.log(offlineRegion, status);
  const errorListener = (offlineRegion, err) => console.log(offlineRegion, err);

  useEffect(async () => {
    // MapboxGL.offlineManager.setTileCountLimit(100000);
    console.log('effect');
    await MapboxGL.offlineManager.createPack(
      {
        name: 'Pack 2',
        styleURL: 'mapbox://styles/mapbox/navigation-night-v1',
        minZoom: 6,
        maxZoom: 20,
        bounds: [
          [-19.335937499999996, 35.60371874069731],
          [50.625, -32.842673631954305],
        ],
      },
      progressListener,
      errorListener,
    );
  }, []);
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map}>
          <MapboxGL.Camera zoomLevel={6} centerCoordinate={coordinates} />
          <MapboxGL.PointAnnotation coordinate={coordinates} />
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
