import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Communications from 'react-native-communications';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';




export default class Award extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: props.name,
			phoneNumber: props.phoneNumber,
			email: props.email
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
		flex: 2,
		backgroundColor: "#07263B",
		alignItems: "center",
		justifyContent: "center",
		height: 10
	},
	nameContainer:{
		borderTopLeftRadius: 7,
		borderTopRightRadius: 7,
		width: 300,
		backgroundColor: '#A3D470',
	},
	buttonsContainer: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: '#0B3049',
		width: 300,
		borderBottomRightRadius: 7,
		borderBottomLeftRadius: 7,
		flexDirection: 'row'
	},
	text: {
		justifyContent: "center",
		alignItems: "center",
		marginLeft: 10,
		color: "#ffffff",
		fontSize: 35,
	},
	button_container: {
		justifyContent: "center",
		alignItems: "center",
		marginRight: 20,
		marginTop: 10,
		borderRadius: 7,

	}
});
