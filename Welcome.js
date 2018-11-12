import React from "react";
import {
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from "react-native";
import Home from "./Home";

export default class Welcome extends React.Component {
  static navigationOptions = {
    title: "Welcome"
    /* No more header config here! */
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Habreak</Text>
        <Text style={styles.text_sub}>Ready to get started?</Text>
        <Button
          onPress={() => this.props.navigation.navigate("Home")}
          title="Let's go!"
          color="#DA5D5D"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#07263B",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#A1EDCE",
    fontSize: 35
  },
  text_sub: {
    color: "#fff",
    fontSize: 25
  }
});
