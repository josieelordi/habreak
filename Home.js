import React from "react";
import { StyleSheet, Text, View, Button, AlertIOS } from "react-native";
import moment from "moment";
import Challenge from "./Challenge.js";

export default class Home extends React.Component {
	static navigationOptions = { title: "Home" };
	
	constructor(props) {
		super(props);

		this.state = {
			numChallanges: 0,
		};
	}

	addNewChallange = () => {
		let name;
		AlertIOS.prompt("Hello Fam", null, text => name = text);

		this.state.numChallanges = this.state.numChallanges + 1;
	};

	render() {
		const { now, start } = this.state;
		const timer = now - start;
		return (
			<View style={styles.container}>
				<Challenge name="Charlie's Fishbowls" />
				<Challenge name="Ricks Mind Probe" />
				<Button
					title="Add New Challange"
					color="#A1EDCE"
					onPress={this.addNewChallange}
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
