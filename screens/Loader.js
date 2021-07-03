import React from 'react';
import LottieView from 'lottie-react-native';

export default function Loader({state}) {
  return <LottieView source={require('../assets/loader.json')} autoPlay loop />;
}
