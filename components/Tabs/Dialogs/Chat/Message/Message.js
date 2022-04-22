import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const Message = ({sender, content, img, newTask, navigation}) => {

    if(newTask){
        return  <View style={sender !== 'me' && styles.wrapper}>
        {sender !== 'me' && <Image
            style={{
                width: 35,
                height: 35
            }}
            source={{
                uri: img
            }}/>}
        <View style={[styles.container, sender === 'me' ? styles.meContainer : styles.otherContainer]}>
            <Text style={sender === 'me' ? styles.meContent : styles.otherContent}>
                Создана новая задача <Text style={{color: 'blue'}}
                onPress={() =>{
                    console.log(navigation);
                    navigation.navigate('Task', {
                        title: 'Задача №21',
                    })
                }}>Задача №21
                </Text>
            </Text>
        </View>
    </View>
    }

    return (
        <View style={sender !== 'me' && styles.wrapper}>
            {sender !== 'me' && <Image
                style={{
                    width: 35,
                    height: 35
                }}
                source={{
                    uri: img
                }}/>}

            <View style={[styles.container, sender === 'me' ? styles.meContainer : styles.otherContainer]}>
                <Text style={sender === 'me' ? styles.meContent : styles.otherContent}>
                    {content}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        maxWidth: '80%',
        flexDirection: 'row'
    },
    wrapper: {
        flexDirection: 'row'
    },
    meContainer: {
        backgroundColor: '#007ee5',
        alignSelf: 'flex-end'
    },
    otherContainer: {
        backgroundColor: 'white',
        alignSelf: 'flex-start'
    },
    meContent: {
        color: '#fff'
    },
    otherContent: {
        color: '#000'
    }
})

export default Message;