/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import Home from './src/components/Home/Home';
import Discover from './src/components/Discover/Discover';
import Details from './src/components/Details/Details';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  return (
    <View className="mt-8 px-2">
      <Text className="text-2xl text-black dark:text-white">
        {title}
      </Text>
      <Text className="mt-2 text-lg text-black dark:text-white">
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const backgroundStyle = "bg-neutral-300 dark:bg-slate-900"

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator >
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Discover' component={Discover} />
            <Stack.Screen name='Details' component={Details} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
