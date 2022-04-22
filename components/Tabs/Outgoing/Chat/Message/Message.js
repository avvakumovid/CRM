import React from 'react';
import {ScrollView, StyleSheet, Text,} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const Message = ({type, content}) => {
    const colors = type === 'msg' ? ['white', 'white'] : ['#3525af', '#bf69d4']
    return (
        <ScrollView>
            <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={colors}
                style={[styles.container, type === 'msg' ? styles.msgContainer : styles.otherContainer]}>
                <Text style={type === 'msg' ? styles.msgContent : styles.otherContent}>
                    {content}
                </Text>
            </LinearGradient>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        flexDirection: 'row'
    },
    wrapper: {
        flexDirection: 'row'
    },
    msgContainer: {
        backgroundColor: '#fff',
        alignSelf: 'flex-end',
        maxWidth: '80%',
    },
    otherContainer: {
        alignSelf: 'center',
        width: '100%',
        padding: 25
    },
    msgContent: {
        color: '#000',

    },
    otherContent: {
        color: 'white',
        fontSize: 16
    }
})

export default Message;