import React, {useEffect, useRef, useState} from 'react';
import WebView from 'react-native-webview';
import {Alert, BackHandler} from 'react-native';
import Loader from './Loader';

export default function Browser({base, state, updateState}) {
  const webViewRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [navState, setNavState] = useState({
    canGoBack: false,
    canGoForward: false,
  });

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const handleBackButton = () => {
      if (navState.canGoBack) {
        webViewRef.current.goBack();
      } else {
        Alert.alert(
          'Exit App',
          'Are you sure to exit the app?',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: () => BackHandler.exitApp(),
            },
          ],
          {
            cancelable: false,
          },
        );
      }
      return true;
    };
    // Component Mount
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButton,
    );
    return () => backHandler.remove();
  }, [navState]);

  const isSiteUrl = url => {
    url = url.replace(/\/([#?].*)?$/, '');
    for (const item of ['', '/proofs', '/login', '/register']) {
      if (url === base + item) {
        return true;
      }
    }
    return false;
  };

  console.log('Browser: ', Math.trunc(Math.random() * 100));

  return (
    <>
      <WebView
        ref={webViewRef}
        source={{uri: state.link}}
        onNavigationStateChange={newNavState => {
          setNavState({
            canGoBack: newNavState.canGoBack,
            canGoForward: newNavState.canGoForward,
          });
          if (isSiteUrl(newNavState.url) !== state.isSite) {
            updateState({isSite: !state.isSite});
          }
        }}
        startInLoadingState={true}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        pullToRefreshEnabled={true}
        renderLoading={() => <Loader state={state} />}
      />
      {loading && <Loader state={state} />}
    </>
  );
}
