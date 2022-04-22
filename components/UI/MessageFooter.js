import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View, StatusBar, Dimensions, Platform} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ModalContextMenu from '../Tabs/Dialogs/Chat/Modal/ModalContextMenu';

const SCREEN_HEIGHT = Dimensions.get('screen').height; // device height
const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 0;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const NAV_BAR_HEIGHT = SCREEN_HEIGHT - WINDOW_HEIGHT - STATUS_BAR_HEIGHT

const MessageFooter = ({setMessage, messages}) => {
    const [messageText, onChangeMessageText] = React.useState('');
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
        <View>
            <View style={styles.footer}>
                <TouchableOpacity
                    onPress={
                        () => {
                            setModalVisible(true)
                        }
                    }>
                    <FontAwesome size={15} style={styles.leftIcon} name={'paperclip'}/>
                </TouchableOpacity>
                <TextInput
                    style={styles.messageInput}
                    value={messageText}
                    onChangeText={onChangeMessageText}
                    multiline={true}
                    placeholder="Сообщение..."
                    maxHeight={100}
                    selectionColor='#0a83e6'
                />
                <TouchableOpacity
                    onPress={() => {

                    }}>
                    <Ionicons onPress={() => {
                        setMessage([...messages, {
                            id: messages.length,
                            sender: 'me',
                            img: 'https://cdn141.picsart.com/330083061057211.png',
                            content: messageText
                        }])
                        onChangeMessageText('')
                    }} size={15} style={styles.rightIcon} name={'send'}/>
                </TouchableOpacity>
            </View>
        </View>
    <ModalContextMenu modalVisible={modalVisible} setModalVisible={setModalVisible}/>
    </>

    );
};

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: Platform.OS === 'web' ? 0 : NAV_BAR_HEIGHT,
        backgroundColor: '#fff'
    },
    icon: {},
    leftIcon: {
        marginLeft: 10,
        alignItems: 'center'
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


    }
})

export default MessageFooter;