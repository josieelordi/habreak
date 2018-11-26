import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from "react-navigation";
import Home from "./Home.js";
import Welcome from "./Welcome.js";
import Motivation from "./Motivation.js";
import SponsorsView from "./SponsorsView.js";

// const App = createStackNavigator({
// 	Welcome: { screen: Welcome },
// 	Home: { screen: Home }
// });


const Habreak = createBottomTabNavigator(
  {
    Welcome: Welcome,
    Challenges: Home,
    Motivation: Motivation,
    Sponsors: SponsorsView

  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Challenges') {
          iconName = `ios-stopwatch${focused ? '' : '-outline'}`;
        } else if (routeName === 'Welcome') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Motivation') {
          iconName = `ios-happy${focused ? '' : '-outline'}`;
        } else if (routeName === 'Sponsors') {
          iconName = `ios-contacts${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#A1EDCE',
      inactiveTintColor: '#fff',
      style: {
      	backgroundColor: '#000000'
      }
    },
  }
)

// export default App;
export default Habreak;

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
				backgroundColor: "#041725"
			},
			headerTitleStyle: {
				color: "#ffffff",
				fontSize: 30
			},
			headerTransparent: true
		}
	}
);
