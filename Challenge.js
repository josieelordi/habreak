import React from "react";
import { StyleSheet, Text, View, Button, AlertIOS, AsyncStorage } from "react-native";
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

export default class Challenge extends React.Component {

	
	constructor(props) {
		super(props);

		this.state = {
			start: 0,
			now: 0,
			name : props.name,
			count: 0
		};
	}



	start = () => {
		
		const now = new Date().getTime();
		this.setState({
			start: now,
			now,
		});
		this.timer = setInterval(() => {
			this.setState({ now: new Date().getTime() });
		}, 100);
		//console.log("Stuff to save: N" + this.state.name + " T" + now);
		AsyncStorage.setItem(this.state.name, String(now), (error) => {console.log("ERROR: " + error + "\n");});
	};


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
		console.log("TIMER: " + timer);
		AsyncStorage.getItem(this.state.name, (error, value) => {this.setState({
			start: value,
			now: new Date().getTime()
		}); 
		AsyncStorage.getAllKeys( (error, value) => {console.log(value)})
		console.log("VALUE: " + value);});
		if (timer == 0) {
			text = "Start"
		} else text = "Reset"
		return ( 
			<View style={styles.container}>
				<View style={styles.nameContainer}>
					<Text style={styles.text}>{this.state.name}</Text>
				</View>
					<Timer interval={timer} />
				<View style={styles.buttonRow}>
					<View style={styles.button_container}>
						<Button title={text} color="#ffffff" onPress={this.buttonClicked} style={styles.button} />
					</View>
					<View style={styles.button_container}>
						<Button title="Delete" color="#ffffff" onPress={this.buttonClicked} style={styles.button} />
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	buttonRow: {
    	flexDirection: 'row',
    	justifyContent: 'space-between'
	},
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