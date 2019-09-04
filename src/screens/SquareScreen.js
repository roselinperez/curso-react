import React, {useReducer} from 'react';
import { Text, StyleSheet, View, Button, FlatList, ScrollView} from 'react-native';
import ColorCounter from '../Components/ColorCounter'

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    // state === {red: number, green: number, blue: number};
    // action === {colorTo Change: 'red' || 'green' || 'blue', amount: 15 || -15}

    switch(action.colorToChange){
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0
            ? state: {...state, red: state.red + action.amount};
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0
            ? state: {...state, green: state.green + action.amount};
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0
            ? state: {...state, blue: state.blue + action.amount};
        default:
            return state;
    }
};

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const {red, green, blue} = state;

    return (
        <ScrollView>
        <View>
            <ColorCounter
                onIncrease = {() => dispatch({colorToChange: 'red', amount: COLOR_INCREMENT})}
                onDecrease = {() => dispatch({colorToChange: 'red', amount: -1 * COLOR_INCREMENT})}
                color ="Red"
                colorText = "red"
            />
            <ColorCounter
                onIncrease = {() => dispatch({colorToChange: 'blue', amount: COLOR_INCREMENT}) }
                onDecrease = {() => dispatch({colorToChange: 'blue', amount: -1 * COLOR_INCREMENT})}
                color ="Blue"
                colorText = "blue"
            />
            <ColorCounter
                onIncrease = {() => dispatch({colorToChange: 'green', amount: COLOR_INCREMENT}) }
                onDecrease = {() => dispatch({colorToChange: 'green', amount: -1 * COLOR_INCREMENT})}
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