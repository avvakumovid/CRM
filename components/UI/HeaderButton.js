import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

const HeaderButton = ({text, textAlign, press, pressArg}) => {
    return (
        <Pressable
            style={[styles.button]}
            onPress={() => press(pressArg)}>
            <Text style={[styles.buttonText, {textAlign: textAlign}]}>{text}</Text>
        </Pressable>
    )
};
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        color: 'blue',
        width: 120
    },
    buttonText: {
        color: '#6aaffb',
        fontSize: 18,
        padding: 10,

    }
})
export default HeaderButton;