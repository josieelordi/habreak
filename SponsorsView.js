import React from "react";
import { StyleSheet, Text, View, Button, AlertIOS, ScrollView } from "react-native";
import moment from "moment";
import Sponsor from "./Sponsor.js";
<<<<<<< HEAD
import {AsyncStorage} from "react-native";
=======
import { AsyncStorage } from "react-native";
>>>>>>> a32c5a5e5997f9b72d0ce5b58a565ba015d149bc

export default class SponsorsView extends React.Component {
	static navigationOptions = {
		title: "Allies",
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

	loadNewSponsor = (number, name, email) => {
		//TODO: error checking goes here

		console.log(number);
		console.log(name);
		console.log(email);
		this.state.sponsors.push([name, number, email]);
		this.state.numSponsor = this.state.numSponsor + 1;
		AsyncStorage.setItem('numSpon', this.state.numSponsor.toString());
		console.log(this.state.sponsors);

		setItem("numSponsors", this.state.numSponsor);
		
		this.forceUpdate();
	};



	deleteOldSponsor = (number, name, email) => {

		console.log(number, name, email);

		// TODO: make sponsors deletable
		// this.state.sponsors.push([name, number, email]);
		// this.state.numSponsor = this.state.numSponsor + 1;
		// console.log(this.state.sponsors);
		//
		// this.forceUpdate();
	};



	addNewEmail = (number, name) => {
		AlertIOS.prompt(
			"What is their email address?",
			"Their email address must not be blank.",
			  [
			    {
			      text: 'Cancel',
			      onPress: () => console.log('Cancel Pressed'),
			      style: 'cancel',
			    },
			    {
			      text: 'Add Email',
			      onPress: email => {
							if (email.length == 0) {
								return this.addNewEmail(number, name)
							}
							return this.loadNewSponsor(number, name, email)
						},
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
			"Number must not be left blank.",
			  [
			    {
			      text: 'Cancel',
			      onPress: () => console.log('Cancel Pressed'),
			      style: 'cancel',
			    },
			    {
			      text: 'Add Number',
			      onPress: number => {
							if (number.length == 0) {
								return this.addNewNumber(name)
							}

							return this.addNewEmail(number, name)
						},
			    },
			  ],
			  'plain-text',
			  "",
			  'numeric'
		);
	};

	addNewSponsor = () => {
		AlertIOS.prompt(
			"Who is someone you can count on to help you break your bad habits?",
			"Their name must not be blank.",
			  [
			    {
			      text: 'Cancel',
			      onPress: () => console.log('Cancel Pressed'),
			      style: 'cancel',
			    },
			    {
			      text: 'Add Sponsor',
			      onPress: number => {
							if (number.length == 0) {
								return this.addNewSponsor()
							}
							return this.addNewNumber(number)
						},
			    },
			  ],
		);
	};


	render() {

		//console.log(this.state.chalNames);
		return (

			<View style={styles.container}>
			<ScrollView>
				{this.state.sponsors.map((sponsor) => {
					return (<Sponsor name= {sponsor[0]}
									 phoneNumber = {sponsor[1]}
									 email={sponsor[2]}
									 deleteSponsor={this.deleteOldSponsor}/>)
				})}

			</ScrollView>
			<Button
					title="Add New Ally"
					color="#A1EDCE"
					onPress={this.addNewSponsor}
					style = {styles.button}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
    flex: 1,
    backgroundColor: "#07263B",
    alignItems: "center",
    justifyContent: "center",
	}
});
