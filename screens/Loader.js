import React from 'react';
import LottieView from 'lottie-react-native';

export default function Loader({state}) {
  const style = state.isSite ? {} : {marginBottom: 25};

  return (
    <LottieView
      style={style}
      source={require('../assets/loader.json')}
      autoPlay
      loop
    />
  );
}
