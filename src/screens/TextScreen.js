import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {
    const [password, setPassword] = useState("");
    return (
        <View>
            <Text>Enter Password:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize = 'none'
                autoCorrect = {false}
                value = {password}
                onChangeText = {(newText) => setPassword(newText) }
            />
            {/*<Text style={styles.textStyle}>My name is: {name}</Text>*/}
            {password.length < 4 ? <Text style = {styles.textStyle}>Password must be at least 4 characters.</Text>: null}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    },
    textStyle: {
        textAlign: "center"
    }
});

export default TextScreen;