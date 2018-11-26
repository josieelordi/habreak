import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import moment from "moment";

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

export default class Sponsor extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}


	render() {
		//console.log(this.state.chalNames);
		return (
	
// sponsor
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
		backgroundColor: '#DA5D5D',
	},
	timerContainer: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: '#0B3049', 
		width: 325,
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
		width: 125,
		borderRadius: 7,
		backgroundColor: '#DA5D5D'
	}
});