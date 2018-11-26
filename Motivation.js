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
			quotes: ["You can do it!", 
					"YAAAAAAAAA BUDDY :)", 
					"You go bb!", 
					"We love you! Keep going!",
					"Woooohoooooo",
					"DANIEL CHANDROSS?!",
					"Oh hai Mark",
					"Oh hai doggy",
					"Weird flex but ok.",
					"Fuck you, keep going."]
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
