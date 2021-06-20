import React, { useEffect, useRef, useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  KeyboardAvoidingView,
  Image,
  View,
  Animated,
  Button,
  TextInput,
  Keyboard,
  Easing
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function KeyBo(){
  const isDarkMode = useColorScheme() === 'dark';
  const animated = new Animated.Value(0);
  const animated1 = new Animated.Value(0);
  const animated2 = new Animated.Value(0);
  const duration = 2000;

  const fadeAnim = useRef(new Animated.Value(1)).current;
  const fadeAnimIn = useRef(new Animated.Value(0)).current;
  const inputE = useRef();
  const inputB = useRef();
  const [hide, setHide] = useState(false)

  const start = () => {

    console.log('---Start---')


    Animated.parallel([
      Animated.timing(fadeAnimIn, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.spring(animated, {
        toValue: -500,
        friction: 6,
        duration: duration,
        useNativeDriver: true,
      }),
      
    ]).start(({ finished }) => {
      inputE.current.focus();
      setHide(true)
    });
  }
  const _keyboardDidHide = () => {
    Animated.parallel([
      Animated.spring(animated, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnimIn, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(({ finished }) => {
      setHide(false)
    });
  }
  useEffect(() => {

    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);


    /*Animated.loop(
      Animated.sequence([
        Animated.timing(animated, {
          toValue: 255,
          duration: duration,
          useNativeDriver: true,
        }),
        Animated.timing(animated, {
          toValue: 0,
          duration: duration,
          useNativeDriver: true,
        }),
      ]),
    ).start();*/
  }, []);

      const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      };
    
      return (
        <View
        style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent:'flex-end'
    }}>
<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
<View style={{
            ...StyleSheet.absoluteFill,
            
          }}>
          <Image
            source={require('../../assets/bg.jpg')}
            style={{ flex: 1, height: null, width: null }}
          />
        </View>
</KeyboardAvoidingView>
</View>



        // <View style={{ flex: 1, flexDirection: "column" }}>
        //   <View style={{backgroundColor: 'green'}}>
        //     <Text style={{padding: 10, textAlign: 'right', color: "#ffffff", fontSize:20}}>Register</Text>
        //   </View>
        //   <View style={{ flex: 1, backgroundColor: 'green', justifyContent: 'flex-end' }}>
    
        //     <Animated.View style={[{backgroundColor:"#ffffff", opacity: fadeAnimIn, padding: 5,transform: [{ translateY: animated }] }]}>
        //     <TextInput
        //         style={styles.input}
        //         ref={inputE}
        //         onSelectionChange={() => console.log("===")}
        //       />
        //     </Animated.View>
        //   </View>
        //   {
        //     hide == false
        //     ?
        //     <Button
        //           onPress={(e) => start()}
        //           title="Login with User Id"
        //           color="#841584"
        //           accessibilityLabel="Learn more about this purple button"
        //           style={{position:'static'}}
        //           ref={inputB}
        //         />
        //     :
        //     null
        //   }
          
        // </View>
    
     );
}




const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
export default KeyBo;