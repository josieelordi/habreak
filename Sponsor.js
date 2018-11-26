import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Communications from 'react-native-communications';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class Sponsor extends React.Component {
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

sendMessage = (number) => {
	console.log("Launching Message");
	Communications.text(number, "Hey! Can you give me a call when you have a second?");

};

sendEmail = (email) => {
	console.log("Launching Email");
	Communications.email(email, null, null, "Need Backup", "Hey. I'm going through a bit of a hard time right now. Would you mind giving me a call when you can?");
};
	render() {
		return ( 
			<View style={styles.container}>
				<View style={styles.nameContainer}>
					<Text style={styles.text}>{this.state.name}</Text>
				</View>
				<View style={styles.buttonsContainer}>
					<View style={styles.button_container}>
						<Icon name='phone' size={55} color='white' onPress={this.sendCall.bind(this, this.state.phoneNumber)} />
						</View>
						<View style={styles.button_container}>
						<Icon name="message-text" size={55} color='white' onPress={this.sendMessage.bind(this, this.state.phoneNumber)} />
						</View>
						<View style={styles.button_container}>
						<Icon name="email" size={55} color='white'  onPress={this.sendEmail.bind(this, this.state.email)} />
					</View>
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
		width: 325,
		backgroundColor: '#A3D470',
	},
	buttonsContainer: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: '#0B3049', 
		width: 325,
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