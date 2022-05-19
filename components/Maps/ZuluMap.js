import React, {useState, useEffect} from 'react';

import {Easing, StyleSheet, View, Dimensions, Text, Switch} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import RadioButton from '../UI/RadioButton';
import geoViewport from '@mapbox/geo-viewport';
import * as Progress from 'react-native-progress';

MapboxGL.setAccessToken(
  'sk.eyJ1IjoiYXZ2YWt1bW92aWQiLCJhIjoiY2wyMGQ0M2JhMHZrdDNkbnJpOTh4YXpmdyJ9.pqVM1LvwnKEatZAT-CR6Yw',
);

const ZuluMap = () => {
  const SF_OFFICE_COORDINATE = [-122.400021, 37.789085];
  const rasterSourceProps = {
    id: 'stamenWatercolorSource',
    tileUrlTemplates: [
      'http://zs.zulugis.ru:6473/zws/GetLayerTile?Layer=example:demo&x={x}&y={y}&z={z}',
    ],
    // tileUrlTemplates: [
    //   'http://zs.zulugis.ru:6473/ZuluWeb/#!/map/f8dd3c1f-602b-4055-b588-598ecc39763e?x={x}&y={y}&z={z}',
    // ],
    // tileUrlTemplates: [
    //   'https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg',
    // ],
    tileSize: 256,
  };
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map}>
          <MapboxGL.Camera
            zoomLevel={16}
            centerCoordinate={SF_OFFICE_COORDINATE}
          />

          <MapboxGL.RasterSource {...rasterSourceProps}>
            <MapboxGL.RasterLayer
              id="stamenWatercolorLayer"
              sourceID="stamenWatercolorSource"
              style={{rasterOpacity: 1}}
            />
          </MapboxGL.RasterSource>
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

export default ZuluMap;
