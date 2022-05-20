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

  const [coordinates, setCoordinates] = useState([36.81837, 55.710085]);
  const [route, setRoute] = useState({
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: [
            [102.8399641632335, 58.0248630757298],
            [102.8396100618716, 58.0233945146983],
            [102.83930972062, 58.022483744589],
            [102.838977130375, 58.0210776312556],
            [102.8383869708415, 58.0189483542952],
            [102.8382261530643, 58.0183107536395],
            [102.8380328625052, 58.0174453743758],
            [102.8378612727719, 58.0167508057763],
            [102.8378292062717, 58.0164376783266],
            [102.8378504745468, 58.0161188983106],
            [102.8379150249982, 58.0156804569778],
            [102.8378505757924, 58.0152249984042],
            [102.8377754390421, 58.0148035903577],
            [102.8376145684131, 58.0144562875858],
            [102.8373462100362, 58.0140975436685],
            [102.8371102679538, 58.013647794663],
            [102.8369065549834, 58.0131410002568],
            [102.8365309500778, 58.0115921848975],
            [102.8362626759292, 58.0106297476568],
            [102.8359192902633, 58.0092630612629],
            [102.8352970325988, 58.0074862315724],
            [102.8349431033626, 58.0065978055239],
            [102.834385102189, 58.0053221607564],
            [102.8335161498626, 58.0031180223462],
            [102.8330977147302, 58.0020186045124],
            [102.8322822553673, 57.9999566983898],
            [102.8320142211936, 57.9992845539565],
            [102.8319283197429, 57.9989028498422],
            [102.8318531487667, 57.9984528637973],
            [102.831831755184, 57.9978775568958],
            [102.8317459883716, 57.9975300872067],
            [102.8314454118537, 57.9966242286763],
            [102.8305120470689, 57.9939695408484],
            [102.8294821622809, 57.9912233475728],
            [102.8291388394635, 57.9902148634049],
            [102.8283234807949, 57.9880781708058],
            [102.8272076808734, 57.9851778325907],
            [102.825941557743, 57.9817129052708],
            [102.8256412395074, 57.981239835845],
            [102.8252227372109, 57.980738238746],
            [102.8230983434522, 57.9790569261955],
            [102.8209311472533, 57.9774041329813],
            [102.8182489843966, 57.9754319449487],
            [102.8178950897391, 57.9751582999751],
            [102.8176284443649, 57.9748710569476],
            [102.8175194094582, 57.9747535490709],
            [102.817337021252, 57.9742405225135],
            [102.817304794566, 57.9739612563071],
            [102.8173476968844, 57.9736534498988],
            [102.8175408658655, 57.973163223131],
            [102.817733826289, 57.9728098332053],
            [102.8179916042847, 57.9724221548299],
            [102.8189356509181, 57.9710538645665],
            [102.8217252127181, 57.9670917145903],
            [102.8241713689339, 57.9634882387459],
            [102.8263063375363, 57.9604374521966],
            [102.8277118401916, 57.958430076637],
            [102.8287418636849, 57.9569188899914],
            [102.8297824582537, 57.9554075166943],
            [102.8308874875809, 57.9537820483718],
            [102.8321963920083, 57.9518599521392],
            [102.8326041376569, 57.9512951954253],
            [102.8334088790478, 57.9500630668644],
            [102.8336770045291, 57.9496466937128],
            [102.8338809801068, 57.9491618396443],
            [102.8339774694681, 57.9486770401251],
            [102.8340203180717, 57.9482662606059],
            [102.8340311357891, 57.9448662766964],
            [102.8340418563065, 57.9397942820072],
            [102.8341061842325, 57.935819900339],
            [102.8341330016506, 57.9337769109168],
            [102.8341168638224, 57.9327383350686],
            [102.8341356155292, 57.9324187006718],
            [102.8342269601091, 57.9319707407995],
            [102.8344039708744, 57.9314970167469],
            [102.8345701854067, 57.9310818700246],
            [102.8349082418328, 57.9306851957483],
            [102.8353104698431, 57.9302941963983],
            [102.8365282090737, 57.9289786984151],
            [102.8372256581537, 57.9282081648361],
            [102.8383521746057, 57.9269609103712],
            [102.8393607569668, 57.9258650136823],
            [102.8395805800405, 57.9255512244236],
            [102.8399562356288, 57.9247348612665],
            [102.8401330339435, 57.9239984963588],
            [102.840186800409, 57.9235475576438],
            [102.8402780159858, 57.9227626562227],
            [102.8403691863167, 57.921269829922],
            [102.8404443489094, 57.920105310765],
            [102.8405032685454, 57.9191746630759],
            [102.8404173886755, 57.9187180253712],
            [102.8401545970022, 57.9182354677615],
            [102.8396663610199, 57.9177930116664],
            [102.8391729405773, 57.9174904509509],
            [102.8388671281263, 57.9173477781369],
            [102.8381430278654, 57.9171079564413],
            [102.8372901094541, 57.9168681833701],
            [102.8362922113422, 57.9165940381202],
            [102.8348278136922, 57.9161687129006],
            [102.8337280171721, 57.9158518384897],
            [102.8329071637863, 57.9156805086191],
            [102.8319952457703, 57.9155663807011],
            [102.8315983061466, 57.9155749688094],
            [102.8312174107412, 57.9155834702465],
            [102.8303162326003, 57.9156804809248],
            [102.8282563316977, 57.9159117700973],
            [102.8256759875307, 57.9161887463709],
            [102.8252253269356, 57.9162172401557],
            [102.8246514364276, 57.9162286168798],
            [102.8243080281785, 57.916220129132],
          ],
        },
      },
    ],
  });

  const renderRouteDirections = (route) => {
    return route ? (
      <MapboxGL.ShapeSource id="routeSource" shape={route}>
        <MapboxGL.LineLayer
          id="routeFill"
          style={{lineColor: 'blue', lineWidth: 3.2, lineOpacity: 1.84}}
        />
      </MapboxGL.ShapeSource>
    ) : null;
  };
  const renderRoads = (roads) => {
    return roads ? (
      <MapboxGL.ShapeSource id="Road" shape={roads}>
        <MapboxGL.LineLayer
          id="routeFillD"
          style={{lineColor: '#008000', lineWidth: 3.2, lineOpacity: 1.84}}
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
          const sPoint = geo.features.find(
            (f) => f.properties.Sys == startText,
          );
          if (startFlag) {
            setStartText(e.features[0].properties.Sys);
            setStartPoint([
              e.coordinates.longitude.toFixed(3),
              e.coordinates.latitude.toFixed(3),
            ]);
            setStartFlag(false);

            return;
          }
          if (finishFlag) {
            setFinishText(e.features[0].properties.Sys);
            setFinishPoint([
              e.coordinates.longitude.toFixed(3),
              e.coordinates.latitude.toFixed(3),
            ]);
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
                // setFinish();
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

const CustomCalloutView = ({message}) => {
  return;
};

const styles = StyleSheet.create({
  circles: {
    circleRadius: 3,
    circleColor: 'black',
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
    // alignContent: 'center',
    padding: 10,
  },
  routeText: {
    // width: '40%',
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
    width: 12,
    height: 12,
  },
});
export default Map;
