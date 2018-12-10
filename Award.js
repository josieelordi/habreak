import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Communications from 'react-native-communications';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProgressCircle from 'react-native-progress-circle';
import { AsyncStorage } from "react-native";



export default class Award extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: props.name,
			progress: props.progress,
			completed: props.name > 0 ? true : false,
			desc: props.desc,
			id: props.id
		};
		setInterval(this.update, 1000);
	}


update = () => {
	AsyncStorage.getItem("AWARDS_" + this.state.id, function (error, result) {
		this.setState({progress: result})}.bind(this));}
sendCall = (number) => {
	console.log("Launching Phone Call");
	Communications.phonecall(number, true);
};

	// render() {
	// 	return (
	// 		<View style={styles.container}>
	// 			<View style={styles.nameContainer}>
	// 				<Text style={styles.text}>{this.state.name}</Text>
	// 			</View>
	//
	// 		</View>
	// 	);
	// }

	render() {
		return (
			<View style={styles.container}>

					<ProgressCircle
						percent={this.state.progress}
						radius={50}
						borderWidth={8}
						color= "#DA5D5D"
						shadowColor="#D6DEE3"
						bgColor="#07263B"
					>
							<Text style={{fontSize: 18, color: "white"}}>{this.state.progress + "%"}</Text>
					</ProgressCircle>

						<Text style={{fontSize: 24, color: "white"}}>{this.state.name}</Text>
						<Text style={{fontSize: 12, color: "white"}}>{this.state.desc}</Text>



			</View>
		);
	}
}
// https://github.com/facebook/react-native/issues/1438
const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		margin: 14
	},
	about_award: {

	}
});
