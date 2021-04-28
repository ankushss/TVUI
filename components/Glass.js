import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Glass = ({children}) => {
  return (
    <LinearGradient
      colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.1)']}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 1}}
      useAngle
      angle={150}
      style={styles.gradient}>
      {children}
    </LinearGradient>
  );
};

export default Glass;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  gradient: {
    borderRadius: 10,
    borderColor: 'rgba(255,255,255,0.1)',
    flex: 1,
  },
});
