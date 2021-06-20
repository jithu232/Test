import React  from 'react';
import {View,Animated,StyleSheet,Text,KeyboardAvoidingView, Button,TouchableWithoutFeedback,Keyboard,TouchableOpacity,Dimensions}from 'react-native';

import AppButton from '../../component/base_component/AppButton';
import OuterBox from '../../component/base_component/OuterBox';
import AppTextBox from '../../component/base_component/AppTextBox';
import { TextInput } from 'react-native-paper';
import { useRef, useState, useEffect } from 'react';
import { TapGestureHandler } from 'react-native-gesture-handler';




const {width,height}=Dimensions.get('window')
function userChangePwd(){
  setLoading(true) 
  fetch(baseUrl+'users/change',{
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'AutoAid-Token':'1234567',
        'AutoAid-User-Token': 'bearer '+token
    },
    body: JSON.stringify({
      current_password: cuPassword,
      password: password,
      
    })
})
.then((response) => response.json())
.then((json) =>{
  console.log('response object:',json)
  if(json.succces){
    alertHandler("Success!","Your password has been changed successfully")
  }else{
    alertHandler("invalid password","Please check your current password")
  }
})
.catch((error) => console.error("error",error))
.finally(() => setLoading(false));
 
}

function SplashScreen() {
    const [user, setUser] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [autoFocus, setAutoFocus] = React.useState(false);
    const fadeAnim = useRef(new Animated.Value(1)).current 
    
    
    
    const onStateChange=()=>{
      setAutoFocus(true);
      console.log("deviceName-",deviceName)
      Animated.timing(
          fadeAnim,
          {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
          }
        ).start();
      }   
      // useEffect(() => {
      //   Animated.timing(
      //     fadeAnim,
      //     {
      //       toValue: 1,
      //       duration: 10000,
      //       useNativeDriver: true
      //     }
      //   ).start();
      // }, [fadeAnim])

      const buttonY = fadeAnim.interpolate({
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
    return (
      <View >
 <Text style={{textAlign:'right',backgroundColor:'red',marginTop:150, width:"100%",position:'static',top:10}}>
        abcd
      </Text>
      
      <View style={{flex:1,backgroundColor:'#EFEBE9',justifyContent:'flex-end'}}>
       
        {autoFocus?
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}>
      <Animated.View 
              
              style={{
                zIndex:textInputZindex,
                opacity:textInputOpacity,
                transform:[{translateY:textInputY}],
                
                height:height*3/4+50, ...StyleSheet.absoluteFill,top:null,justifyContent:'flex-start'}}>
               <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container1}
      >
                <View
                  style={styles.outerBoxContainer}>
                  <TextInput
                    placeholder ="Email"
                    autoFocus={true}
                    
                    placeholderTextColor="black"/>
                </View>
                <View
                  style={styles.outerBoxContainer}>
                  <TextInput
                    placeholder ="Password"
                    autoFocus={false}
                    placeholderTextColor="black"/>
                </View>
              <Animated.View style={{ ...styles.button2,}}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' ,color:'white'}}>Submit</Text>
              </Animated.View>
              </KeyboardAvoidingView>
            </Animated.View>
    </KeyboardAvoidingView>:



        <View style={{flex:1,backgroundColor:'#EFEBE9',justifyContent:'flex-end'}}>
            <Animated.View style={{...StyleSheet.absoluteFill,backgroundColor:'red', transform: [{translateY:buttonY}]}}>
            
            </Animated.View>
            
            <View style={{height:height/2,backgroundColor:'#EFEBE9'}}>
              <TapGestureHandler onHandlerStateChange={onStateChange}>
                  <Animated.View
              
                    style={{...styles.button,opacity:fadeAnim}}>
                      <Text style={styles.appButtonText}>{"Login with User ID"}</Text>
                  </Animated.View>
                </TapGestureHandler>
                
            </View>




</View>
}

</View>
</View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      
      backgroundColor:'red',
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
    textInput: {
      height: 40,
      borderColor: "#000000",
      borderBottomWidth: 1,
      marginBottom: 36
    },
    btnContainer: {
      backgroundColor: "white",
      marginTop: 12
    },
    container1: {
      ...StyleSheet.absoluteFillObject,
      alignSelf: 'flex-end',
      marginTop: -5,
      position: 'absolute', // add if dont work with above
    },
    appButtonContainer: {
        height:50,
     
      justifyContent: 'center',
      backgroundColor: "#000000",
      borderRadius: 50,
      paddingVertical: 10,
      paddingHorizontal: 10
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
    
      fontWeight: "bold",
      alignSelf: "center",
      
    },
    button: {
      backgroundColor: 'black',
      height: 70,
      marginHorizontal: 20,
      marginTop:50,
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 5
    },
    button2: {
      backgroundColor: 'black',
      height: 70,
      marginHorizontal: 20,
      
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 5
    },
    outerBoxContainer: {
      height:80,
      backgroundColor: "white",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 10,
      marginTop:10,
      marginHorizontal:20,marginVertical:20
  }
  })
  export default SplashScreen;
