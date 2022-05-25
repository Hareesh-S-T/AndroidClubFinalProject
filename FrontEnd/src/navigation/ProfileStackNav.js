import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileDashboardScreen from '../screens/main/Profile/ProfileDashboard';
import EditProfileScreen from '../screens/main/Profile/EditProfile';

const Stack = createNativeStackNavigator();

export default function ProfileStackNav() {
    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name='ProfileDashboard' component={ProfileDashboardScreen} />
                <Stack.Screen name='ProfileEdit' component={EditProfileScreen} />
            </Stack.Navigator>
        </>
    )
}