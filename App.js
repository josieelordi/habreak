import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Habreak</Text>
        <View style={button.container}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07263B',
    alignItems: 'center',
    justifyContent: 'center',
  },
    text: {
      color: '#fff',
      fontSize: 35
    },
});
