import React, { useState } from 'react';
import { TextInput } from 'react-native';
import styles from './input.style';
const CustomInput = ({ value, onChange,placeholder }) => {
  // State to manage the local value of the input
  const [localValue, setLocalValue] = useState(value);

  const handleChange = (text) => {
    setLocalValue(text);
    // Send the updated value back to the parent component
    onChange(text);
  };

  return (
    <TextInput style={styles.inputText}
      value={localValue}
      onChangeText={handleChange}
      placeholder={placeholder}
      // You can add other TextInput props here as needed
    />
  );
};

export default CustomInput;