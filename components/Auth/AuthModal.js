import {Alert, Modal, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {useEffect, useState} from 'react';

function AuthModal({modalVisible, setModalVisible, setAuth}) {
    const [number, onChangeNumber] = useState('');
    useEffect(() => {
        if(number.length === 6){
            setTimeout(() => {
                setAuth(true)
            }, 300)
        }
    },[number])
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={[styles.text, styles.head]}>Введите код проверки</Text>
                        <Text style={styles.text}>Сообщение с кодом проверки отправленно на ваш номер телефона.</Text>
                        <Text style={styles.text}>Введите код чтобы продолжить</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholder="Введите код"
                            keyboardType="numeric"
                        />
                        <Pressable
                            style={[styles.button]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.buttonText}>Не получил код?</Text>

                        </Pressable>
                        <Pressable
                            style={[styles.button]}
                            onPress={() => {
                                setAuth(true)
                                setModalVisible(!modalVisible)
                            }}
                        >
                            <Text style={styles.buttonText}>Отменить</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,

    },
    modalView: {
        margin: 30,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        backgroundColor: 'white',
        color: 'blue',
        borderColor: 'black'
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    buttonText: {
        color: '#6aaffb',
        textAlign: 'center',
        fontSize: 20,
        padding: 10,
    },
    text: {
        fontSize: 16,
        width: 300,
        textAlign: 'center'
    },
    head: {
        fontSize: 20,
        marginBottom: 5,
    },
    input: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20,
        width: 280
    }
});

export default AuthModal