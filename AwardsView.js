import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	AlertIOS,
	ScrollView
} from "react-native";
import moment from "moment";
import Award from "./Award.js";
import { AsyncStorage } from "react-native";

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
			numAward: 0,
			streak: 0,
			streak_button_since: 0
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
					text: "Cancel",
					onPress: () => console.log("Cancel Pressed"),
					style: "cancel"
				},
				{
					text: "Add Email",
					onPress: text => this.loadNewAward(number, name, text)
				}
			],
			"plain-text",
			"",
			"email-address"
		);
	};

	addNewNumber = name => {
		AlertIOS.prompt(
			"What is their phone number?",
			null,
			[
				{
					text: "Cancel",
					onPress: () => console.log("Cancel Pressed"),
					style: "cancel"
				},
				{
					text: "Add Number",
					onPress: text => this.addNewEmail(text, name)
				}
			],
			"plain-text",
			"",
			"numeric"
		);
	};

	addNewAward = () => {
		AlertIOS.prompt(
			"Who is someone you can count on to help you break your bad habits?",
			null,
			[
				{
					text: "Cancel",
					onPress: () => console.log("Cancel Pressed"),
					style: "cancel"
				},
				{
					text: "Add Award",
					onPress: text => this.addNewNumber(text)
				}
			]
		);
	};

	checkIn = () => {
		if (this.state.streak_button_since != moment().format("MMM Do YY")) {
			this.setState({
				streak: this.state.streak + 1,
				streak_button_since: moment().format("MMM Do YY")
			});
		} else {
			AlertIOS.alert("You already checked in today! Come back tomorrow!");
		}
		console.log(getItem(numSponsor));
		console.log(getItem(numChal));
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.awards_title}>Awards</Text>
				<ScrollView>
<<<<<<< HEAD
					<Button title="Check In!" onPress={this.checkIn} color="#DA5D5D" />
					<Text style={styles.streak_text}> Your current streak: {this.state.streak} </Text>
					<View style={styles.awards_container}>
					<Award
						progress={100}
						name="Got started!"
						desc="Check in once (and then hopefully again)!"
					/>
					<Award
						progress={100}
						name="I Got Your Back!"
						desc="Add an ally."
					/>
					<Award
						progress={100}
						name="You're On Your Way!"
						desc="Add a challenge."
					/>
					<Award
						progress={33}
						name="Goals on goals!"
						desc="Add at least 3 challenges."
					/>
					<Award
						progress={33}
						name="We Got Your Back!"
						desc="Add at least 3 allies."
					/>
					<Award
						progress={14}
						name="A Week At a Time."
						desc="Check in for seven days in a row."
					/>
					<Award
						progress={0}
						name="You're Your Competition!"
						desc="Beat your longest check-in streak! (Current streak: 3)"
					/>
				</View>
=======
					<Button
						title="Check In!"
						onPress={this.checkIn}
						color="#DA5D5D"
					/>
					<View style={styles.test}>
						<Text style={styles.streak_text}>
							{" "}
							Your current streak: {this.state.streak}{" "}
						</Text>
					</View>
					<View style={styles.awards_container}>
						<Award
							progress={100}
							name="Got started!"
							desc="Check in once (and then hopefully again)!"
						/>
						<Award
							progress={100}
							name="I Got Your Back!"
							desc="Add an ally."
						/>
						<Award
							progress={100}
							name="You're On Your Way!"
							desc="Add a challenge."
						/>
						<Award
							progress={35}
							name="Goals on goals!"
							desc="Add at least 3 challenges."
						/>
						<Award
							progress={35}
							name="We Got Your Back!"
							desc="Add at least 3 allies."
						/>
						<Award
							progress={15}
							name="A Week At a Time."
							desc="Check in for seven days in a row."
						/>
						<Award
							progress={0}
							name="You're Your Competition!"
							desc="Beat your longest check-in streak!"
						/>
					</View>
>>>>>>> 6b3099924ac6158057557906410c904d469c27eb
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	test: {
		justifyContent: "center",
		alignItems: "center"
	},
	container: {
		paddingTop: 20,
		flex: 1,
		backgroundColor: "#07263B",
		alignItems: "center",
		justifyContent: "center"
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
	},
	streak_text: {
		color: "white",
		justifyContent: "center",
		alignItems: "center"
	}
});
