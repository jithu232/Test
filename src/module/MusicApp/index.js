import React, { useEffect,useState,useRef } from 'react';
import {StyleSheet,Text,View,Animated} from 'react-native';
import {TapGestureHandler,State} from 'react-native-gesture-handler';
function Anima(){
const [largura,setLargura]=useState(new Animated.Value(0))
const [alture,setAlture]=useState(new Animated.Value(30))//new Animated.Value(0)

const fadeAnim = useRef(new Animated.Value(0)).current 

const onStateChange=()=>{
  Animated.timing(
    fadeAnim,
    {
      toValue: 1,
      duration: 10000,
    }
  ).start();
}

Animated.sequence([
Animated.timing(
  largura,{
    toValue:420,
    duration:2000,
  }
),Animated.timing(
  alture,{
    toValue:500,
    duration:1000,
  }
)]).start();


// Animated.sequence([
//   Animated.timing(
//     largura,{
//       toValue:420,
//       duration:2000,
//     }
//   ),
//   Animated.timing(
//     hStart,{
//       toValue:500,
//       duration:1000,
      
//     }
//   )
// ]).start();

return(
  <View style={styles.container}>

    <Animated.View 
    style={{width:largura,height:alture,backgroundColor:'#000'}}>

    </Animated.View>
    <TapGestureHandler onHandlerStateChange={onStateChange}>
            <Animated.View
              style={{
                ...styles.button,
                opacity: fadeAnim
          
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Login with User ID</Text>
            </Animated.View>
          </TapGestureHandler>
  </View>
);
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});
export default Anima;