import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/main/Home';
import ProfileStackNav from './ProfileStackNav';
import AntIcon from 'react-native-vector-icons/AntDesign';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import SearchScreen from '../screens/main/Search';

const Tab = createBottomTabNavigator();

export default function MainTabNav() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size, color }) => {
                let AntIconName = false;
                let IonicIconName = false;

                if (route.name == 'Home') {
                    IonicIconName = focused ? 'trending-up' : 'trending-up-outline';
                    // size = focused ? 30 : 29;
                    color = focused ? 'white' : '#606060';
                }

                if (route.name == 'Profile') {
                    IonicIconName = focused ? 'person' : 'person-outline';
                    // size = focused ? 30 : 29;
                    color = focused ? 'white' : '#606060';
                }
                
                if (route.name == 'Search') {
                    IonicIconName = focused ? 'search' : 'search-outline';
                    // size = focused ? 30 : 29;
                    color = focused ? 'white' : '#606060';
                }

                if (AntIconName) {
                    return (<AntIcon name={AntIconName} size={23} color={color} />)
                }

                if (IonicIconName) {
                    return (<IonicIcon name={IonicIconName} size={23} color={color} />)
                }

            },
            headerShown: false,
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: '#000000',
                // height: 60,
            }
        })}>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Search' component={SearchScreen} />
            <Tab.Screen name='Profile' component={ProfileStackNav} />
        </Tab.Navigator>
    )
}