import React, { useState } from "react";
import { StyleSheet } from "react-native";
import WebView from "react-native-webview";

const Maps3 = () => {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [pin, setPin] = useState({
        latitude: 55.7288,
        longitude: 36.8377,
    })

    return (
        <WebView source={{uri: 'https://osm.org/go/0t0N7Z2aw-?layers=N&m='}}/>

    );
};
const styles = StyleSheet.create({
    container: {

        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: '100%',
        height: '100%',
    },
});
export default Maps3;
