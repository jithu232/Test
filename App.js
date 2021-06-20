/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity,
  findNodeHandle

} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from './src/module/SplashScreen/index.js';
import LoginScreen from './src/module/Login';
import AppButton from './src/component/base_component/AppButton';
import MusicApp from './src/module/MusicApp';
import KeyBo from './src/module/Keyboard';
import Final from './src/module/Final';
import MovingAnim from './src/module/MovingAnim';
import Sample from './src/module/Sample';
//import MusicApp from './src/module/Keyboard';
//import { styles } from './src/component/base_component/AppButton/style';


const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
})

// const AppButton = ({ onPress, title }) => (
//   <TouchableOpacity
//     activeOpacity={0.8}
//     onPress={onPress}
//     style={styles.appButtonContainer}
//   >
//     <Text style={styles.appButtonText}>{title}</Text>
//   </TouchableOpacity>
// );

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.screenContainer}>
      <Sample/>
  </View>
  );
};
export default App;

