import React from 'react';
import {Button, View} from 'react-native';

const GoToMaps = ({navigation}) => {
  return (
    <View>
      <Button
        title={'Mapviewer'}
        onPress={() => navigation.navigate('Maps2')}
      />
      <Button title={'OSM'} onPress={() => navigation.navigate('Maps3')} />

      <Button title={'Yandex'} onPress={() => navigation.navigate('Maps5')} />
      <Button title={'Mapbox'} onPress={() => navigation.navigate('Map')} />
      <Button
        title={'ZuluGIS'}
        onPress={() => navigation.navigate('ZuluGIS')}
      />
      <Button
        title={'ZuluMap'}
        onPress={() => navigation.navigate('ZuluMap')}
      />
    </View>
  );
};

export default GoToMaps;
