import React, { Component } from 'react';
import { View, Text,TextInput,NativeModules, StyleSheet,KeyboardAvoidingView, Image, Dimensions,Animated } from 'react-native';
import { useRef, useState, useEffect } from 'react';
import { TapGestureHandler } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');
import AppTextBox from '../../component/base_component/AppTextBox';
function Sample(){
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
    //   const backButtonY = fadeInAnim.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [0, 10],
    //     extrapolate: 'clamp'
    //   });
      
    turnOn = () => {
      // NativeModules.GetIP.turnOn();
      NativeModules.RcvDeviceInfo.getStatus((error, ipAddress) => {
        setDeviceId(ipAddress);
        console.log(deviceID)
      });
    };
    const bgY = fadeAnim.interpolate({
        inputRange: [0,1],
        outputRange: [-height/2, 0],
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



            
              setAutoFocus(false);
            }      
    return (
        <View
            style={{
            flex: 1,
            backgroundColor: 'white',
            
        }}>
            
            <Animated.View style={{backgroundColor:'red',
                ...StyleSheet.absoluteFill,transform: [{ translateY: bgY }]
                
            }}>
                <Text style={{fontSize:30,
                color:'white',
                fontWeight:'bold',
                marginTop:160,
                marginStart:20,}}>RAKBANK</Text>
                <Text style={{fontSize:16,
                color:'white',
                fontStyle:'normal',
                marginTop:10,
                marginStart:20}}>Everything you love about{"\n"}
        Digital Banking in a smarter,{"\n"}
        simpler design</Text>
            </Animated.View>
            <View style={{ flexDirection:'row' }}>
            <TapGestureHandler onHandlerStateChange={onClose} >
                <Animated.View style={{flex:1,opacity:fadeInAnim}}>
                
                    <Image source={require('../../assets/back.png')}
                        style={{ height: 24, width: 24, 
                                alignSelf:'flex-start',
                                marginTop:60,
                                marginStart:10,
                                }}
                        />
                         
                </Animated.View>
            </TapGestureHandler>
            <View style={{flex:1,flexDirection:'row-reverse' }}>
                    <Text style={{padding: 10,
                            borderRadius: 12,
                            borderColor: "#FFFFFF",
                            opacity:.9,
                            borderWidth: 1,
                            textAlign: 'right',
                            color: "#ffffff",
                            fontSize:16,
                            alignSelf:'flex-end',
                            marginTop:50,
                            marginEnd:20,}}>
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
                marginTop:100,
             }} >
                <View
                  style={{height:80,
                    backgroundColor: "white",
                    borderRadius: 10,
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    marginTop:10,
                    marginHorizontal:20,marginVertical:20}}>
                  <AppTextBox
                  onChangeText={email => setEmail(email)}
                  text={email} type="Email" secure={true} autoFocus={autoFocus}
                    />
                </View>
                <View
                  style={{
                    height:80,
                    backgroundColor: "white",
                    borderRadius: 10,
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    marginTop:10,
                    marginHorizontal:20,marginVertical:20
                  }}>
                  <AppTextBox
                    onChangeText={password => setPassword(password)}
                    text={password} type="Password" true/>
                    {/* placeholder ="Password"
                    autoFocus={false}
                    placeholderTextColor="black" */}
                </View>
                <View style={{backgroundColor: 'black',
                    height: 70,
                    marginHorizontal: 20,
                    borderRadius: 35,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginVertical: 5}}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' ,color:'white'}}>Submit</Text>
                </View>
            </Animated.View>
            </KeyboardAvoidingView>
            <View style={{ height:height/3+100,justifyContent: 'flex-start' ,backgroundColor:'#EFEBE9' }}>
                <TapGestureHandler onHandlerStateChange={onStateChange} >
                    <Animated.View
                        style={{
                            
                        backgroundColor: 'black',
                        height: 70,
                        marginHorizontal: 20,
                        borderRadius: 35,
                        marginTop:20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        
                        opacity:fadeAnim,
                            transform: [{ translateY: buttonY }],}}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold',color:'white' }}>SIGN IN</Text>
                    </Animated.View>
                </TapGestureHandler>
          </View>
        </View>)
}
export default Sample;