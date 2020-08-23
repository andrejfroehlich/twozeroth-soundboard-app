import React from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView } from 'react-native';
import Button from '../components/Button';

const SOUNDS = ['ayy', 'joog', 'boog', 'nerds', 'Dunhill', 'mp3', 'exe', 'foog', 'gay'];

export default function MainScreen(props) {
	console.log('Re-rendering MainScreen!');
	// <SafeAreaView> statt <View> für Handys mit Notch
	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="black" barStyle="light-content" />
			<Text style={styles.mainText}>Pick a Sound</Text>
			<ScrollView contentContainerStyle={styles.scrollView}>
				{SOUNDS.map((sound, index) => (
					<Button key={index} />
				))}
			</ScrollView>
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
	scrollView: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	mainText: {
		marginTop: 10,
		fontSize: 25,
		color: 'white',
		fontFamily: 'Poppins-Medium',
	},
});
