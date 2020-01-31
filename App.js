import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';

class Demo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> This is App Component </Text>
        <Button onPress={() => this.props.navigation.navigate('test')} title="Go to Screen 2"></Button>
      </View>
    );
  }
}

class Test extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> This is Test Component </Text>
        <Button onPress={() => this.props.navigation.navigate('home')} title="Go to Screen 1"></Button>
      </View>
    );
  }
}

const MainNavigator = createStackNavigator({
  home: Demo,
  test: Test
})

const App = createAppContainer(MainNavigator);

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})