// import React from "react";
// import { View } from "react-native";
// import Map from "./components/Maps/Map";
//
//
//
// const App = () => {
//   return (
//     //<View>
//       <Map/>
//     //</View>
//   );
// };


//
import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import IsAuthNavigator from './components/StackNavigators/IsAuthNavigator';
import AuthNavigator from './components/StackNavigators/AuthNavigator';

const App = () => {
  const [isAuth, setAuth] = useState(true)
  return (
    <NavigationContainer>
      {isAuth ?
        <IsAuthNavigator setAuth={setAuth} />
        :
        <AuthNavigator setAuth={setAuth} isAuth={isAuth}/>
      }
    </NavigationContainer>
  );
}
export default App;
