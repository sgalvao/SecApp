
import {StyleSheet} from 'react-native';



const css =StyleSheet.create({
    container:{ // CONTAINER PAGINA LOGIN
        flex:1,
        backgroundColor:'#21252B',
        alignItems:'center',
        justifyContent:'center'
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
    containerLogo:{ // CONTAINER DO LOGOTIPO
        flex:1,
        justifyContent:'center',
        
    },
    logoIcon:{ //ICON LOGOTIPO
        width:120,
        height:120,
        marginBottom: 20,
        alignSelf:'flex-start'
    },
    errorText:(text='none')=>({ // DISPLAY DE USUÁRIO INVALIDO
        fontSize:15,
        color:'#DA012F',
        marginBottom:10,
        display: text,
    }),
    containerInput:{ // CONTAINER DO FORMULÁRIO
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:'90%',

    },
    userInputDescription:{ // TEXTO USUARIO E SENHA EM CIMA DA CAIXA DO INPUT
        color:'#fff',
        marginRight:240,
        marginTop:10,


    },
    inputForm:(condition='#7B14CD')=>({ //INPUT FORMULÁRIO

        fontSize:16,
        color:"#21252B",

        width:'90%',
        height:50,
        backgroundColor:'#fff',
        
        padding:10,
        
        
        borderStartWidth : 1,
        borderEndWidth : 1,
        
        borderTopWidth : 2,
        borderBottomWidth : 2,
        
        borderLeftWidth: 1.5,
        borderRightWidth: 1,

        borderRadius:2,
        borderColor: condition
    }),

    loginButton:{ // BOTÃO DE LOGIN
        width: 100,
        height: 100,
    },

    


    signUpBtn:{ // BOTÃO DE REGISTRO
        marginBottom:25,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#7B14CD',
        width:"50%",
        height:30,
        opacity:0.9,
        borderRadius:6,
    },
    signUpTxt:{ // TEXTO BOTÃO DE REGISTRO
        color:'#f0f2f3',
        fontSize: 14,
        fontWeight:'bold',
        

    }
})

export {css};






    