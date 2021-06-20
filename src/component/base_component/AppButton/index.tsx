import React from 'react';
import {TouchableOpacity,Text} from 'react-native';
import {styles}from './style';

const AppButton = ({ onPress, title,color }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    
    style={{backgroundColor:color,justifyContent: 'center',
    height:50,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 10}}
  >
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);
  
  export default AppButton;
  