import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from './screens/LoadingScreen';
import MainScreen from './screens/MainScreen';

const Stack = createStackNavigator();

export default function App() {
	console.log('Re-rendering whole App!');
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
				initialRouteName="LoadingScreen">
				<Stack.Screen name="LoadingScreen" component={LoadingScreen} />
				<Stack.Screen name="MainScreen" component={MainScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
