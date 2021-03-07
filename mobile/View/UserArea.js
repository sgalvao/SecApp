import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Image, Keyboard, Animated, Platform} from 'react-native';
import {css} from '../assets/css/UserAreaCss';


export default function UserArea ({navigation}){

  
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={css.container}>
      <View>
        <Image style={css.logoIcon} source={require('../assets/img/logoIcon.png')}/>
      </View>
      <View>
        <Text style={css.title}>Conecte seu dispositivo</Text>
      </View>
      <View style={css.inputFormView}>
        <TextInput
        style={css.inputFormText}
        placeholder='Nome do dispositivo..'
        onChangeText={() => {}}/>
      </View> 
      <View style={css.inputFormView}>
        <TextInput
        style={css.inputFormText}
        placeholder='Insira o endereço da camera..'
        onChangeText={() => {}}/>
      </View>
      <TouchableOpacity
      style={css.button}
      onPress={() => {}}
      >
        <Text style={css.buttonText}>Confirmar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );

};
