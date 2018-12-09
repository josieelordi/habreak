import React from "react";
import { StyleSheet, Text, View, Button, AlertIOS, ScrollView } from "react-native";
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
				<Text
					style={styles.awards_title}
				>
				Awards
				</Text>
				<ScrollView>
					<View style={styles.awards_container}>
					<Award
						progress={5}
						name="aaaa"
						desc="bbbbbbbb"

					/>
					<Award
						progress={10}
						name="aaaa"
						desc="bbbbbbbb"

					/>
					<Award
						progress={50}
						name="aaaa"
						desc="bbbbbbbb"

					/>
					<Award
						progress={76}
						name="aaaa"
						desc="this is a sentence with words!!"

					/>
					<Award
						progress={0}
						name="aaaa"
						desc="Bacon ipsum dolor amet pork belly jerky prosciutto, drumstick tenderloin t-bone biltong filet mignon corned beef flank boudin tongue pastrami sausage beef ribs. Turducken pig capicola, strip steak chuck beef ribs chicken pork chop rump flank ball tip t-bone ham ground round sirloin. "

					/>
				</View>
				</ScrollView>

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

	},
	award_margin: {
		margin: 5
	},

	awards_container: {
		flex: 1,
		marginTop: 30,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center"
	},
	awards_title: {
		fontSize: 40,
		color: "white"
	}
});
