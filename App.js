import React from 'react';

// npm install @react-navigation/native;
import { NavigationContainer } from '@react-navigation/native';

// npm install @react-navigation/native-stack;
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: 'Tela inicio',
            headerStyle: {
              backgroundColor: '#121212'
            },
            headerTintColor: '#fff',
            headerShown: true
          }}
        />
        <Stack.Screen
          name='Sobre'
          component={Sobre}
          options={{
            title: 'Pagina Sobre'
          }}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}