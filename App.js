import { View, Text, FlatList, StyleSheet, ImageBackground, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import {Navigator} from './Navigator'


export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  )
}