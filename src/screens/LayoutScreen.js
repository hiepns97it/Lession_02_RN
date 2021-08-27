import React, { useState, useReducer } from 'react';
import {
    View, Text, StyleSheet,Image,Button,TextInput
} from 'react-native';

const Screen = (props) => {
    let { navigation,route } = props;
    
    return(
        /*Box object Model */ 
        // <View style={styles.viewStyle}>
        //     <Text style={styles.textStyle}>Box Screen</Text>
        //     <Text style={styles.textStyle}>Box Screen</Text>
        // </View>

        /* Flex Box */
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Box Screen1</Text>
            <Text style={styles.textTowStyle}>Box Screen2</Text>
            <Text style={styles.textThreeStyle}>Box Screen3</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'stretch',
        flexDirection: 'column',
        height: 200,
        justifyContent: 'space-around',
    },
    textOneStyle: {
        borderWidth: 1,
        borderColor: 'red',
    },
    textTowStyle: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 1,
        alignSelf: 'center',
        //position: 'absolute',
        ...StyleSheet.absoluteFillObject
    },
    textThreeStyle: {
        borderWidth: 1,
        borderColor: 'red',
    }
})
export default Screen;