import React from "react";
import { StyleSheet, Text,ScrollView, View, Button, AlertIOS } from "react-native";
import moment from "moment";
import Challenge from "./Challenge.js";
import { AsyncStorage } from "react-native";

export default class Home extends React.Component {
	static navigationOptions = {
		title: "Challenges",
		headerStyle: {
				backgroundColor: "#041725"
		}
	};

	constructor(props) {
		super(props);
	//IF WE HAVE ISSUES WITH DATABASE RANDOMLY WIPING THIS IS PROBABLY THE ISSUE
		AsyncStorage.clear()
		this.state = {
			chalNames : [],
			numChal: 0
		};
	}
	loadNewName = (name) => {
		//TODO: error checking goes here
		hasError = false;
		if (name.length == 0) {
			AlertIOS.prompt(
				"Hey there! What's a habit you're trying to break?",
				"Please enter a non-empty string",
					[
						{
							text: 'Cancel',
							onPress: () => console.log('Cancel Pressed'),
							style: 'cancel',
						},
						{
							text: 'Add Habit',
							onPress: text => this.loadNewName(text),
						},
					],
			);
			hasError = true;
		}

		if (!hasError) {
			this.state.chalNames.push(name);
			this.state.numChal = this.state.numChal + 1;
			AsyncStorage.setItem("numChal", this.state.numChal.toString());
			console.log(this.state.chalNames);
			this.forceUpdate();
		}
	};

	removeChallengeName = (name) => {
		console.log(name);
		console.log("removeChallengeName");

		//const filteredArray = chalNames.filter(item => item != name);
		// this.setState({chalNames: this.state.chalNames.filter((n) => n !== name) });
		//this.state.chalNames.splice(this.state.chalNames.indexOf(name), 1);
		this.state.numChal = this.state.numChal - 1;
		console.log(this.state.chalNames);
		this.forceUpdate();
	};

	addNewChallenge = () => {
		AlertIOS.prompt(
			"Hey there! What's a habit you're trying to break?",
			null,
			  [
			    {
			      text: 'Cancel',
			      onPress: () => console.log('Cancel Pressed'),
			      style: 'cancel',
			    },
			    {
			      text: 'Add Habit',
			      onPress: text => this.loadNewName(text),
			    },
			  ],
		);
	};


	render() {
		 console.disableYellowBox = true;
		const { now, start } = this.state;
		const timer = now - start;
		console.log(this.state.chalNames);
		return (

				<View style={styles.container}>
				<Text style={styles.awards_title}>Challenges</Text>
				<View style={styles.button}>
					</View>
					<ScrollView
						stylesContainer={styles.scroll}
						horizontal={false}>

					{this.state.chalNames.map((chalName) => {
						let index = this.state.chalNames.indexOf(chalName);
						console.log("Rendering: " + chalName);
						return (
							<Challenge
												name= {chalName}
												removeChal={this.removeChallengeName}
												key={index}/>)

					})}
					</ScrollView>
					<Button
						title="Add New Challenge"
						color="#A1EDCE"
						onPress={this.addNewChallenge}
					/>

				</View>
		);
	}
}



const styles = StyleSheet.create({
	awards_title: {
		paddingTop: 20,
		paddingBottom: 10,
		fontSize: 40,
		color: "white"
	},
	container: {
		flex: 1,
		backgroundColor: "#07263B",
		alignItems: "center",
		justifyContent: "center",
		paddingTop: 20
	},
	scroll:{
		alignItems: "center",
		justifyContent: "center"
	},
	text: {
		color: "#A1EDCE",
		fontSize: 35,
	},
	timer: {
		color: "#ffffff",
		fontSize: 40
	},
	button: {
    marginTop: 12
  }

});
