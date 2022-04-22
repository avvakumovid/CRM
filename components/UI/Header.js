import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import HeaderButton from './HeaderButton';

const Header = ({navigation, title, leftBtnContent, leftBtnPress = navigation.goBack, rightBtnPress = navigation.goBack, rightBtnContent}) => {
    return (
        <View style={{
            paddingTop: StatusBar.currentHeight,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#fff'
        }}>
            <HeaderButton
                text={leftBtnContent}
                press={leftBtnPress}
                textAlign='left'
            />
            <Text>{title}</Text>
            <HeaderButton
                text={rightBtnContent}
                press={rightBtnPress}
                textAlign='right'
            />
        </View>
    );
};
export default Header;