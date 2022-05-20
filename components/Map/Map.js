import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Easing,
  StyleSheet,
  View,
  Dimensions,
  Text,
  Switch,
  Image,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import RadioButton from '../UI/RadioButton';
import geoViewport from '@mapbox/geo-viewport';
import * as Progress from 'react-native-progress';
import geo from '../../data/geo';
import FindRoute from './FindRoute';
import buildRoute from './../../service/buildingRoute';
MapboxGL.setAccessToken(
  'sk.eyJ1IjoiYXZ2YWt1bW92aWQiLCJhIjoiY2wyMGQ0M2JhMHZrdDNkbnJpOTh4YXpmdyJ9.pqVM1LvwnKEatZAT-CR6Yw',
);

const Map = () => {
  const [startFlag, setStartFlag] = useState(false);
  const [startPoint, setStartPoint] = useState('');
  const [startText, setStartText] = useState('Start');

  const [finishFlag, setFinishFlag] = useState(false);
  const [finishPoint, setFinishPoint] = useState('');
  const [finishText, setFinishText] = useState('Finish');

  const [coordinates, setCoordinates] = useState([
    102.9574832722038, 58.1981175741566,
  ]);
  const [route, setRoute] = useState({
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: [],
        },
      },
    ],
  });

  const renderRouteDirections = (route) => {
    return route ? (
      <MapboxGL.ShapeSource id="routeSource" shape={route}>
        <MapboxGL.LineLayer
          id="routeFill"
          style={{lineDasharray: [2, 2], lineColor: '#9d64fb', lineWidth: 2}}
        />
      </MapboxGL.ShapeSource>
    ) : null;
  };
  const renderRoads = (roads) => {
    return roads ? (
      <MapboxGL.ShapeSource id="Road" shape={roads}>
        <MapboxGL.LineLayer
          id="routeFillD"
          style={{lineColor: '#ffd49f', lineWidth: 2}}
        />
      </MapboxGL.ShapeSource>
    ) : null;
  };
  const pointsAnnotationCreate = (geo) => {
    const points = geo.features.filter((f) => f.geometry.type === 'Point');

    const shape = {
      type: 'FeatureCollection',
      id: '22',
      features: [...points],
    };
    return (
      <MapboxGL.ShapeSource
        onPress={(e) => {
          if (startFlag) {
            const startPoint = geo.features.find(
              (f) => f.properties.Sys == e.features[0].properties.Sys,
            );
            setStartText(startPoint.properties.Sys);
            setStartPoint(startPoint.geometry.coordinates);
            setStartFlag(false);
            console.log(startPoint.geometry.coordinates);
            return;
          }
          if (finishFlag) {
            const finishPoint = geo.features.find(
              (f) => f.properties.Sys == e.features[0].properties.Sys,
            );
            setFinishText(finishPoint.properties.Sys);
            setFinishPoint(finishPoint.geometry.coordinates);
            setFinishFlag(false);
            return;
          }
        }}
        id="exampleShapeSource"
        shape={shape}
      >
        <MapboxGL.CircleLayer
          id="sf2010CircleFill"
          sourceLayerID="sf2010"
          style={styles.circles}
        />
      </MapboxGL.ShapeSource>
    );
  };

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View>
          <View style={styles.routeContainer}>
            <TouchableOpacity
              style={styles.routeButton}
              onPress={() => {
                setFinishFlag(false);
                setStartFlag(true);
              }}
            >
              <Icon
                name={'map-marker-outline'}
                size={30}
                color={startFlag ? 'grey' : 'green'}
              />
              <Text style={styles.btnText}>{`Начало`}</Text>
            </TouchableOpacity>
            <Text style={styles.routeText}>{startText}</Text>
            <TouchableOpacity
              style={styles.routeButton}
              onPress={() => {
                setStartFlag(false);
                setFinishFlag(true);
              }}
            >
              <Icon
                name={'map-marker-outline'}
                size={30}
                color={finishFlag ? 'grey' : 'red'}
              />
              <Text style={styles.btnText}>{`Конец`}</Text>
            </TouchableOpacity>
            <Text style={styles.routeText}>{finishText}</Text>
            <TouchableOpacity
              style={styles.routeButton}
              onPress={() => {
                const route = buildRoute(startText, finishText);
                if (route) {
                  setRoute({
                    type: 'FeatureCollection',
                    features: [
                      {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                          type: 'LineString',
                          coordinates: route.path,
                        },
                      },
                    ],
                  });
                } else {
                  Alert.alert('Маршрут не найден');
                }
              }}
            >
              <Icon name={'road-variant'} size={30} color={'black'} />
              <Text style={styles.btnText}>{`Маршрут`}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <MapboxGL.MapView
          style={styles.map}
          attributionPosition={{bottom: 10, left: 10}}
          logoEnabled={false}
          showUserLocation={true}
          surfaceView={true}
        >
          <MapboxGL.Camera zoomLevel={8} centerCoordinate={coordinates} />
          <MapboxGL.UserLocation renderMode={'native'} visible={true} />
          {startPoint ? (
            <MapboxGL.MarkerView
              id="selectedFeatureMarkerView"
              coordinate={startPoint}
            >
              <View
                style={{
                  ...styles.calloutContainerStyle,
                  backgroundColor: 'green',
                }}
              ></View>
            </MapboxGL.MarkerView>
          ) : null}
          {finishPoint ? (
            <MapboxGL.MarkerView
              id="selectedFeatureMarkerView"
              coordinate={finishPoint}
            >
              <View
                style={{
                  ...styles.calloutContainerStyle,
                  backgroundColor: 'red',
                }}
              ></View>
            </MapboxGL.MarkerView>
          ) : null}
          {renderRoads(geo)}
          {pointsAnnotationCreate(geo)}
          {renderRouteDirections(route)}
        </MapboxGL.MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  circles: {
    circleRadius: 2.5,
    circleColor: '#3377e4',
  },
  icon: {
    iconSize: 1,
    iconImage: 'dot-11',
  },
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  routeButton: {},
  routeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  routeText: {
    fontSize: 20,
    color: 'black',
  },
  btnText: {
    fontSize: 10,
  },
  annotationContainer: {
    width: 10,
    height: 10,
    backgroundColor: 'yellow',
  },
  calloutContainerStyle: {
    borderRadius: 15,
    width: 10,
    height: 10,
  },
});
export default Map;
