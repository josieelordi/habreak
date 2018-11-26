import React from "react";
import { StyleSheet, Text, View, Button, AlertIOS } from "react-native";
import moment from "moment";
// import Sponsor from "./Sponsor.js";

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
			sponsors : [],
			numSponsors: 0
		};
	}
	addSponsor = (name) => {
		this.state.sponsors.push(name);
		this.state.numSponsors = this.state.numSponsors + 1;
		console.log(this.state.chalNames);
		this.forceUpdate();
	};

	addNewSponsor = () => {
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
			      text: 'Add Sponsor',
			      onPress: text => this.addSponsor(text),
			    },
			  ],
		);
	};


	render() {
		
		//console.log(this.state.chalNames);
		return (
	
			<View style={styles.container}>
				<Text style={styles.helo}>
				heey

				</Text>
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
