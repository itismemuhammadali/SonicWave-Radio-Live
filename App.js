import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './src/screens/header/HEADER';
import Home from './src/screens/home/HOME';
import AboutUs from './src/screens/about us/ABOUT US';
const Stack = createNativeStackNavigator();

const App = () => {
 

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Header' component={Header} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Home />
    </View>
  );
};

export default App;
