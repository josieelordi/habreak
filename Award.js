import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Communications from 'react-native-communications';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';




export default class Award extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: props.name,
			progress: props.progress,
			completed: false
		};
	}

sendCall = (number) => {
	console.log("Launching Phone Call");
	Communications.phonecall(number, true);
};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.nameContainer}>
					<Text style={styles.text}>{this.state.name}</Text>
				</View>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#0080FF",
		height: 70,
		width: 70,
		borderRadius: 100,
		margin: 10
	},
});
