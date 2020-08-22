/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, Text, StatusBar, ActivityIndicator } from 'react-native';

export default function App() {
	// <SafeAreaView> statt <View> für Handys mit Notch
	return (
		<View style={styles.container}>
			<StatusBar barStyle="dark-content" />

			{/* <Image source={require('../img/ich.jpg')}/> */}
			<Text>Twozeroth Soundboard</Text>
			<ActivityIndicator color="red" size="large" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
