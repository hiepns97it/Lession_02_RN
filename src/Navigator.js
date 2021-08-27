import React from 'react';
import { createStackNavigator, } from '@react-navigation/stack';

import * as Screens from './screens'
import {useSelector } from 'react-redux'

const Stack = createStackNavigator();

function Navigator(){
    
    const screen = useSelector(state => state.screen);
    const {current} = screen;
    console.log("current",screen);
    return(
        <Stack.Navigator
            /*screenOptions={{headerShown: false,}}*/
        >
            {
                current==='Welcome'&&(
                    <Stack.Screen 
                    name="Welcome" 
                    options={{headerShown:false}}
                    component={Screens.Welcome} />
                )
            }
            {
                current==='Login'&&(
                    <>
                        <Stack.Screen
                            options={{headerShown:false}}
                            name="Login" component={Screens.Login} />
                        <Stack.Screen 
                            options={{headerShown:false}}
                            name="Register" component={Screens.Register} />
                    </>
                )
            }
            {
                current==='Main'&&(
                    <>
                        <Stack.Screen name="MainStack"
                            component={Screens.MainStack} />
                        <Stack.Screen name="Detail" component={Screens.Detail} />
                        <Stack.Screen name="ImageScreen" component={Screens.ImageScreen} />
                        <Stack.Screen name="THuserState" component={Screens.THuserState} />
                        <Stack.Screen name="Todo" component={Screens.Todo} />
                        <Stack.Screen name="CounterScreen" component={Screens.CounterScreen}/>
                        <Stack.Screen name="ColorScreen" component={Screens.ColorScreen}/>
                        <Stack.Screen name="SquareScreen" component={Screens.SquareScreen}/>
                        <Stack.Screen name="LayoutScreen" component={Screens.LayoutScreen}/>
                    </>
                )
            }
        </Stack.Navigator>
    )
}

export default Navigator;