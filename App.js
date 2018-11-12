import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import Home from "./Home.js";
import Welcome from "./Welcome.js";

const App = createStackNavigator({
	Welcome: { screen: Welcome },
	Home: { screen: Home }
});

export default App;

const RootStack = createStackNavigator(
	{
		Welcome: Welcome,
		Home: Home
	},
	{
		initialRouteName: "Welcome",
		/* The header config from HomeScreen is now here */
		navigationOptions: {
			headerStyle: {
				backgroundColor: "#07263B"
			},
			headerTitleStyle: {
				fontWeight: "bold",
				color: "#ffffff",
				fontSize: 30
			},
			headerTransparent: true
		}
	}
);
