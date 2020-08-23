import React, { useEffect } from 'react';
import { StyleSheet, View, Text, StatusBar, ActivityIndicator } from 'react-native';
import FastImage from 'react-native-fast-image';

export default function LoadingScreen(props) {
	const navigation = props.navigation;

	useEffect(() => {
		setTimeout(() => {
			navigation.navigate('MainScreen');
		}, 1500);
	}, [navigation]);

	console.log('Re-rendering LoadingScreen!');
	// <SafeAreaView> statt <View> für Handys mit Notch
	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="black" barStyle="light-content" />
			<FastImage style={styles.logo} source={require('../img/logo.jpg')} />
			<Text style={styles.loadingtext}>Twozeroth Soundboard App</Text>
			<ActivityIndicator style={styles.indicator} color="white" size="large" />
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
