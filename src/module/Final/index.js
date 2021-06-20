import React, { useEffect, useRef, useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Animated,
  Button,
  TextInput,
  Keyboard,
  Easing,
  KeyboardAvoidingView,Dimensions
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { TapGestureHandler } from 'react-native-gesture-handler';
const {width,height}=Dimensions.get('window')
function Final() {
    const isDarkMode = useColorScheme() === 'dark';
    const animated = new Animated.Value(0);
    const animated1 = new Animated.Value(0);
    const animated2 = new Animated.Value(0);
    const duration = 2000;

    const [autoFocus, setAutoFocus] = React.useState(false);
    const fadeAnim = useRef(new Animated.Value(1)).current 


    const fadeAnimIn = useRef(new Animated.Value(0)).current;
    const inputE = useRef();
    const inputB = useRef();
    const [hide, setHide] = useState(false)


    const onStateChange=()=>{
        setAutoFocus(true);
        
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
    <View style={{ flex: 1, backgroundColor:'red' }}>
        <View style={{justifyContent:'flex-end',flexDirection: "row"}}>
            <Text style={{padding: 10,
                    borderRadius: 10,
                    borderColor: "#000000",
                    width:100,
                    borderWidth: 1,
                    textAlign: 'right',
                    color: "#ffffff",
                    fontSize:20,
                    marginTop:100,
                    marginEnd:30,}}>
                        Register
            </Text>
        </View>
        {autoFocus?
        <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ backgroundColor:'red',
                height:height*3/4+50, ...StyleSheet.absoluteFill,top:null,justifyContent:'flex-start'}}>
                <View style={{ 
                height:height*3/4+50, ...StyleSheet.absoluteFill,top:null,justifyContent:'flex-start'}}>
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
              </View>
              </KeyboardAvoidingView>:
            
            
        <View 
                style={{height:height/3,
                ...StyleSheet.absoluteFill,top:null,justifyContent:'flex-start',backgroundColor:'#EFEBE9'}}>
              <TapGestureHandler onHandlerStateChange={onStateChange} >
                  <View
                    style={{backgroundColor: 'black',
                    height: 70,
                    marginHorizontal: 20,
                    marginTop:50,
                    borderRadius: 35,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginVertical: 5}}>
                      <Text style={{fontSize: 18,
                            color: "#fff",
                            fontWeight: "bold",
                            alignSelf: "center",}}>{"Login with User ID"}</Text>
                  </View>
                </TapGestureHandler>
                
        </View>}

    </View>
    )
}
export default Final;