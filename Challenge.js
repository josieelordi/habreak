import React from "react";
import { StyleSheet, Text, View, Button, AlertIOS } from "react-native";
import moment from "moment";

function Timer({ interval }) {
	const duration = moment.duration(interval);
	return (
		<Text style={styles.timer}>
			{duration.days()} days, {duration.minutes()} minutes,{" "}
			{duration.seconds()} seconds{" "}
		</Text>
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

buttonClicked = () => {

	if (this.state.count != 0) {
		AlertIOS.alert(
 'That’s okay. You made it pretty far and we know you can do it again!');
	}
	this.start()
	this.state.count = this.state.count + 1;
}
	render() {
		const { now, start } = this.state;
		const timer = now - start;
		let text = "";
		if (timer == 0) {
			text = "Start"
		} else text = "Reset"
		return ( 
			<View style={styles.container}>
				<Text style={styles.text}>{this.state.name}</Text>
				<Timer interval={timer} />
				<Button title={text} color="#A1EDCE" onPress={this.buttonClicked} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#07263B",
		alignItems: "center",
		justifyContent: "center"
	},
	text: {
		color: "#A1EDCE",
		fontSize: 35
	},
	timer: {
		color: "#ffffff",
		fontSize: 40
	}
});