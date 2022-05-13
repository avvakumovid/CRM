import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import Maps from './Maps';
import Maps3 from './Maps3';
import Maps2 from './Maps2';
import Maps5 from './Maps5';
import GoToMaps from './GoToMaps';
import Mapbox from './Map';
import Map from './Map';
import ZuluGIS from './ZuluGIS';

const MapsNavigation = () => {
  const TopTab = createMaterialTopTabNavigator();
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="MainMaps">
        {(props) => <GoToMaps {...props} />}
      </TopTab.Screen>
      <TopTab.Screen name="Maptiler-WV">
        {(props) => <Maps2 {...props} />}
      </TopTab.Screen>
      <TopTab.Screen name="OSM-WV">
        {(props) => <Maps3 {...props} />}
      </TopTab.Screen>
      <TopTab.Screen name="Yandex">
        {(props) => <Maps5 {...props} />}
      </TopTab.Screen>
      <TopTab.Screen name="Mapbox">
        {(props) => <Map {...props} />}
      </TopTab.Screen>
      <TopTab.Screen name="ZuluGIS">
        {(props) => <ZuluGIS {...props} />}
      </TopTab.Screen>
    </TopTab.Navigator>
  );
};

export default MapsNavigation;
