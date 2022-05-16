import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/auth/Splash';
import SigninScreen from '../screens/auth/Signin';
import RegistrationScreen from '../screens/auth/Registration';
import ConfirmationScreen from '../screens/auth/Confirmation';
import ForgotPWAScreen from '../screens/auth/ForgotPWA';
import ForgotPWBScreen from '../screens/auth/ForgotPWB';

const Stack = createNativeStackNavigator();

export default function AuthStackNav() {
    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name='Splash' component={SplashScreen} />
                <Stack.Screen name='Signin' component={SigninScreen} />
                <Stack.Screen name='Register' component={RegistrationScreen} />
                <Stack.Screen name='Confirmation' component={ConfirmationScreen} />
                <Stack.Screen name='ForgotPWA' component={ForgotPWAScreen} />
                <Stack.Screen name='ForgotPWB' component={ForgotPWBScreen} />
            </Stack.Navigator>
        </>
    )
}