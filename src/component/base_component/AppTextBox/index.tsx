import React from 'react';
import {TouchableOpacity,Text} from 'react-native';
import {styles}from './style';
import { TextInput } from 'react-native-paper';

const AppTextBox = ({ text,type,secure,autoFocus }) => (
    <TextInput
    label={type}
    value={text}
    style={styles.appButtonContainer}
    secureTextEntry={secure}
    autoFocus={autoFocus}
    onChangeText={text}
    
  />
);
  
  export default AppTextBox;