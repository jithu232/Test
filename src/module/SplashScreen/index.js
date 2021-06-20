import React, { Component } from 'react';
import { View, Text,TextInput,NativeModules, StyleSheet,KeyboardAvoidingView, Image, Dimensions,Animated } from 'react-native';
import { useRef, useState, useEffect } from 'react';
import { TapGestureHandler } from 'react-native-gesture-handler';
import {styles} from './style';
const { width, height } = Dimensions.get('window');
import AppTextBox from '../../component/base_component/AppTextBox';
function SplashScreen(){
    const fadeAnim = useRef(new Animated.Value(1)).current 
    const fadeInAnim = useRef(new Animated.Value(0)).current 
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [autoFocus, setAutoFocus] = React.useState(false);
    const [deviceID,setDeviceId]=React.useState("")
    const buttonY = fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [100, 0],
        extrapolate: 'clamp'
      });
    
    function userLogin(){
      console.log(deviceID)
        fetch('https://reqres.in/api/login',{
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email:email,
            password:password
            // email: "eve.holt@reqres.in",
            // password: "cityslicka"
            
          })
      })
      .then((response) => response.json())
      .then((json) =>{
        console.log('response object:',json)
      })
      .catch((error) => console.error("error",error))
      .finally(() => {});
       
      }  
    turnOn = () => {
      
      NativeModules.RcvDeviceInfo.getStatus((error, id) => {
        setDeviceId(id);
        console.log(deviceID)
      });
    };
    const bgY = fadeAnim.interpolate({
        inputRange: [0,1],
        outputRange: [-height/2-100, 0],
        extrapolate: 'clamp'
      });
    const textInputZindex= fadeAnim.interpolate({
        inputRange: [0,1],
        outputRange: [1,-1],
        extrapolate: 'clamp'
    });
    
    const textInputY= fadeAnim.interpolate({
        inputRange: [0,1],
        outputRange: [1,100],
        extrapolate: 'clamp'
    });
      const textInputOpacity= fadeAnim.interpolate({
        inputRange: [0,1],
        outputRange: [1,0],
        extrapolate: 'clamp'
    });
    const onStateChange=()=>{
      turnOn()
        Animated.sequence([
          Animated.timing(
            fadeAnim,
            {
              toValue: 0,
              duration: 1000,
              useNativeDriver: true
            }
          ),
          Animated.timing(
            fadeInAnim,
            {
              toValue: 1,
              duration: 500,
              useNativeDriver: true
            }
          )
        ]).start();
        setAutoFocus(true)
    } 
    const onClose=()=>{
        Animated.sequence([
            Animated.timing(
                fadeInAnim,
                {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
                }
            ),
            Animated.timing(
                fadeAnim,
                {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
                }
            )
            
    ]).start();
}      
    return (
        <View style={styles.container}>
          <Animated.View style={{backgroundColor:'red',
                ...StyleSheet.absoluteFill,transform: [{ translateY: bgY }]}}>
              <Text style={styles.textHeader}>RAKBANK</Text>
              <Text style={styles.textSub}>Everything you love about{"\n"}
                Digital Banking in a smarter,{"\n"}
                simpler design
              </Text>
          </Animated.View>
          <View style={{ flexDirection:'row' }}>
              <TapGestureHandler onHandlerStateChange={onClose} >
                  <Animated.View style={{flex:1,opacity:fadeInAnim}}>
                    <Image source={require('../../assets/back.png')}
                          style={styles.imgBack}/>
                  </Animated.View>
              </TapGestureHandler>
              <View style={{flex:1,flexDirection:'row-reverse' }}>
                    <Text style={styles.regView}>
                      Register
                    </Text>
              </View>
          </View>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <Animated.View style={{
              
                zIndex:textInputZindex,
                opacity:textInputOpacity,
                transform:[{translateY:textInputY}],
                backgroundColor:'#EFEBE9',
                marginTop:100,}} >
                <View
                  style={styles.emailView}>
                  <AppTextBox
                    onChangeText={email => setEmail(email)}
                    text={email} type="Email" secure={false} autoFocus={autoFocus}
                  />
                </View>
                <View
                  style={styles.emailView}>
                  <AppTextBox
                    onChangeText={password => setPassword(password)}
                    text={password} type="Password" secure={true}/>
                </View>

                <TapGestureHandler onHandlerStateChange={userLogin}>
                  <View style={styles.buttonView}>
                      <Text style={{ fontSize: 20, fontWeight: 'bold' ,color:'white'}}>Submit</Text>
                  </View>
                </TapGestureHandler>
                
            </Animated.View>
            </KeyboardAvoidingView>
            <View style={{ height:height/3+100,justifyContent: 'flex-start' ,backgroundColor:'#EFEBE9' }}>
                <TapGestureHandler onHandlerStateChange={onStateChange} >
                    <Animated.View
                        style={{...styles.buttonView,
                            opacity:fadeAnim,
                            transform: [{ translateY: buttonY }],}}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold',color:'white' }}>SIGN IN</Text>
                    </Animated.View>
                </TapGestureHandler>
          </View>
        </View>)
}

export default SplashScreen;
