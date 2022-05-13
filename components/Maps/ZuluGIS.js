import React from 'react';
import WebView from 'react-native-webview';

const ZuluGIS = () => {
  return (
    <WebView
      source={{
        uri: 'http://192.168.0.23:6473/zuluweb/#!/map/1ed8a3f1-f7bb-49d2-924a-4d7ffff91a58?lon=36.8580&lat=55.7326&z=16',
      }}
    />
  );
};

export default ZuluGIS;
