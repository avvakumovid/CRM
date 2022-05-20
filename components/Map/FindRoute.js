import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function FindRoute({setStart, setFinish}) {


  return (
    <View style={styles.routeContainer}>
      <TouchableOpacity
        style={styles.routeButton}
        onPress={() => {
          setStartColor('grey');
          // setStart();
        }}
      >
        <Icon name={'map-marker-outline'} size={30} color={startColor} />
      </TouchableOpacity>
      <Text style={styles.routeText}>{startText}</Text>
      <TouchableOpacity
        style={styles.routeButton}
        onPress={() => {
          setFinishColor('grey');
          // setFinish();
        }}
      >
        <Icon name={'map-marker-outline'} size={30} color={finishColor} />
      </TouchableOpacity>
      <Text style={styles.routeText}>{finishText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
