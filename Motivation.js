import React from "react";
import { StyleSheet, Text, View, Button, AlertIOS } from "react-native";
import moment from "moment";

export default class Motivation extends React.Component {
	static navigationOptions = {
		title: "Inspiration",
		headerStyle: {
				backgroundColor: "#041725"
		}
	};

	constructor(props) {
		super(props);

		this.state = {
			quotes: ["I know it feels impossible, but look how far you've come.",
					"Your past self would be so proud of you!",
					"Keep it up! You got this.",
					"Your family and friends are going to be so proud of you.",
					"Don't let this one moment trump all of the progress you've made.",
					"You're so strong.",
					"You are right where you're supposed to be.",
					"This does not define you. Keep up the good work!",
					"You are capable of whatever you put your mind to.",
					"Your willpower does not run out.",
					"Deep breaths. In through the nose, out through the mouth.",
					"You are a STAR!",
					"We're going to get through this. Together!",
					"First say to yourself what you would be; and then do what you have to do."]
		};
	}

	buttonClicked = () => {
		this.forceUpdate();
	}

	render() {
		let quote = this.state.quotes[Math.floor(Math.random()*this.state.quotes.length)];

		return (
			<View style={styles.container}>
				<View style={styles.quote_containter}>
					<Text style={styles.quote}>{ quote }</Text>
				</View>
				<View style={styles.button_container}>
					<Button title="Another One!" color="#A1EDCE" onPress={this.buttonClicked} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	button_container: {
		paddingBottom: 70,
	},
	quote_container: {
		paddingTop: 0,
		backgroundColor: '#0B3049',
		alignItems: 'center',
		justifyContent: 'center'
	},
	container: {
		flex: 1,
	    backgroundColor: "#07263B",
	    alignItems: "center",
	    justifyContent: "center",
	  },
	quote: {
		color: "white",
		fontSize: 40,
	},
});
