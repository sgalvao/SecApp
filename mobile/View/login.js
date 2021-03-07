import React, { useState, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, KeyboardAvoidingView,
  Image, TextInput, Platform, Animated, Keyboard} from 'react-native';
import { css } from '../assets/css/LoginCss';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as LocalAuthentication from 'expo-local-authentication';

export default function Login({ navigation }) {


  const [display, setDisplay] = useState('none');
  const [InvalidUser, setInvalidUser] = useState()
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [login, setLogin] = useState(false);

  
  useEffect(()=> {
    verifyLogin();
  },[]);

  useEffect(()=> {
    if(login === true){
      biometric();
    }
  },[login])

  async function verifyLogin(){

    let response = await AsyncStorage.getItem('userData');
    let json = await JSON.parse(response);
    console.log(json)
    if(json !== null){
      setUsername(json.username);
      setPassword(json.password)
        setLogin(true)
    }


  }


  async function biometric(){
    let compatible = await LocalAuthentication.hasHardwareAsync();
    if(compatible){
     let biometricRecords = await LocalAuthentication.isEnrolledAsync();
      if(!biometricRecords){
        alert ('Biometria não cadastrada!');

      }else{
        let result= await LocalAuthentication.authenticateAsync();
        if (result.success){
            sendForm();
        }else{
          setUsername(null);
          setPassword(null)
        }
      }
    
    }

  }



  async function sendForm() {      
    let responseAPILogin = await fetch('http://192.168.0.111:3000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    });
    
    let json = await responseAPILogin.json()
    
    if(json.error){
      setDisplay('flex')
      setInvalidUser('#DA012F')
      setTimeout(()=>{
        setDisplay('none')
        setInvalidUser('#7B14CD')
      }, 3000)
      await AsyncStorage.clear();
    }else {
      await AsyncStorage.setItem('userData', JSON.stringify(json))
      navigation.navigate('UserArea') 
    }
  }
  
  const [opacityState] = useState(new Animated.Value(0));
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
  const [logo] = useState(new Animated.ValueXY({ x: 190, y: 190 }))


  useEffect(() => {
    KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 1,
        bounciness: 10,
        useNativeDriver: true
      }),
      Animated.timing(opacityState, {
        toValue: 1,
        duration: 900,
        useNativeDriver: true
      })
    ]).start()
  }, []);

  function keyboardDidHide(){
    Animated.parallel([
      
      Animated.timing(logo.x,{
        toValue:190,
        duration:450,
        useNativeDriver:false
      }),
      Animated.timing(logo.y,{
        toValue:190,
        duration:450,
        useNativeDriver:false
      }),
    ]).start();
  }

  function keyboardDidShow(){
    Animated.parallel([
      
      Animated.timing(logo.x,{
        toValue:120,
        duration:450,
        useNativeDriver:false
      }),
      Animated.timing(logo.y,{
        toValue:120,
        duration:450,
        useNativeDriver:false
      }),
    ]).start();
  }



  return (

    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={css.container}>
      <View style={css.containerLogo}>
        <Animated.Image style={{
          width: logo.x,
          height: logo.y
        }}
          source={require('../assets/img/logoIcon.png')} />
      </View>
      <Animated.View style={[
        css.containerInput, {
          opacity: opacityState
        },
        {
          transform: [
            { translateY: offset.y }
          ]
        }
      ]}>
        <Text style={css.errorText(display)}>Usuário ou senha invalida!</Text>
        <Text style={css.userInputDescription}> Username</Text>
        <TextInput
          style={css.inputForm(InvalidUser)}
          placeholder='Digite seu usuário..'
          onChangeText={text => setUsername(text)}
          autoCorrect={false}/>
        <Text style={css.userInputDescription}> Password </Text>
        <TextInput
          style={css.inputForm(InvalidUser)}
          placeholder='Digite sua senha..'
          onChangeText={text => setPassword(text)}
          autoCorrect={false} secureTextEntry={true} />

        <TouchableOpacity
          onPress={sendForm}>
          <Image source={require('../assets/img/loginButtonIcon.png')} style={css.loginButton} />
        </TouchableOpacity>


        <TouchableOpacity
          style={css.signUpBtn}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={css.signUpTxt}> Criar conta</Text>
        </TouchableOpacity>

      </Animated.View>

    </KeyboardAvoidingView>
  )
}

