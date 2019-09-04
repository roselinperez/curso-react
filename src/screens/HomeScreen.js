import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {

  return (
  <View>
    <Text style={[styles.text, {color: 'red'}]}>HI THERE!</Text>
    <Button
        onPress = {() => navigation.navigate('Components')}
        title = "Go to Components Demo"
        color = "gray"
    />
    <Button
        onPress = {() => navigation.navigate('List')}
        title = "Go to List Demo"
        color = "orange"
    />
    <Button
        onPress = {() => navigation.navigate('Image')}
        title = "Go to Image Screen"
        color = "blue"
    />
    <Button
        onPress = {() => navigation.navigate('Counter')}
        title = "Go to Counter Screen"
        color = "purple"
    />
    <Button
        onPress = {() => navigation.navigate('Color')}
        title = "Go to Color Screen"
        color = "red"
    />
    <Button
        onPress = {() => navigation.navigate('Square')}
        title = "Go to Square Color Screen"
        color = "green"
    />

  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center"
  }
});

export default HomeScreen;
