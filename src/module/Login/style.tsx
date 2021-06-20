import {StyleSheet}from 'react-native';
export const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: "center",
    
      },
      topVer:{
        flex:0.5, //height (according to its parent)
        flexDirection: 'column', //its children will be in a row
        alignItems: 'center',
        backgroundColor: 'blue',
        // alignSelf: 'center',
      },
      bottomView:{
        flex:0.5, //height (according to its parent)
        flexDirection: 'column', //its children will be in a row
        alignItems: 'center',
        backgroundColor: 'orange',
        // alignSelf: 'center',
      },
})