import {StyleSheet} from 'react-native';

const css = StyleSheet.create({

container:{
    flex:1,
    backgroundColor:'#21252B',
    // alignItems:'center',
    // justifyContent:'center'

},

logoIcon:{
    marginTop:60,
    width:160,
    height:160,
    alignSelf:'center',
    marginBottom:40,
},

title:{

    fontSize:26,
    fontWeight:'bold',
    color:'#f0f2f3',
    marginLeft:20,
    marginBottom:50,
    alignSelf:'flex-start',
    borderWidth:0,
    
},

inputFormText:{
    padding:10,

},

inputFormView:{
    width:'90%',
    height:40,
    alignSelf:'center',
    justifyContent:'center',
    backgroundColor:'#f0f2f3',
    borderRadius:7,
    marginBottom:20,
},

button:{
    width:'40%',
    height:30,
    backgroundColor:'#7B14C3',
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
},

buttonText:{
    color:'#f0f2f3',
    fontWeight:'bold',
    fontSize:16

}




})


export  {css};