import React from "react";
// import { LogBox, StyleSheet } from "react-native";
// import MapboxGL from "@react-native-mapbox-gl/maps";
// import Home from "./src/scenes/Home";
// import { createStackNavigator, TransitionPresets } from "react-navigation-stack";
// import { createAppContainer } from "react-navigation";
// import Icon from "react-native-vector-icons/MaterialIcons";
// import Demo from "./src/scenes/Demo";
// import config from "./src/utils/config";
// import Map from "./components/Map";
//
//
// const App = () => {
//   return (
//     //<View>
//     //   <Map/>
//     // <CreateOfflineRegion/>
//     //</View>
//     // <ChangeLayerColor/>
//     // <CreateOfflineRegion label={'dd'} onDismissExample={() => {}}/>
//    // <UserLocationChange onDismissExample={()=> {}} label={''}/>
//    //  <TwoByTwo onDismissExample={()=> {}} label={'v'}/>
//     <Map />
//    //  <CacheManagement onDismissExample={() => {}} label={'d'}/>
//   );
// };
//
//
// export default App;

import MapboxGL from "@react-native-mapbox-gl/maps";
import config from "./src/utils/config";
import { createStackNavigator, TransitionPresets } from "react-navigation-stack";
import Home from "./src/scenes/Home";
import Demo from "./src/scenes/Demo";
import { createAppContainer } from "react-navigation";
import { IS_ANDROID } from "./src/utils";
import { LogBox, SafeAreaView, Text, View, StyleSheet } from "react-native";
import sheet from "./src/styles/sheet";
import Icon from 'react-native-vector-icons/MaterialIcons';
LogBox.ignoreLogs([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
]);

const styles = StyleSheet.create({
  noPermissionsText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

MapboxGL.setAccessToken(config.get('accessToken'));

Icon.loadFont();

const AppStackNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    Demo: {screen: Demo},
    Group: {screen: Home},
  },
  {
    initialRouteName: 'Home',

    navigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
    },
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);
const AppContainer = createAppContainer(AppStackNavigator);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetchingAndroidPermission: IS_ANDROID,
      isAndroidPermissionGranted: false,
      activeExample: -1,
    };
  }

  async componentDidMount() {
    if (IS_ANDROID) {
      const isGranted = await MapboxGL.requestAndroidLocationPermissions();
      this.setState({
        isAndroidPermissionGranted: isGranted,
        isFetchingAndroidPermission: false,
      });
    }
  }

  render() {
    if (IS_ANDROID && !this.state.isAndroidPermissionGranted) {
      if (this.state.isFetchingAndroidPermission) {
        return null;
      }
      return (
        <SafeAreaView
          style={[sheet.matchParent, {backgroundColor: colors.primary.blue}]}
          forceInset={{top: 'always'}}>
          <View style={sheet.matchParent}>
            <Text style={styles.noPermissionsText}>
              You need to accept location permissions in order to use this
              example applications
            </Text>
          </View>
        </SafeAreaView>
      );
    }
    return <AppContainer />;
  }
}

export default App;
