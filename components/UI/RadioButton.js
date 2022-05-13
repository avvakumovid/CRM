import React, {Component, useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const RadioButton = ({prop, downloadOfflineMapOnRoute}) => {
  const [value, setValue] = useState();
  return (
    <>
      <Text style={styles.heading}>Маршруты</Text>
      <View style={styles.main}>
        {prop.map((res) => {
          return (
            <View key={res.id} style={styles.container}>
              <Text style={styles.radioText}>{res.id}</Text>
              <TouchableOpacity
                style={styles.radioCircle}
                onPress={() => {
                  setValue(res.id);
                  downloadOfflineMapOnRoute(
                    res.name,
                    res.route.features[0].geometry.coordinates[0],
                    res.route,
                  );
                }}
              >
                {value === res.id && <View style={styles.selectedRb} />}
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    marginBottom: 5,
    fontSize: 18,
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 5,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioText: {
    marginRight: 5,
    fontSize: 18,
    color: 'grey',
    fontWeight: '700',
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: 'grey',
  },
  result: {
    marginTop: 20,
    color: 'white',
    fontWeight: '600',
    backgroundColor: '#F3FBFE',
  },
});

export default RadioButton;
