import React from 'react';
import HeaderButton from '../../UI/HeaderButton';
import {Image, StatusBar, Text, View} from 'react-native';

const OutgoingChatHeader = ({navigation, title}) => {

    return (
        <View style={{
            paddingTop: StatusBar.currentHeight,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#fff'
        }}>
            <HeaderButton
                text='Назад'
                press={navigation.goBack}
                textAlign='left'
            />
            <Text>{title}</Text>
            <HeaderButton
                text={<Image
                    style={{
                        width: 18,
                        height: 18
                    }}
                    source={require('../../../assets/box.png')}
                />}
                press={navigation.goBack}
                textAlign='right'
            />
        </View>
    );
};

export default OutgoingChatHeader;