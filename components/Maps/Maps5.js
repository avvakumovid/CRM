import React from 'react';
import WebView from 'react-native-webview';

const Maps2 = () => {
  return (
    <WebView
      source={{
        uri: 'https://yandex.ru/maps/?um=constructor%3A1dd55403f89dcf77fe93467be8a04d818e6e2828846e7af1856136da62d0cbb7&amp;source=constructorStatic',
      }}
    />
  );
};

export default Maps2;
