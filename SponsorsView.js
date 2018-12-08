import React from "react";
import { StyleSheet, Text, View, Button, AlertIOS, ScrollView } from "react-native";
import moment from "moment";
import Sponsor from "./Sponsor.js";

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
		console.log(number);
		console.log(name);
		console.log(email);
		this.state.sponsors.push([name, number, email]);
		this.state.numSponsor = this.state.numSponsor + 1;
		console.log(this.state.sponsors);

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
			      onPress: text => this.loadNewSponsor(number, name, text),
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
			<ScrollView>
			<Sponsor name="helo"
							 phoneNumber ="yes"
							 email="aaa"/>
			<Sponsor name="helo"
				 							 phoneNumber ="aaa"
				 							 email="aaa"/>

			<Sponsor name="helo"
											 				 phoneNumber ="aaa"
											 				 email="aaa"/>
			</ScrollView>


				{this.state.sponsors.map((sponsor) => {
					return (<Sponsor name= {sponsor[0]}
									 phoneNumber = {sponsor[1]}
									 email={sponsor[2]}/>)
				})}
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
	},
	helo: {
		flex: 1,
		color: "white",
		marginTop: 30
	},
});
