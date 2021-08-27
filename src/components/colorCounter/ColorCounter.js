import React from 'react';
import {
    View, Text, StyleSheet,Image, Button
} from 'react-native';

export function ColorCounter(props) {
    return(
        <View>
            <Text>{props.color}: {props.countColor}</Text>
            <Button
                title={`Increase ${props.color}`}
                color="red"
                onPress={() => {
                    props.onIncrease()
                }}
            ></Button>
            <Button
                title={`Decrease ${props.color}`}
                onPress={() => {
                    props.onDescrease()
                }}
            ></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});