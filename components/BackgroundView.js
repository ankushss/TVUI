import React from 'react';
import {StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const BackgroundView = ({children}) => {
  return (
    <LinearGradient colors={['#5397bd', '#3a4174']} style={styles.container}>
      {children}
    </LinearGradient>
  );
};

export default BackgroundView;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
