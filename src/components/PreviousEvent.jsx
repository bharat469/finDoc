import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Button from './Button';
import { COLORS } from '../helpers/colors';

const {width,height}=Dimensions.get('window')
const PreviousEvent = () => {
  return (
    <View style={styles.previousEvent}>
        <Image source={require('../assets/png/logo2.png')} style={{width:200,height:150}} resizeMode='contain'/>
      <Text style={styles.previousText}>PreviousEvent</Text>
      <Text style={styles.previousSubview}>
        Traders for Life is an Event that will provide a wealth of information
        to all financial and stock market innovators through a series of
        prominent speaker sessions and discussions.
      </Text>
   <TouchableOpacity style={styles.btnStyles}>
    <Text>View More</Text>
   </TouchableOpacity>
   <Image source={require('../assets/png/homePage.png')} style={{width:400,height:400,right:22}} />
    </View>
  );
};

export default PreviousEvent;

const styles = StyleSheet.create({
    btnStyles:{
        borderWidth:1,
        padding:12,
        marginVertical:22,
        width:width/3,
        borderRadius:30,
        alignItems:'center'
    },
    previousEvent:{
        marginHorizontal:22,
        marginVertical:12
    },
    previousText:{
        fontSize:28,
        color:COLORS.primaryColor,
        fontWeight:'800'
    },
    previousSubview:{
      fontSize:18,
      color:COLORS.black,
      fontWeight:'600'
    }
});
