import React from "react";
import { StyleSheet, Text, View, Button, AlertIOS } from "react-native";
import moment from "moment";
import Sponsor from "./Sponsor.js";

export default class SponsorsView extends React.Component {
	static navigationOptions = {
		title: "Sponsors",
		headerStyle: {
				backgroundColor: "#041725"
		}
	};
	
	constructor(props) {
		super(props);

		this.state = {
			sponsors: [],
			sponsorNumbers: [],
			numSponsor: 0
		};
	}

	loadNewSponsor = (number, name) => {
		console.log(number);
		console.log(name);
		this.state.sponsors.push([name, number]);
		this.state.numSponsor = this.state.numSponsor + 1;
		console.log(this.state.sponsors);

		this.forceUpdate();
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
			      onPress: text => this.loadNewSponsor(text, name),
			    },
			  ],
		);
	};

	addNewSponsor = () => {
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
			      text: 'Add Sponsor',
			      onPress: text => this.addNewNumber(text),
			    },
			  ],
		);
	};


	render() {
		
		//console.log(this.state.chalNames);
		return (
	
			<View style={styles.container}>
				<Button
					title="Add New Sponsor"
					color="#A1EDCE"
					onPress={this.addNewSponsor}
					style = {styles.button}
				/>
				{this.state.sponsors.map((sponsor) => {
					return (<Sponsor name= {sponsor[0]} phoneNumber = {sponsor[1]}/>)
				})}
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
