import React from 'react';
import { StyleSheet, View, Text, StatusBar, ActivityIndicator, Image } from 'react-native';
import Button from '../components/Button';

export default function MainScreen(props) {
	console.log('Re-rendering MainScreen!');
	// <SafeAreaView> statt <View> für Handys mit Notch
	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="black" barStyle="light-content" />
			<Text style={styles.mainText}>Pick a Sound</Text>
			<Button />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 10,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: 'black',
	},
	logo: {
		borderRadius: 150 / 2,
		height: 150,
		width: 150,
	},
	mainText: {
		marginTop: 10,
		fontSize: 25,
		color: 'white',
		fontFamily: 'Poppins-Medium',
	},
});
