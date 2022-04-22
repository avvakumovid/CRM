import React, {useState} from 'react';
import HeaderButton from '../UI/HeaderButton';
import Auth from '../Auth/Auth';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AuthNavigator = ({isAuth, setAuth}) => {
    const Stack = createNativeStackNavigator()
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <Stack.Navigator>
            <Stack.Screen
                name=" "
                options={{
                    headerRight: () => (
                        <HeaderButton
                            text='Далее'
                            textAlign='right'
                            press={setModalVisible}
                            pressArg={!modalVisible}
                        />
                    ),
                }}
            >
                {props => <Auth modalVisible={modalVisible} setModalVisible={setModalVisible} isAuth={isAuth}
                                setAuth={setAuth} {...props}/>}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

export default AuthNavigator;