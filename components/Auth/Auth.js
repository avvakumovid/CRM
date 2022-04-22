import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import AuthModal from './AuthModal';

const Auth = ({modalVisible, setModalVisible, setAuth}) => {
    const [number, onChangeNumber] = React.useState('');
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text}>Авторизация</Text>
                <Text style={styles.header}>Цифровое рабочее место</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Введите..."
                    keyboardType="numeric"
                    selectionColor='#0a83e6'
                />
            </View>
            <AuthModal modalVisible={modalVisible} setModalVisible={setModalVisible} setAuth={setAuth}/>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    text: {
        marginLeft: 30,
        marginTop: 30,
        fontSize: 25
    },
    header: {
        marginLeft: 30,
        marginTop: 10,
        fontSize: 45,
        fontWeight: 'bold'
    },
    note: {
        marginLeft: 30,
        marginTop: 10,
        fontSize: 18,
        color: 'grey'
    },
    input: {
        marginLeft: 30,
        marginTop: 50,
        fontSize: 45,
    }

})

export default Auth;