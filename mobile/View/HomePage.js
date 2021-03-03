import React from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import {css} from '../assets/css/homePageCss';

export default function HomePage({navigation}){
  return( 

          <View style={css.container}>
              
            <TouchableOpacity
            onPress={ ()=> navigation.navigate('Login')}>
                <Image style={css.imageButton} source={require('../assets/img/logoIcon.png')}/>

            </TouchableOpacity>
             
          </View>
  )}

