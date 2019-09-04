import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, FlatList, ScrollView} from 'react-native';

const ColorCounter = ({color, colorText, onIncrease, onDecrease}) => {
    return ( 
        <View>
            <Text style = {[styles.textStyle, {color: colorText }]}>{color} </Text>
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
        marginTop: 20,
        fontSize: 20,
        textAlign: "center"
    }
});

export default ColorCounter;