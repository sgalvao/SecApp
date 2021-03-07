
import {StyleSheet} from 'react-native';

const css = StyleSheet.create ({
    
    
    container:{ // CONTAINER PAGINA
        flex:1,
        backgroundColor:'#21252B',
        justifyContent:'center',
        paddingHorizontal:30,
    
    }, 
    modalViewContainer:{
        backgroundColor:'#fff',
        height:130,
        alignItems:'center',
        justifyContent:'center',
        opacity:0.8,
        borderColor:'#7B14C3',
        borderRadius:7,
        borderWidth:0.5,

    },
    modalText:{
        color:'#333',
        fontSize:16,
        fontWeight:'bold',
        marginBottom:30,
    
    },
    modalButton:{
        backgroundColor:'#7B14CD',
        height:40,
        width:120,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7,
    },
    headingContainer:{ // CONTAINER DA HEADER
        flexDirection:'row',
        marginBottom:40,
        
    },
    headingTxt:{ // TEXTO DA HEADER 
        color:'#f0f2f3',
        fontSize:30,
        fontWeight:'bold',
        opacity:0.7

    },
    formContainer:{
        width:'100%',
        marginBottom:35,
        justifyContent:'center'
    
    },
    formTxt:{
        fontSize:14,
        color:'#fff',
        marginTop:25,

    },
    formInput:{
        fontSize:16,
        color:"#21252B",
        width:'100%',
        height:50,
        backgroundColor:'#fff',
        padding:10,
        borderStartWidth : 1,
        borderEndWidth : 1,
        borderTopWidth : 2,
        borderBottomWidth : 2,
        borderLeftWidth: 1.5,
        borderRightWidth: 1,
        borderRadius:4,
        borderColor: '#7B14CD'

    },
    containerBtnRegister:{
        width:'100%',
        alignItems:'center',
        marginBottom:30,

    },
    btnRegister:{
        backgroundColor:'#7B14CD',
        width: 150,
        height:35,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:6,

    },
    btnRegisterTxt:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold',

    },
    returnTxt:{ // TEXTO DE RETORNAR AO LOGIN
        color:'grey',
        fontSize:12,

    },
    returnBtn:{ // BOTÃO DE RETORNAR AO LOGIN
        marginLeft:5, 
        
    },
    returnBtnTxt:{ // TEXTO DO BOTÃO DE RETORNAR AO LOGIN
        color:'purple',
        fontSize:14,
        fontWeight:'bold',

    },
    footerContainer:{
        
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
    

})

export {css}