import React, { useEffect } from 'react';
import {View,KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, Dimensions }from 'react-native';
//import {styles}from './style';

import Animated, {Easing} from 'react-native-reanimated';
import {TapGestureHandler,State} from 'react-native-gesture-handler';

import AppButton from '../../component/base_component/AppButton';
import AppTextBox from '../../component/base_component/AppTextBox';
const {width,height}=Dimensions.get('window')

const {
  Value,
  event,
  block,
  cond,
  eq,
  set,
  Clock,
  startClock,
  stopClock,
  debug,
  timing,
  clockRunning,
  interpolate,
  Extrapolate
} = Animated;

function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0)
  };

  const config = {
    duration: 5000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease)
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock)
    ]),
    timing(clock, state, config),
    cond(state.finished, debug('stop clock', stopClock(clock))),
    state.position
  ]);
}





function LoginScreen() {
  const buttonOpacity = new Value(1);


  
  const onStateChange = event([
    {
      nativeEvent: ({ state }) =>
        block([
          cond(
            eq(state, State.END),
            set(buttonOpacity, runTiming(new Clock(),1,0))
          )
        ])
    }
  ]);
  
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(buttonOpacity, 1 , 5000
    ).start();
  };
  const buttonY = buttonOpacity.interpolate({
    inputRange: [0,1],
    outputRange: [-height*3/4, 0],
    extrapolate: Extrapolate.CLAMP
  });
  const textInputZindex= buttonOpacity.interpolate({
    inputRange: [0,1],
    outputRange: [1,-1],
    extrapolate: Extrapolate.CLAMP
  });

  const textInputY= buttonOpacity.interpolate({
    inputRange: [0,1],
    outputRange: [1,100],
    extrapolate: Extrapolate.CLAMP
  });
  const textInputOpacity= buttonOpacity.interpolate({
    inputRange: [0,1],
    outputRange: [1,0],
    extrapolate: Extrapolate.CLAMP
  });
  useEffect(() => {
    
    console.log(
      "This only happens ONCE.  But it happens AFTER the initial render."
    );
  }, []);
    return (
      <View style={{flex:1,backgroundColor:'white',justifyContent:'flex-end'}}>
        <Animated.View style={{...StyleSheet.absoluteFill,backgroundColor:'red',transform:[{translateY:buttonY}]}}>

        </Animated.View>
        <View style={{height:height*2/4, }}>
        <TapGestureHandler onHandlerStateChange={onStateChange}>
            <Animated.View
              style={{
                ...styles.button,
                opacity: buttonOpacity,transform:[{translateY:buttonY}]
          
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Login with User ID</Text>
            </Animated.View>
          </TapGestureHandler>

          <Animated.View 
            style={{
              zIndex:textInputZindex,
              opacity:textInputOpacity,
              transform:[{translateY:textInputY}],
              height:height*3/4, ...StyleSheet.absoluteFill,top:null,justifyContent:'flex-start'}}>
            <TextInput
              placeholder ="Email"
              autoFocus={true}
              style={styles.textInput}
              placeholderTextColor="black"/>
            <TextInput
                placeholder ="Email"
                style={styles.textInput}
                placeholderTextColor="black"/>
            <Animated.View style={{ ...styles.button,}}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Submit</Text>
            </Animated.View>
          </Animated.View>
        
        </View>
      </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    inner: {
      padding: 24,
      flex: 1,
      justifyContent: "space-around"
    },
    header: {
      fontSize: 36,
      marginBottom: 48
    },
  
    btnContainer: {
      backgroundColor: "white",
      marginTop: 12
    },
    button: {
      backgroundColor: 'white',
      height: 70,
      marginHorizontal: 20,
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 5
    },
    textInput:{
      height:50,
      borderRadius:25,
      borderWidth:0.5,
      marginHorizontal:20,
      paddingLeft:10,
      marginVertical:5,
      borderColor:'rgba(0,0,0,0.2)'
    }
  });
  
export default LoginScreen;

{/* <View style={styles.screenContainer}>
            <View style={styles.topVer}>

            </View>
            <View style={styles.bottomView}>

            </View>
        </View> */}