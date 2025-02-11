import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../helpers/colors'

const {width,height}=Dimensions.get('window')
const Button = ({btnName='Submit',btnStyles={}}) => {
  return (
  <TouchableOpacity style={[styles.btnStyle,btnStyles]}>
    <Text style={{color:COLORS.white,fontSize:18,fontWeight:'700'}}>{btnName}</Text>
  </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    btnStyle:{
        backgroundColor:COLORS.primaryColor,
        marginVertical:23,
        padding:12,
        alignItems:'center',
        bottom:32,
        // width:width,
        borderRadius:12,
        marginHorizontal:22
    }
})