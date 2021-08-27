import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from './HomeTab';
import ProfileTab from './ProfileTab';
import PostTab from './PostTab';

const Tab = createBottomTabNavigator();
export default function Screen(props){
    let {navigation,route} = props;

    return(
        <Tab.Navigator>
            <Tab.Screen
                name="Home" 
                component={HomeTab} 
                options={{ title: 'My home'}}
            />
            <Tab.Screen name="Profile" component={ProfileTab} />
            <Tab.Screen name="Post" component={PostTab} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})