import React, { useState, useCallback, useMemo } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const BUTTON_SIZE = 100;

// https://github.com/zmxv/react-native-sound
// npm i react-native-touchable-scale
export default function Button(props) {
	const [paddingBottom, setPaddingBottom] = useState(5);

	const onPressIn = useCallback(() => setPaddingBottom(0), []);
	const onPressOut = useCallback(() => setPaddingBottom(5), []);
	const onPress = useCallback(() => {
		console.log(`play ${props.sound}`);
	}, [props.sound]);

	const style = useMemo(() => [styles.backgroundContainer, { paddingBottom: paddingBottom }], [paddingBottom]);

	console.log(`Re-rendering Button with props ${JSON.stringify(props)}!`);
	return (
		<View style={style}>
			<TouchableOpacity onPressIn={onPressIn} onPressOut={onPressOut} onPress={onPress} style={styles.container}>
				<Text style={styles.text}>{props.sound}</Text>
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
	},
	text: {
		fontSize: 20,
		color: 'black',
		fontFamily: 'Poppins-Medium',
	},
});
