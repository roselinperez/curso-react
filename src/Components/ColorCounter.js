import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, FlatList} from 'react-native';

const ColorCounter = ({color, color2, onIncrease, onDecrease}) => {
    return (
        <View>
            <Text style = {[styles.textStyle, {color: color2 }]}>{color} </Text>
            <Button
                onPress = {() => onIncrease()}
                title = {`Increase ${color}`}
            />
            <Button
                onPress = {() => onDecrease()}
                title = {`Decrease ${color}`}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        textAlign: "center"
    }
});

export default ColorCounter;