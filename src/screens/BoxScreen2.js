import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return (
        <View style = {styles.viewStyle}>
            <Text style = {styles.textOneStyle}>Child #1</Text>
            <Text style = {styles.textTwoStyle}>Child #2</Text>
            <Text style = {styles.textThreeStyle}>Child #3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth: 3,
        borderColor: 'black',
        //alignItems: 'center',
        //flexDirection: 'row',
        height: 200,
        //justifyContent: 'space-around'
    },
    textOneStyle: { 
        borderWidth: 3,
        borderColor: 'red',
        //flex: 4
    },
    textTwoStyle: { 
        borderWidth: 3,
        borderColor: 'red',
        //flex: 4
        //alignSelf: 'flex-end'
        position: 'absolute',
        //same thing as adding 0 to top, bottom, left & right
        ...StyleSheet.absoluteFillObject
        //fontSize: 18,
        //top: 0,
        //bottom: 0,
        //left: 0,
        //right: 0
    },
    textThreeStyle: { 
        borderWidth: 3,
        borderColor: 'red',
        //flex: 2
    }
});

export default BoxScreen;