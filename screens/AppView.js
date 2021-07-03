import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Browser from './Browser';

const tabs = [
  {
    name: 'Dashboard',
    icon: 'grid',
    path: '/dashboard',
  },
  {
    name: 'Tasks',
    icon: 'briefcase',
    path: '/tasks',
  },
  {
    name: 'Wallet',
    icon: 'card',
    path: '/wallet',
  },
  {
    name: 'Profile',
    icon: 'person',
    path: '/user/profile',
  },
  {
    name: 'Proofs',
    icon: 'list',
    path: '/proofs',
  },
];

const bottomTab = (base, state, updateState) => {
  if (!state.isSite) {
    for (const tab of tabs) {
      console.log(tab.path, state.link);
      if (state.link.startsWith(base + tab.path)) {
        tab.name === state.activeTab || updateState({activeTab: tab.name});
        break;
      }
    }
  }

  const iconColor = tabName => (tabName === state.activeTab ? 'red' : 'black');

  return (
    <View style={styles.tab.row}>
      {tabs.map(tab => (
        <View key={tab.name} style={styles.tab.col}>
          <TouchableOpacity
            style={styles.tab.button}
            onPress={() => {
              const tabUrl = base + tab.path;
              updateState({
                link: state.link === tabUrl ? tabUrl + '#' : tabUrl,
                activeTab: tab.name,
              });
            }}>
            <Ionicons name={tab.icon} size={20} color={iconColor(tab.name)} />
            <Text style={styles.tab.text}>{tab.name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const AppView = () => {
  const base = 'https://captchapays.com';
  const [state, setState] = useState({
    link: base,
    isSite: true,
    activeTab: 'Dashboard',
  });

  const updateState = data => setState({...state, ...data});

  console.log('App View: ', Math.trunc(Math.random() * 100));
  return (
    <>
      <Browser base={base} state={state} updateState={updateState} />
      {state.isSite || bottomTab(base, state, updateState)}
    </>
  );
};

const styles = {
  tab: {
    row: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    col: {
      textAlign: 'center',
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: 10,
      paddingHorizontal: 5,
      paddingBottom: 5,
    },
    icon: {
      colors: ['black', 'red'],
      marginBottom: 1,
    },
    text: {
      marginTop: 1,
      fontSize: 10,
    },
  },
};

export default AppView;
