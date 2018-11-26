import React from "react";
import { StyleSheet, Text, View, Button, AlertIOS } from "react-native";
import moment from "moment";

export default class Motivation extends React.Component {
	static navigationOptions = {
		title: "Quotes",
		headerStyle: {
				backgroundColor: "#041725"
		}
	};
	
	constructor(props) {
		super(props);

		this.state = {
			chalNames : [],
			numChal: 0
		};
	}

	render() {
		const { now, start } = this.state;
		const timer = now - start;
		//console.log(this.state.chalNames);
		return (
	
			<View style={styles.container}>
				<Text style={styles.helo}>
				helo
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
	    flex: 1,
	    backgroundColor: "#07263B",
	    alignItems: "center",
	    justifyContent: "center",
	  },
	helo: {
		flex: 1,
		color: "white",
		marginTop: 30
	},
});
