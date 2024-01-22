
// npm install @react-navigation/native;
// npm install @react-navigation/native-stack;
// npm install @react-navigation/bottom-tabs
//recomendado npm install react-native-vector-icons ^ npm install --save react-native-vector-icons
//import { createNativeStackNavigator } from '@react-naavigation/native-stack';

import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import StackRoutes from './stackRoutes';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';


// subistituidos o Stack "const Stack = createNativeStackNavigator();" para Tab
const Drawer = createDrawerNavigator();
/**
 * 
 * removido <NavigationContainer
 */
export default function Routes() {
  return(
    <Drawer.Navigator 
      screenOptions={{
        headerShown: false
      }}
    >
      <Drawer.Screen
        name="HomeStack"
        component={StackRoutes}
      />

      <Drawer.Screen
        name="Sobre"
        component={Sobre}
      />

      <Drawer.Screen
        name="Contato"
        component={Contato}
      />
    </Drawer.Navigator>
  )
}