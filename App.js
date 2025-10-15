import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './telas/Home';
import Receitas from './telas/Receitas';

  const Stack= createNativeStackNavigator();

  export default function App() {

  
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} options={{title: 'Início'}}></Stack.Screen>   
          <Stack.Screen name="Receitas" component={Receitas} options={{title: 'Receitas'}}></Stack.Screen>   
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
