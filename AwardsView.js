import React from "react";
import { StyleSheet, Text, View, Button, AlertIOS } from "react-native";
import moment from "moment";
import Award from "./Award.js";

export default class AwardsView extends React.Component {
	static navigationOptions = {
		title: "Awards",
		headerStyle: {
				backgroundColor: "#041725"
		}
	};

	constructor(props) {
		super(props);

		this.state = {
			awards: [],
			awardNumbers: [],
			numAward: 0
		};
	}

	loadNewAward = (number, name, email) => {
		console.log(number);
		console.log(name);
		console.log(email);
		this.state.awards.push([name, number, email]);
		this.state.numAward = this.state.numAward + 1;
		console.log(this.state.awards);

		this.forceUpdate();
	};



	addNewEmail = (number, name) => {
		AlertIOS.prompt(
			"What is their email address?",
			null,
			  [
			    {
			      text: 'Cancel',
			      onPress: () => console.log('Cancel Pressed'),
			      style: 'cancel',
			    },
			    {
			      text: 'Add Email',
			      onPress: text => this.loadNewAward(number, name, text),
			    },
			  ],
			  'plain-text',
			  '',
			  'email-address'
		);
	};

	addNewNumber = (name) => {
		AlertIOS.prompt(
			"What is their phone number?",
			null,
			  [
			    {
			      text: 'Cancel',
			      onPress: () => console.log('Cancel Pressed'),
			      style: 'cancel',
			    },
			    {
			      text: 'Add Number',
			      onPress: text => this.addNewEmail(text, name),
			    },
			  ],
			  'plain-text',
			  "",
			  'numeric'
		);
	};

	addNewAward = () => {
		AlertIOS.prompt(
			"Who is someone you can count on to help you break your bad habits?",
			null,
			  [
			    {
			      text: 'Cancel',
			      onPress: () => console.log('Cancel Pressed'),
			      style: 'cancel',
			    },
			    {
			      text: 'Add Award',
			      onPress: text => this.addNewNumber(text),
			    },
			  ],
		);
	};


	render() {

		//console.log(this.state.chalNames);
		return (

			<View style={styles.container}>

				<Award/>
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
