import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, FlatList, ScrollView} from 'react-native';
import ColorCounter from '../Components/ColorCounter'

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0)
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

    const setColor = (color, change) => {
        //color === 'red', 'green', 'blue'
        //change === +15, -15

        switch (color){
            case 'red':
                red + change > 255 || red + change < 0 ? null:
                setRed(red + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null:
                setGreen(green + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null:
                setBlue(blue + change);
                return;
            default:
                return;
        }
    };

    return (
        <ScrollView>
        <View>
            <ColorCounter
                onIncrease = {() => setColor('red', COLOR_INCREMENT)}
                onDecrease = {() => setColor('red', -1 * COLOR_INCREMENT)}
                color ="Red"
                colorText = "red"
            />
            <ColorCounter
                onIncrease = {() => setColor('blue', COLOR_INCREMENT)}
                onDecrease = {() => setColor('blue', -1 * COLOR_INCREMENT)}
                color ="Blue"
                colorText = "blue"
            />
            <ColorCounter
                onIncrease = {() => setColor('green', COLOR_INCREMENT)}
                onDecrease = {() => setColor('green', -1 * COLOR_INCREMENT)}
                color ="Green"
                colorText = "green"
            />
            <View
                style = {{
                    alignSelf: "center",
                    height: 150,
                    width: 150,
                    marginTop: 20,
                    marginBottom: 20,
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`
                }}
            />
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;