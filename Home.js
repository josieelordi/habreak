import React from "react";
import { StyleSheet, Text,ScrollView, View, Button, AlertIOS } from "react-native";
import moment from "moment";
import Challenge from "./Challenge.js";

export default class Home extends React.Component {
	static navigationOptions = {
		title: "Challenges",
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
	loadNewName = (name) => {
		this.state.chalNames.push(name);
		this.state.numChal = this.state.numChal + 1;
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
		const { now, start } = this.state;
		const timer = now - start;
		//console.log(this.state.chalNames);
		return (

				<View style={styles.container}>
				<View style={styles.button}>

					<Button
						title="Add New Challenge"
						color="#A1EDCE"
						onPress={this.addNewChallenge}
					/>
					</View>

					<ScrollView
						stylesContainer={styles.scroll}
						horizontal={false}>

					{this.state.chalNames.map((chalName) => {
						return (<Challenge name= {chalName} />)
					})}
					</ScrollView>

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
    marginTop: 20
  }

});
