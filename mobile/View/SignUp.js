import React, {useState, useEffect} from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native';
import { css } from '../assets/css/SignUpCss'
import Modal from 'react-native-modal';



export default function signUp({ navigation }) {
    // FORMS STATES
    const [username,setUsername] = useState();
    const [password, setPassword] = useState();
    const [rePassword, setRePassword] = useState();

    // MODAL STATES
    const [modalTextError, setModalTextError] = useState();
    const [modalError, setModalError] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);

    async function sendForm() {
        
        if (username === '' || password === '' || rePassword === ''){
            setModalTextError('Preencha todos os campos!');
            setModalError(true)
            return console.log('campos vazios')
        }
        if (password !== rePassword){
            setModalTextError(" Senhas Incompatíveis!")
            setModalError(true)

            return console.log('senhas incompatíveis')
        }

        fetch('http://192.168.0.111:3000/register', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username,
            password,
            rePassword
            
          }),
          
        }).then(res => {
             if (res.status === 400){
             return (
                 setModalTextError(" Usuário ja existe!"),
                 setModalError(true)
             )
            }else setModalSuccess(true)
        })
           

    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={css.container}>

            <Modal isVisible={modalSuccess} style={css.modalContainer}>
                <View  style={css.modalViewContainer}>
                    <Text style={css.modalText}>
                        Cadastro efetuado com Sucesso!
                    </Text>
                    <TouchableOpacity onPress={() => {
                        setModalSuccess(false)
                        navigation.navigate('Login')
                    }} style={css.modalButton}>
                        <Text style={{color:'#fff'}}>
                            Efetuar Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <Modal isVisible={modalError} style={css.modalContainer}>
                <View  style={css.modalViewContainer}>
                    <Text style={css.modalText}>
                        {modalTextError}
                    </Text>
                    <TouchableOpacity onPress={() => {
                        setModalError(false)
                    }} style={css.modalButton}>
                        <Text style={{color:'#fff'}}>
                            Continuar
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>
 
            <View style={css.headingContainer}>
                <Text style={css.headingTxt}>Register</Text>
            
            </View>

            <View style={css.formContainer}>
                <Text style={css.formTxt} >Usuário/Email</Text>
                <TextInput
                    style={css.formInput}
                    placeholder='Usuário..'
                    onChangeText={text => setUsername(text) }
                    autoCorrect={false} />
                <Text style={css.formTxt} >Digite sua senha</Text>
                <TextInput
                    style={css.formInput}
                    placeholder='Digite uma senha..'
                    onChangeText={text => setPassword(text) }
                    autoCorrect={false}
                    secureTextEntry={true} />
                <Text style={css.formTxt}>Repita a senha</Text>
                <TextInput
                    style={css.formInput}
                    placeholder='Repita sua senha..'
                    onChangeText={text => setRePassword(text) }
                    autoCorrect={false}
                    secureTextEntry={true}
                    />
            </View>
            <View style={css.containerBtnRegister}>
                <TouchableOpacity onPress={sendForm} style={css.btnRegister}>
                    <Text style={css.btnRegisterTxt}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>
            </View>
            
            <View style={css.footerContainer}>
                <Text style={css.returnTxt}> Já tem uma conta?</Text>
                <TouchableOpacity
                    style={css.returnBtn}
                    onPress={() => navigation.navigate('Login')} >
                    <Text style={css.returnBtnTxt}>Login</Text>
                </TouchableOpacity>
                
            </View>
        </KeyboardAvoidingView>
                        

    )
    }
