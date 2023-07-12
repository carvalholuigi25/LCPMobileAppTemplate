import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen, LoginScreen, RegisterScreen, MainScreen } from '../screens';
import { MyRoutes } from '../navigators';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
            {
              MyRoutes().map(x => {
                return (
                  <Drawer.Screen name={x.path} component={x.element} key={x.key} options={{title: x.title}} />
                );
              })
            }

            {/* <Drawer.Screen name='Home' component={HomeScreen} />
            <Drawer.Screen name='Login' component={LoginScreen} />
            <Drawer.Screen name='Register' component={RegisterScreen} />
            <Drawer.Screen name='Main' component={MainScreen} /> */}
        </Drawer.Navigator>
      </NavigationContainer>
    );
}