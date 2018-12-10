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
			streak_button_since: 0,
			numChal: 0,
			numSpon: 0,
		};
		AsyncStorage.setItem("AWARDS_0", "0")
		AsyncStorage.setItem("AWARDS_1", "0")
		AsyncStorage.setItem("AWARDS_2", "0")
		AsyncStorage.setItem("AWARDS_3", "0")
		AsyncStorage.setItem("AWARDS_4", "0")
		AsyncStorage.setItem("AWARDS_5", "0")
		AsyncStorage.setItem("AWARDS_6", "0")
		AsyncStorage.setItem("AWARDS_7", "0")
		setInterval(this.update, 1000);
		//console.log("ARRRRRE WE FUCKED?!");
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

	update = () => {
		AsyncStorage.getItem("numChal", function (error, result) {this.setState({numChal: result})}.bind(this));
		AsyncStorage.getItem("numSpon", function (error, result) {this.setState({numSpon: result})}.bind(this));
		console.log("NUMCHAL: " + this.state.numChal);
		console.log("NUMSPON: " + this.state.numSpon);

		AsyncStorage.getItem("AWARDS_0", function (error, result) {console.log(result)});
				AsyncStorage.getItem("AWARDS_1", function (error, result) {console.log(result)});
						AsyncStorage.getItem("AWARDS_2", function (error, result) {console.log(result)});
								AsyncStorage.getItem("AWARDS_3", function (error, result) {console.log(result)});
				AsyncStorage.getItem("AWARDS_4", function (error, result) {console.log(result)});

		if (this.state.streak >= 1){
			AsyncStorage.setItem("AWARDS_0", String(100))
		}
		if (this.state.numSpon >= 1){
			AsyncStorage.setItem("AWARDS_1", String(100))
		}
		if (this.state.numChal >= 1){
			AsyncStorage.setItem("AWARDS_2", String(100))
		}
		if (this.state.numChal >= 1 && this.state.numChal <= 3){
			AsyncStorage.setItem("AWARDS_3", (Math.floor(100 * (this.state.numChal / 3))).toString());
		}
		if (this.state.numSpon >= 1 && this.state.numSpon <= 3){
			AsyncStorage.setItem("AWARDS_4", Math.floor(100 * (this.state.numSpon / 3)).toString());
		}
		if (this.state.streak >= 1 && this.state.streak <= 7){
			AsyncStorage.setItem("AWARDS_5", (Math.floor(100 * (this.state.streak / 7))).toString());
		}
		this.forceUpdate();
	}

	checkIn = () => {
		if (this.state.streak_button_since != moment().format("MMM Do YY")) {
			this.setState({
				streak: this.state.streak + 1,
				streak_button_since: moment().format("MMM Do YY")
			});
		} else {
			AlertIOS.alert("You already checked in today! Come back tomorrow!");
		}
		//console.log(getItem(numSponsor));
		//console.log(getItem(numChal));
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.awards_title}>Awards</Text>
				<ScrollView>
					<Button title="Check In!" onPress={this.checkIn} color="#DA5D5D" />
					<View style={styles.test}>
						<Text style={styles.streak_text}> Your current streak: {this.state.streak} </Text>
					</View>
					<View style={styles.awards_container}>
					<Award
						progress="0"
						name="Got Started!"
						desc="Check in once (and then hopefully again)!"
						id="0"
					/>
					<Award
						progress="0"
						name="I Got Your Back!"
						desc="Add an ally."
						id="1"
					/>
					<Award
						progress="0"
						name="You're On Your Way!"
						desc="Add a challenge."
						id="2"
					/>
					<Award
						progress="0"
						name="Goals on goals!"
						desc="Add at least 3 challenges."
						id="3"
					/>
					<Award
						progress="0"
						name="We Got Your Back!"
						desc="Add at least 3 allies."
						id="4"
					/>
					<Award
						progress="0"
						name="A Week At a Time."
						desc="Check in for seven days in a row."
						id = "5"
					/>
					<Award
						progress="0"
						name="You're Your Competition!"
						desc="Beat your longest check-in streak!"
						id = "6"
					/>
				</View>
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
		paddingTop: 20,
		paddingBottom: 10,
		fontSize: 40,
		color: "white"
	},
	streak_text: {
		color: "white",
		justifyContent: "center",
		alignItems: "center"
	}
});
