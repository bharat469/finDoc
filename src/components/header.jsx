import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from '../assets/svg/logo.svg'
import LogoSecondary from '../assets/svg/secondaryLogo.svg'

const Header = () => {
  return (
    <View style={styles.headerStyle}>
     <Logo/>
      <LogoSecondary/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerStyle:{
       
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:22,
        marginVertical:22,
       
    }
})