import React , { useState, useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ColorCounter } from '../components/colorCounter/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    // state === { red: 0, green: 0, blue: 0 }
    // action === { type: 'change_red' || 'change_green' || 'change_blue}, payload: 15 || -15
    switch(action.type){
        case 'change_red':
            if(state.red + action.payload > 255 ||  state.red + action.payload < 0){
                return state;
            }
            return  {...state, red: state.red + action.payload };
        case 'change_green':
            if(state.green + action.payload > 255 ||  state.green + action.payload < 0){
                return state;
            }
            return  {...state, green: state.green + action.payload };
        case 'change_blue':
            if(state.blue + action.payload > 255 ||  state.blue + action.payload < 0){
                return state;
            }
            return  {...state, blue: state.blue + action.payload };
        default:
            return state;
    }
}


const Screen = (props) =>{
    // sử dụng userReudcer để xử lý nhiều state phức tạp
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;
    /*
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => {
        switch(color){
            case 'red':{
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                // if(red + change > 255 || red + change < 0){
                //     return;
                // }
                // setRed(red + change);
                break;
            }
            case 'blue':{
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                // if(blue + change > 255 || blue + change < 0){
                //     return;
                // }
                // setBlue(blue + change);
                break;
            }
            case 'green':{
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                // if(green + change > 255 || green + change < 0){
                //     return;
                // }
                // setGreen(green + change);
                break;
            }
        }
    }
    */

    return(
        <View style={styles.container}>
            <ColorCounter  
                color="Red"
                onIncrease = {() => {
                    dispatch({
                        type: 'change_red',
                        payload: COLOR_INCREMENT
                    })
                    //setColor('red', COLOR_INCREMENT)
                    //setRed(red  + COLOR_INCREMENT);
                }}
                onDescrease = {() => {
                    dispatch({
                        type: 'change_red',
                        payload: -1  * COLOR_INCREMENT
                    })
                    //setColor('red', -1 * COLOR_INCREMENT)
                    //setRed(red - COLOR_INCREMENT);
                }}
                countColor={red}
            />
            <ColorCounter 
                color="Blue"
                onIncrease = {() => {
                    dispatch({
                        type: 'change_blue',
                        payload: COLOR_INCREMENT
                    })
                    //setColor('blue', COLOR_INCREMENT);
                    //setBlue(blue + COLOR_INCREMENT);
                }}
                onDescrease = {() => {
                    dispatch({
                        type: 'change_blue',
                        payload: -1 * COLOR_INCREMENT
                    })
                    //setColor('blue', -1 * COLOR_INCREMENT)
                    //setBlue(blue - COLOR_INCREMENT);
                }}
                countColor={blue}
            />
            <ColorCounter 
                color="Green"
                onIncrease = {() => {
                    dispatch({
                        type: 'change_green',
                        payload: COLOR_INCREMENT
                    })
                    //setColor('green', COLOR_INCREMENT)
                    //setGreen(green + COLOR_INCREMENT);
                }}
                onDescrease = {() => {
                    dispatch({
                        type: 'change_green',
                        payload: -1 * COLOR_INCREMENT
                    })
                    //setColor('green', -1 * COLOR_INCREMENT)
                    //setGreen(green - COLOR_INCREMENT);
                }}
                countColor={green}
            />
            <View
                style={{
                    height: 150, width:150, backgroundColor:`rgb(${red}, ${blue}, ${green})`
                }}            
            >
            </View>

            <View
                style={{
                    height: 150, width:150, backgroundColor:`rgb(${state.red}, ${state.blue}, ${state.green})`
                }}            
            >
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Screen;