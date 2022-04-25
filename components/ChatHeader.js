import React from 'react';
import {StatusBar, StyleSheet, Text, TextInput, View} from 'react-native';
import HeaderButton from './UI/HeaderButton';

const ChatHeader = ({
  navigation,
  users,
  searchText,
  onChangeSearchText,
  title,
  leftBtnContent = 'Назад',
  rightBtnContent = 'New Task',
  leftBtnPress = navigation.goBack,
  rightBtnPress = navigation.goBack,
}) => {
  return (
    <>
      <View style={styles.top}>
        <Text>{users}</Text>
      </View>
      <View style={styles.bottom}>
        <HeaderButton
          text={leftBtnContent}
          textAlign="left"
          press={leftBtnPress}
        />
        <Text>{title}</Text>
        <HeaderButton
          text={rightBtnContent}
          textAlign="right"
          press={rightBtnPress}
        />
      </View>
      <View
        style={{
          backgroundColor: '#fff',
        }}
      >
        <TextInput
          style={styles.searchInput}
          selectionColor="#0a83e6"
          value={searchText}
          onChangeText={onChangeSearchText}
          inlineImageLeft="search_icon"
          placeholder="Search"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    color: 'blue',
    width: 120,
  },
  buttonText: {
    color: '#6aaffb',
    fontSize: 18,
    padding: 10,
  },
  searchInput: {
    backgroundColor: '#e3e7ed',
    padding: 5,
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  top: {
    paddingTop: StatusBar.currentHeight,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default ChatHeader;
