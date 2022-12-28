import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Flex from './Flex';

const Tab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "grey",
      }}
    >
      <Tab.Screen name='Flex' component={Flex}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default Tab

const styles = StyleSheet.create({})