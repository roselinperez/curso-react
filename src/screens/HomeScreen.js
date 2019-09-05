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
        title = "Go to Image Demo"
        color = "blue"
    />
    <Button
        onPress = {() => navigation.navigate('Counter')}
        title = "Go to Counter Demo"
        color = "purple"
    />
    <Button
        onPress = {() => navigation.navigate('Color')}
        title = "Go to Color Demo"
        color = "red"
    />
    <Button
        onPress = {() => navigation.navigate('Square')}
        title = "Go to Square Color Demo"
        color = "green"
    />
    <Button
        onPress = {() => navigation.navigate('Text')}
        title = "Go to Square Text Demo"
        color = "black"
    />
    <Button
        onPress = {() => navigation.navigate('Box')}
        title = "Go to Box Text Demo"
        color = "pink"
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
