import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Message from './Message/Message';
import MessageFooter from '../../../UI/MessageFooter';

const Chat = ({route, navigation, setTitle, setUsers, setHeaderBGColor}) => {
  let {dialog} = route.params;
  const [messages, setMessage] = useState(dialog.messages);

  let messagesView = [...messages].map((m) => (
    <Message
      key={m.id + Math.random()}
      content={m.content}
      sender={m.sender}
      img={m.img}
      link={m.link}
      navigation={navigation}
    />
  ));
  useEffect(() => {
    setTitle(dialog.title);
    setUsers(dialog.users);
  }, []);
  return (
    <>
      <ScrollView>
        <View style={styles.container}>{messagesView}</View>
      </ScrollView>
      <MessageFooter messages={messages} setMessage={setMessage} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 30,
    backgroundColor: '#fff',
  },
  icon: {},
  leftIcon: {
    marginLeft: 10,
    alignItems: 'center',
  },
  rightIcon: {
    marginRight: 10,
  },
  messageInput: {
    backgroundColor: '#e3e7ed',
    padding: 5,
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    width: '85%',
  },
});

export default Chat;
