import React from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView } from 'react-native';
import Button from '../components/Button';

const SOUNDS = {
	Nerds: 'nerds.mp3',
	Joog: 'joog.mp3',
	Dunhill: 'dunhill.mp3',
	Arvnn: 'arvnn.mp3',
	Behindert: 'behindert.mp3',
	'Darth Vader': 'vader.mp3',
	'Lama UH': 'lama.mp3',
	Uh: 'uh.mp3',
	'F Basic White Girls': 'psl.mp3',
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
