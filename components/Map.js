import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Text, Image, Button, TouchableOpacity } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";
import Ionicons from "react-native-vector-icons/Ionicons";

MapboxGL.setAccessToken(
  "sk.eyJ1IjoiYXZ2YWt1bW92aWQiLCJhIjoiY2wyMGQ0M2JhMHZrdDNkbnJpOTh4YXpmdyJ9.pqVM1LvwnKEatZAT-CR6Yw",
);

const Map = () => {
  const onFlyToPress = () => {
    for (const key in MapboxGL.Camera.defaultProps) {
      console.log(key);
    }
  };
  const cameraRef = useRef();
  const [followUserLocation, setFollowUserLocation] = useState(true);
  const r = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [
              36.81837,
              55.710085,
            ],
            [
              36.81877,
              55.71055,
            ],
            [
              36.819,
              55.710818,
            ],
            [
              36.819189,
              55.71104,
            ],
            [
              36.819229,
              55.711081,
            ],
            [
              36.820071,
              55.712058,
            ],
            [
              36.820265,
              55.712331,
            ],
            [
              36.820618,
              55.712903,
            ],
            [
              36.820686,
              55.713007,
            ],
            [
              36.820707,
              55.713036,
            ],
            [
              36.821113,
              55.713635,
            ],
            [
              36.821158,
              55.713701,
            ],
            [
              36.821271,
              55.713874,
            ],
            [
              36.821792,
              55.714678,
            ],
            [
              36.821851,
              55.714764,
            ],
            [
              36.822172,
              55.71524,
            ],
            [
              36.822279,
              55.715406,
            ],
            [
              36.822607,
              55.715859,
            ],
            [
              36.822759,
              55.716063,
            ],
            [
              36.82288,
              55.716225,
            ],
            [
              36.823,
              55.716366,
            ],
            [
              36.82318,
              55.716506,
            ],
            [
              36.82341,
              55.716669,
            ],
            [
              36.823714,
              55.71684,
            ],
            [
              36.824223,
              55.717137,
            ],
            [
              36.825288,
              55.717774,
            ],
            [
              36.825665,
              55.717987,
            ],
            [
              36.825841,
              55.718092,
            ],
            [
              36.826959,
              55.718758,
            ],
            [
              36.827774,
              55.71923,
            ],
            [
              36.828547,
              55.719678,
            ],
            [
              36.829492,
              55.720226,
            ],
            [
              36.830825,
              55.721013,
            ],
            [
              36.831175,
              55.72122,
            ],
            [
              36.831989,
              55.721708,
            ],
            [
              36.834652,
              55.723289,
            ],
            [
              36.837178,
              55.72471,
            ],
            [
              36.838188,
              55.725235,
            ],
            [
              36.838724,
              55.724965,
            ],
            [
              36.83926,
              55.724656,
            ],
            [
              36.839352,
              55.724625,
            ],
            [
              36.839441,
              55.724608,
            ],
            [
              36.839495,
              55.724607,
            ],
            [
              36.839542,
              55.724611,
            ],
            [
              36.839628,
              55.72463,
            ],
            [
              36.839726,
              55.724667,
            ],
            [
              36.839847,
              55.724732,
            ],
            [
              36.841215,
              55.72558,
            ],
            [
              36.841365,
              55.725677,
            ],
            [
              36.841407,
              55.7257,
            ],
            [
              36.841714,
              55.725874,
            ],
            [
              36.842047,
              55.726059,
            ],
            [
              36.84229,
              55.726158,
            ],
            [
              36.842581,
              55.726267,
            ],
            [
              36.842941,
              55.726364,
            ],
            [
              36.843064,
              55.726389,
            ],
            [
              36.843305,
              55.726438,
            ],
            [
              36.843792,
              55.726524,
            ],
            [
              36.844493,
              55.726608,
            ],
            [
              36.845176,
              55.726674,
            ],
            [
              36.845387,
              55.726695,
            ],
            [
              36.845926,
              55.726752,
            ],
            [
              36.846645,
              55.726843,
            ],
            [
              36.847127,
              55.726926,
            ],
            [
              36.847599,
              55.727049,
            ],
            [
              36.847967,
              55.727186,
            ],
            [
              36.848827,
              55.727544,
            ],
            [
              36.849279,
              55.727733,
            ],
            [
              36.851478,
              55.728645,
            ],
            [
              36.851762,
              55.72876,
            ],
            [
              36.85189,
              55.728837,
            ],
            [
              36.852148,
              55.729022,
            ],
            [
              36.852429,
              55.729436,
            ],
            [
              36.852541,
              55.729703,
            ],
            [
              36.852584,
              55.72973,
            ],
            [
              36.852682,
              55.729769,
            ],
            [
              36.852796,
              55.729799,
            ],
            [
              36.85295,
              55.729804,
            ],
            [
              36.854251,
              55.729644,
            ],
            [
              36.855084,
              55.729543,
            ],
            [
              36.855179,
              55.729533,
            ],
          ],
        },
      },
    ],
  };
  const renderRoadDirections = () => {
    const route = r;
    return route ? (
      <MapboxGL.ShapeSource id="routeSource" shape={route}>
        <MapboxGL.LineLayer id="routeFill" style={{ lineColor: "red", lineWidth: 3.2, lineOpacity: 1.84 }} />
      </MapboxGL.ShapeSource>
    ) : null;
  };
  // const geolocate = new MapboxGL.UserTrackingModes({
  //   positionOptions: {
  //     enableHighAccuracy: true
  //   },
  //   trackUserLocation: true
  // });
  const [coordinates, setCoordinates] = useState([36.8253, 55.7178]);
  useEffect(() => {
    const d = MapboxGL.requestAndroidLocationPermissions();
  }, []);
  const Camera = MapboxGL.Camera;
  return (
    <View style={styles.page}>
      <View style={styles.container}>

        <MapboxGL.MapView
          userTrackingMode={1}
          style={styles.map}
          attributionPosition={{ top: 8, left: 8 }}
          logoEnabled={false}
          showUserLocation={true}
          surfaceView={true}>
          <MapboxGL.UserLocation renderMode={'native'} onUpdate={(e) => {
            // console.log('update');
            // console.log(e);
          }} visible={true} />
          {renderRoadDirections()}
          <MapboxGL.Camera animationMode={"flyTo"} animationDuration={0} zoomLevel={12}
                           centerCoordinate={coordinates}
                           triggerKey={coordinates}
          />
          <MapboxGL.PointAnnotation id={'pa'} coordinate={[36.822215, 55.7122222]} />
        </MapboxGL.MapView>
        <View style={{ backgroundColor: "transparent", position: "absolute", bottom: 20, right: 20, zIndex: 10 }}>
          <TouchableOpacity
            onPress={(e) => {
              setCoordinates([36.822215, 52.7122222]);
            }}>
            <Ionicons
              name="md-create"
              size={30}
              color={"red"}
            />

          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default Map;
