import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function Button(props) {
	console.log('Re-rendering Button!');
	return (
		<TouchableOpacity style={styles.container}>
			<Text>Hallo </Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 100,
		height: 100,
		backgroundColor: 'white',
		borderRadius: 30,
		padding: 10,
		marginVertical: 40,
		marginHorizontal: 10,
		elevation: 15,
	},
});
