import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {createSidebarNavigator} from './components/sidebar/SideBar';
import Home from './containers/home/Home';
import Search from './containers/search/Search';

import * as WifiP2P from 'react-native-wifi-p2p';

const My = createSidebarNavigator();
const App = () => {
  useEffect(() => {
    (async () => {
      try {
        const initialize = await WifiP2P.initialize();
        // const devices = await WifiP2P.getAvailablePeers();
        // console.log({isStart, devices});
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <NavigationContainer>
      <My.Navigator>
        <My.Screen name="Home" component={Home} />
        <My.Screen name="Feed" component={Search} />
        <My.Screen name="Feed1" component={Search} />
      </My.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
