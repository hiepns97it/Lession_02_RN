import React, { useState, useReducer } from 'react';
import {
    View, Text, StyleSheet,Image,Button,TextInput
} from 'react-native';

const NUMBER_CHANGE = 1;

const reducer = (state, action) => {
    switch(action.type) {
        case 'change_increase':
            return {...state, count: state.count + NUMBER_CHANGE };
        case 'change_decrease':
            if(state.count < 1) return state;
            return {...state, count: state.count - NUMBER_CHANGE };
        default:
            return state;
    }
}

const Screen = (props) => {
    let { navigation,route } = props;
    //const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    const { count } = state;
    const [username, setUserName] = useState('');

    function handleClickIncrease(){
        setCount(count + 1);
    }
    function handleClickDecrease(){
        if(count < 1)return;
        setCount(count - 1);
    }
    return(
        <View style={styles.container}>
            <Button
                title="Increase"
                color="red"
                //onPress={(handleClickIncrease)}
                onPress = {() => {
                    dispatch({
                        type: 'change_increase',
                        payload: NUMBER_CHANGE
                    })
                }}
            />
            <Button
                title="Decrease"
                color="blue"
                //onPress={handleClickDecrease}
                onPress = {() => {
                    dispatch({
                        type: 'change_decrease',
                        payload: NUMBER_CHANGE
                    })
                }}
            />
            <Text>Current Count</Text>
            <Text>Number: {count}</Text>

            
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={username}
                onChangeText={(newuser) => {
                    setUserName(newuser);
                }}
            ></TextInput>
            <Text>My name is: {username}</Text>
            {username.length > 4 ? <Text>leng</Text>: null}
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        borderWidth: 1,
        margin: 15,
        borderColor: 'black'
    }
})
export default Screen;