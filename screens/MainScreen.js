import React from 'react';
import { StyleSheet, View, Text, StatusBar, ActivityIndicator, Image } from 'react-native';

export default function MainScreen(props) {
	console.log('Re-rendering MainScreen!');
	// <SafeAreaView> statt <View> für Handys mit Notch
	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="black" barStyle="light-content" />
			<Text style={styles.loadingtext}>Main screen ayo</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'black',
	},
	logo: {
		borderRadius: 150 / 2,
		height: 150,
		width: 150,
	},
	loadingtext: {
		marginTop: 10,
		fontSize: 25,
		color: 'white',
		fontFamily: 'Poppins-Medium',
	},
	indicator: {
		marginTop: 10,
	},
});
