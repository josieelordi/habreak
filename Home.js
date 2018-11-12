import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
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
function RoundButton({ title, color, background, onPress }) {
	return (
		<View style={{ backgroundColor: background, height: 200, width: 200 }}>
			<Text style={{ color }}>{title}</Text>
		</View>
	);
}

export default class Home extends React.Component {
	static navigationOptions = { title: "Home" };
	constructor(props) {
		super(props);

		this.state = {
			start: 0,
			now: 0,
		}
	}

	start = () => {

		const now = new Date().getTime()
		this.setState({
			start: now,
			now
		})
		this.timer = setInterval(() => {
			this.setState({ now: new Date().getTime()})
			}, 100)
		}
	

	render() {

		const { now, start } = this.state;
		const timer = now - start;
		return (
			<View style={styles.container}>
				<Timer interval={timer} />
				<Button
					title="start"
					color="#A1EDCE"
					onPress={this.start}
				/>
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
