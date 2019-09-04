import React, {useState} from 'react';
import { Text, StyleSheet, View, Button} from 'react-native';

const CounterScreen = () => {
    //to do: fix this. Doesn't work with the next line.
    //let counter = 0;
    //Works with useState, keeps track on the changing value
    const [counter, setCounter] = useState(0);


    return (
        <View>
            <Button title = "Increase"
                    onPress = {() => {
                        //Can't change the value directly
                        //counter++;
                        setCounter(counter + 1);
                    }}
            />
            <Button title = "Decrease"
                    onPress = {() => {
                        setCounter(counter - 1);
                    }} />
            <Text style={styles.textStyle}>Current Count: {counter} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        textAlign: "center",
        fontSize: 20
    }
});

export default CounterScreen;