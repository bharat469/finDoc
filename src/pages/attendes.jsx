import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/header'
import DynamicBoxLayout from '../components/DynamicBoxLayout'
import { COLORS } from '../helpers/colors'
import KeyAspectsScreen from '../components/keyAspects'

const {width,height}=Dimensions.get('window')
const Attendes = () => {
  return (
    <View style={{flex:1,backgroundColor:COLORS.white}}>
      <Header/>
      <ScrollView>
      <View style={styles.attendStyle}>
      <Text style={styles.attendText}>Who Can Attend?</Text>
      <DynamicBoxLayout />
      </View>
      <View style={styles.attendStyle}>
      <Text style={styles.attendText}>Key Aspects of The Event</Text>
      <KeyAspectsScreen/>
      <View style={{height:height/8}} />
      </View>
      </ScrollView>

    </View>
  )
}

export default Attendes

const styles = StyleSheet.create({
    attendText:{
        fontSize:22,
        textAlign:'center',
        marginVertical:12,
        color:COLORS.black,
        fontWeight:'700'
      },
      attendStyle:{
        marginBottom:22
      }
})