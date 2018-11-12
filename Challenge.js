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

	render() {
		const { now, start } = this.state;
		const timer = now - start;
		return (
			<View style={styles.container}>
				<Text>{name}</Text>
				<Timer interval={timer} />
				<Button title={name} color="#A1EDCE" onPress={this.start} />
			</View>
		);
	}
}