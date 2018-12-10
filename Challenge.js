import React from "react";
import { StyleSheet, Text, View, Button, AlertIOS } from "react-native";
import moment from "moment";
import Ionicons from 'react-native-vector-icons/Ionicons';

function Timer({ interval }) {
	const duration = moment.duration(interval);
	return (
		<View style={styles.timerContainer}>
			<Text style={styles.timerDay}>
				{duration.days()} days
			</Text>
			<Text style={styles.timerMinSec}>
				{duration.minutes()} min,{" "}{duration.seconds()} sec{" "}
			</Text>
		</View>
	);
}

export default class Challenge extends React.Component {

	start = () => {

		const now = new Date().getTime();
		this.setState({
			start: now,
			now,

		});
		this.timer = setInterval(() => {
			this.setState({ now: new Date().getTime() });
		}, 100);
	};

	constructor(props) {
		super(props);

		this.state = {
			start: 0,
			now: 0,
			name : props.name,
			count: 0
		};
	}


	resetTimer = () => {

		if (this.state.count != 0) {
			AlertIOS.alert(
	 'That’s okay. You made it pretty far and we know you can do it again!');
		}
		this.start()
		this.state.count = this.state.count + 1;
	}


	confirmDeleteChallenge = () => {
		//confirmation of some sort
		AlertIOS.prompt(
			"Delete Challenge",
			"Are you sure you want to delete this challenge?",
				[
					{
						text: 'Cancel',
						onPress: () => console.log('Cancel Pressed'),
						style: 'cancel',
					},
					{
						text: 'Yes',
						onPress: () => this.props.removeChal(this.state.name),
					},
				],
				'default'
		);
	};



	render() {
		const { now, start } = this.state;
		const timer = now - start;
		let text = "";
		if (timer == 0) {
			text = "Start"
		} else text = "Reset"
		console.log("Rendering from Challenge: " + this.state.name);
		return (
			<View style={styles.container}>
				<View style={styles.nameContainer}>
					<Text style={styles.text}>{this.state.name}</Text>
				</View>
					<Timer interval={timer} />
				<Text>
					<View style={styles.button_container}>
						<Button title={text} color="#ffffff" onPress={this.resetTimer} style={styles.button} />
					</View>
					<View style={styles.button_container}>
						<Button title="Delete" color="#ffffff" onPress={this.confirmDeleteChallenge} style={styles.button} />
					</View>
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#07263B",
		alignItems: "center",
		justifyContent: "center",
		height: 220,
		margin: 4
	},
	nameContainer:{
		borderTopLeftRadius: 7,
		borderTopRightRadius: 7,
		width: 300,
		backgroundColor: '#DA5D5D',
	},
	timerContainer: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: '#0B3049',
		width: 300,
		borderBottomRightRadius: 7,
		borderBottomLeftRadius: 7
	},
	text: {
		justifyContent: "center",
		alignItems: "center",
		marginLeft: 10,
		color: "#ffffff",
		fontSize: 35,
	},
	timerDay: {
		paddingTop: 10,
		paddingBottom: 5,
		color: "#ffffff",
		fontSize: 48,
   		backgroundColor: '#0B3049'
	},
	timerMinSec: {
		paddingTop: 5,
		paddingBottom: 10,
		color: "#ffffff",
		fontSize: 25,
   		backgroundColor: '#0B3049'
	},
	button_container: {
		marginTop: 10,
		width: 100,
		borderRadius: 7,
		backgroundColor: '#DA5D5D'
	}
});
