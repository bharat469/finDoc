import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Register from '../screen/auth/Register';
import Login from '../screen/auth/Login';

const {Navigator,Screen}=createStackNavigator();
const AuthStack = () => {
    
  return (
    <Navigator initialRouteName='Register' screenOptions={{headerShown:false,    cardStyle: { backgroundColor: 'white' }}}>
      <Screen name='Register' component={Register}/>
      <Screen name='Login' component={Login}/>
    </Navigator>
  )
}

export default AuthStack