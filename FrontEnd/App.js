import 'react-native-gesture-handler';
import React from 'react';
import SplashScreen from './src/screens/auth/Splash';
import AuthStackNav from './src/navigation/AuthStackNav';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    // <SplashScreen />
    <NavigationContainer>
      <AuthStackNav />
    </NavigationContainer>
  )
}