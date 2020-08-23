import React, { useState, useCallback, useMemo } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import { Player } from '@react-native-community/audio-toolkit';

const BUTTON_SIZE = 100;

// https://github.com/zmxv/react-native-sound
// npm i react-native-touchable-scale
export default function Button(props) {
	const [paddingBottom, setPaddingBottom] = useState(5);
	const [isPlaying, setIsPlaying] = useState(false);

	const onPressIn = useCallback(() => setPaddingBottom(0), []);
	const onPressOut = useCallback(() => setPaddingBottom(5), []);
	const onPress = useCallback(() => {
		console.log(`play ${props.soundFile}`);
		const player = new Player(props.soundFile, { autoDestroy: false });
		setIsPlaying(true);
		player.on('ended', () => {
			setIsPlaying(false);
			player.destroy();
		});
		player.on('error', () => {
			setIsPlaying(false);
			player.destroy();
		});
		player.play();
	}, [props.soundFile]);

	const style = useMemo(() => [styles.backgroundContainer, { paddingBottom: paddingBottom }], [paddingBottom]);

	console.log(`Re-rendering Button for ${props.soundFile}!`);
	return (
		<View style={style}>
			<TouchableOpacity disabled={isPlaying} onPressIn={onPressIn} onPressOut={onPressOut} onPress={onPress} style={styles.container}>
				<Image style={styles.image} source={require('../img/logobg.jpg')} />
				<Text style={styles.text} numberOfLines={3} ellipsizeMode="tail">
					{props.soundName}
				</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	backgroundContainer: {
		backgroundColor: 'silver',
		marginVertical: 40,
		marginHorizontal: 10,
		elevation: 15,
		borderRadius: BUTTON_SIZE * 0.3,
		width: BUTTON_SIZE,
		height: BUTTON_SIZE,
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'whitesmoke',
		borderRadius: BUTTON_SIZE * 0.3,
		padding: 10,
		overflow: 'hidden',
	},
	text: {
		fontSize: 15,
		color: 'white',
		fontFamily: 'Poppins-Medium',
		textAlign: 'center',
	},
	image: {
		position: 'absolute',
		borderRadius: BUTTON_SIZE * 0.3,
		width: BUTTON_SIZE,
		height: BUTTON_SIZE,
		opacity: 1,
	},
});
