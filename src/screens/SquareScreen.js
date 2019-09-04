import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, FlatList} from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);

    return (
        <View>
            <ColorCounter
                onIncrease = {() => setRed(red + 1)}
                onDecrease = {() => setRed(red - 1)}
                color ="Red"
                color2 = "red"
            />
            <ColorCounter
                onIncrease = {() => setBlue(blue + 1)}
                onDecrease = {() => setBlue(blue - 1)}
                color ="Blue"
                color2 = "blue"
            />
            <ColorCounter
                onIncrease = {() => setGreen(green + 1)}
                onDecrease = {() => setGreen(green - 1)}
                color ="Green"
                color2 = "green"
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;