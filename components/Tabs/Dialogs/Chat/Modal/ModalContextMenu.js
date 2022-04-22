import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ModalContextMenu = ({modalVisible, setModalVisible}) => {

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.buttonText}>Камера</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.buttonText}>Фото / видео</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.buttonText}>Документ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.buttonText}>Местоположение</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.buttonText}>Контакт</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.buttonText}>Отмена</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 22,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',

    },
    modalView: {
        margin: 30,
        paddingTop: 10,
        paddingBottom: 10,
        // backgroundColor: 'rgb(187,199,208)',
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,

    },
    pressableBorder: {},
    button: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'rgba(128,128,128, 0.5)'

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

export default ModalContextMenu;