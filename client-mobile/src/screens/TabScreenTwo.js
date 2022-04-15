import React, { createContext, useContext, useState } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { CartContext } from '../components/Tabs'

function TabScreenTwo({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Text>NewTab 2</Text>
    </View>
 );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 10,
  },
})

export default TabScreenTwo
