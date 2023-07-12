import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, LoginScreen, RegisterScreen, MainScreen } from '../screens';
import { MyRoutes } from '../navigators';

const Stack = createNativeStackNavigator();

export default function StackNav() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                {
                    MyRoutes().map(x => {
                        return (
                            <Stack.Screen name={x.path} component={x.element} key={x.key} options={{title: x.title}} />
                        );
                    })
                }
                
                {/* <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Register' component={RegisterScreen} />
                <Stack.Screen name='Main' component={MainScreen} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}