import React from 'react';
import WebView from 'react-native-webview';

const Maps2 = () => {
    const myHtmlFile = require('./map.html');
    const INITIAL_REGION = {
        latitude: 52.5,
        longitude: 19.2,
        latitudeDelta: 8.5,
        longitudeDelta: 8.5,
    };
    return (
        // <WebView source={myHtmlFile}  style={{flex: 1}}/>
        <WebView source={{uri: 'https://mapviewer.org/ '}}  style={{flex: 1}}/>

    );
};

export default Maps2;