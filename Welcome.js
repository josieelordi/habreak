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
        <View style={styles.subtextContainer}>
          <Text style={styles.text_sub}>We all carry habits with us. </Text>
          <Text style={styles.text_sub}>Habreak is here to help
          you track your progress toward breaking the habits you want to unload. </Text>
        </View>
        <Text style={styles.text2}>Ready to get started?</Text>
        <View style={styles.button_container}>
        <Button
          onPress={() => this.props.navigation.navigate("Home")}
          title="Let's go!"
          color="#ffffff"
        />
        </View>
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
  subtextContainer: {
    marginTop: 30,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#A1EDCE",
    fontSize: 35,
  },
    text2: {
    color: "#ffffff",
    fontSize: 30,
  },
  text_sub: {
    color: "#D6DEE3",
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center"
  },
    button_container: {
    marginTop: 20,
    width: 125,
    borderRadius: 7,
    backgroundColor: '#DA5D5D'
  }
});
