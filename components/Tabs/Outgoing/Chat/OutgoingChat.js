import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import MessageFooter from '../../../UI/MessageFooter';
import Message from './Message/Message';

const OutgoingChat = ({route, setTitle}) => {
    let {title} = route.params;
    useEffect(() => {
        setTitle(`# ${title}`)
    })
    const botMessage = [
        {
        id: 1,
        type: 'msg',
        content: 'Шалом Шабат, я сценарный чат бот с чего начнем'
        },
        {
            id: 2,
            type: 'action',
            content: 'Справка 2 НДФЛ',
        },
        {
            id: 3,
            type: 'action',
            content: 'Заявление на отпуск',
        },
        {
            id: 4,
            type: 'action',
            content: 'Сколько дней отпуска осталось',
        },
    ]
    const [messages, setMessage] = useState(botMessage)
    const borMessageView = messages.map(m => <Message key={m.id + Math.random()} type={m.type} content={m.content}/>)
    return (
        <>
            <ScrollView>
                <View style={
                    styles.container}>
                    {borMessageView}
                </View>
            </ScrollView>
            <MessageFooter  messages={messages} setMessage={setMessage}/>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
})

export default OutgoingChat;
