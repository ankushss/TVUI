import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CustomText = ({children, style}) => {
  return <Text style={{...styles.text, ...style}}>{children}</Text>;
};

export default CustomText;

const styles = StyleSheet.create({
  text: {},
});
