import React, { Component } from 'react';
import { View, Text,TextInput, StyleSheet,KeyboardAvoidingView, Image, Dimensions,Animated } from 'react-native';
import { useRef, useState, useEffect } from 'react';
import { TapGestureHandler } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');
function MovingAnim() {
    const fadeAnim = useRef(new Animated.Value(1)).current 
    const [autoFocus, setAutoFocus] = React.useState(false);
    const buttonY = fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [100, 0],
        extrapolate: 'clamp'
      });
  
    const bgY = fadeAnim.interpolate({
        inputRange: [0,1],
        outputRange: [-height/3, 0],
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
        Animated.timing(
            fadeAnim,
            {
              toValue: 0,
              duration: 1000,
              useNativeDriver: true
            }
          ).start();
          setAutoFocus(true);
        }   
        
    return (
        <View
            style={{
            flex: 1,
            backgroundColor: 'white',
            
        }}>


    {/* justifyContent: 'flex-end' */}
          
        <Animated.View style={{
            ...StyleSheet.absoluteFill,
            transform: [{ translateY: bgY }]
          }}>
          <Image
            source={require('../../assets/bg.jpg')}
            style={{ flex: 2, height: null, width: null }}
          />
        </Animated.View>
        {autoFocus?
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{backgroundColor:'red'}}>
            <Animated.View style={{
                zIndex:textInputZindex,
                opacity:textInputOpacity,
                transform:[{translateY:textInputY}],
                backgroundColor:'#EFEBE9',
                marginTop:150,
                height:height*3/4, ...StyleSheet.absoluteFill,top:null,justifyContent:'flex-start'}} >
                <View
                  style={{height:80,
                    backgroundColor: "white",
                    borderRadius: 10,
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    marginTop:10,
                    marginHorizontal:20,marginVertical:20}}>
                  <TextInput
                    placeholder ="Email"
                    autoFocus={true}
                    placeholderTextColor="black"/>
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
                  <TextInput
                    placeholder ="Password"
                    autoFocus={false}
                    placeholderTextColor="black"/>
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
        </KeyboardAvoidingView>:
        <View style={{ height: height / 2-100, justifyContent: 'flex-start' ,backgroundColor:'white' }}>
        <TapGestureHandler onHandlerStateChange={onStateChange}>
            <Animated.View
              style={{
                ...styles.button,
                opacity:fadeAnim,
                transform: [{ translateY: buttonY }]
              }}
            >
          
            <Text style={{ fontSize: 20, fontWeight: 'bold',color:'white' }}>SIGN IN</Text>
          </Animated.View>
          </TapGestureHandler>
          
        </View>
}
        <View style={{ justifyContent:'flex-end',alignItems:'flex-end', flexDirection: "row",backgroundColor:'red'}}>
            <Text style={{padding: 10,
                    borderRadius: 10,
                    borderColor: "#000000",
                    width:100,
                    borderWidth: 1,
                    textAlign: 'right',
                    color: "#ffffff",
                    fontSize:20,
                    
                    marginEnd:30,}}>
                        Register
            </Text>
        </View>
      </View>
    )
}
export default MovingAnim;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    button: {
      backgroundColor: 'black',
      height: 70,
      marginHorizontal: 20,
      borderRadius: 35,
      marginTop:20,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 5
    }
  });