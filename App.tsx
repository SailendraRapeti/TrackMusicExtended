import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from './components/Splash'
import BottomTab from './components/BottomTab'

const stack=createStackNavigator()

export class App extends Component {
  render() {
    return (
     <NavigationContainer>


      <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen name="Splash" component={Splash}/>
        <stack.Screen name="BottomTab" component={BottomTab}/>
      </stack.Navigator>


     </NavigationContainer>
    
    )
  }
}

export default App