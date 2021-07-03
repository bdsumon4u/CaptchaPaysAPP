import React from 'react';
import {Dimensions, Text, View} from 'react-native';

const {height, width} = Dimensions.get('screen');
const styles = {
  disconnected: {
    view: {
      paddingTop: 50,
      height: height,
      width: width,
      backgroundColor: 'gray',
    },
    title: {
      color: 'white',
      fontSize: 18,
      textAlign: 'center',
    },
    subtitle: {
      color: 'white',
      fontSize: 14,
      textAlign: 'center',
    },
  },
};

export default function Disconnected() {
  return (
    <View style={styles.disconnected.view}>
      <Text style={styles.disconnected.title}>Connection Failed.</Text>
      <Text style={styles.disconnected.subtitle}>
        Check Your Internet Connection.
      </Text>
    </View>
  );
}
