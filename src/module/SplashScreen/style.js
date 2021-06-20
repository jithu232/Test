import {StyleSheet}from 'react-native';
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    textHeader:{
        fontSize:30,
        color:'white',
        fontWeight:'bold',
        marginTop:160,
        marginStart:20
    },
    textSub:{
        fontSize:16,
        color:'white',
        fontStyle:'normal',
        marginTop:10,
        marginStart:20
    },
    imgBack:{
        height: 24,
        width: 24, 
        alignSelf:'flex-start',
        marginTop:60,
        marginStart:10,
    },
    regView:{
        padding: 10,
        borderRadius: 12,
        borderColor: "#FFFFFF",
        opacity:.9,
        borderWidth: 1,
        textAlign: 'right',
        color: "#ffffff",
        fontSize:16,
        alignSelf:'flex-end',
        marginTop:50,
        marginEnd:20
    },
    emailView:{
        height:80,
        backgroundColor: "#EFEBE9",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop:10,
        marginHorizontal:20,marginVertical:20
    },
    buttonView:{
        backgroundColor: 'black',
        height: 70,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    }
    

})