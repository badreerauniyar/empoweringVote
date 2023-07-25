import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from './button.style';

const CustomButton = ({ title, onPress ,backgroundColor}) => {
  return (
    <TouchableOpacity style={{...styles.button,backgroundColor:backgroundColor}} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};


export default CustomButton;
