import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DialogsItem = ({navigation, dialog}) => {
  return (
    <TouchableOpacity
      style={{
        borderBottomWidth: 1,
        borderColor: 'grey',
      }}
      onPress={() =>
        navigation.navigate('Chat', {
          dialog: dialog,
        })
      }
    >
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
          paddingBottom: 5,
        }}
      >
        <Text>{dialog.title}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: 'grey',
            }}
          >
            {dialog.date}
          </Text>
          <MaterialIcons
            size={18}
            color={'rgba(128,128,128,0.5)'}
            name="arrow-forward-ios"
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <ImageBackground
          resizeMode="cover"
          style={{
            width: 40,
            height: 40,
            marginRight: 10,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}
          source={{uri: dialog.img}}
        >
          <View
            style={{
              width: 8,
              height: 8,
              backgroundColor: '#7ed321',
              borderRadius: 5,
              marginRight: 5,
              marginBottom: 5,
            }}
          />
        </ImageBackground>
        <Text
          style={{
            color: 'grey',
          }}
        >
          {dialog.message}
        </Text>
        {dialog.newMessage ? (
          <Text
            style={{
              marginLeft: 'auto',
              backgroundColor: '#0a83e6',
              paddingRight: 5,
              paddingLeft: 5,
              borderRadius: 10,
              color: 'white',
            }}
          >
            {dialog.newMessage}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default DialogsItem;
