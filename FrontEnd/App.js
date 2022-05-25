import 'react-native-gesture-handler';
import React from 'react';
import AuthStackNav from './src/navigation/AuthStackNav';
import MainTabNav from './src/navigation/MainTabNav';
import ContextProvider, { useLoggedInContext } from './src/context/contextProvider';
import { NavigationContainer } from '@react-navigation/native';

function Content() {
  const loggedInContext = useLoggedInContext();
  if (loggedInContext.isLoggedIn) {
    return <MainTabNav />
  } else {
    return <AuthStackNav />
  }
}

export default function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Content />
      </NavigationContainer>
    </ContextProvider>
  )
}

