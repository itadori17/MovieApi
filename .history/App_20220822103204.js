import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieFinder from './src/Screens/MovieFinder';
import HomeSreen from './src/Screens/HomeSreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeSreen} />
        <Stack.Screen name="MovieFinder" component={MovieFinder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#868B8E',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
