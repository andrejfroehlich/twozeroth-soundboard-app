import React from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView } from 'react-native';
import Button from '../components/Button';

const SOUNDS = {
	NERDS: 'nerds.mp3',
	JOOG: 'joog.mp3',
	DUNHILL: 'dunhill.mp3',
	ARVNN: 'arvnn.mp3',
	SOUND: 'sound.mp3',
	'DARTH VADER': 'vader.mp3',
	'LAMA UH': 'lama.mp3',
	UH: 'uh.mp3',
	'F BASIC WHITE': 'psl.mp3',
};
const SOUNDS_NAMES = Object.keys(SOUNDS);
// ['Nerds', 'Joog', ...]

export default function MainScreen(props) {
	console.log('Re-rendering MainScreen!');
	// <SafeAreaView> statt <View> für Handys mit Notch
	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="black" barStyle="light-content" />
			<Text style={styles.mainText}>Pick a Sound</Text>
			<ScrollView contentContainerStyle={styles.scrollView}>
				{SOUNDS_NAMES.map((soundName, index) => (
					<Button soundName={soundName} soundFile={SOUNDS[soundName]} key={index} />
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
