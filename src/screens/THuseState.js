import React, { useState } from 'react';
import {
    View, Text, StyleSheet,Image,Button
} from 'react-native';
import ImageDetail from '../components/imageDetail/ImageDetail';

function getRandomColor(){
    const arrColor = ['pink', 'red', 'green', 'blue'];
    const randomIndex = Math.trunc(Math.random() * 4);
    return arrColor[randomIndex];
}

export default function Screen(props){
    let { navigation,route } = props;
    const [color, setColor] = useState('pink');

    function handleBoxClick(){
        const newColor = getRandomColor();
        setColor(newColor);
    }
    return(
        <View style={styles.container}>
            <Button
                title="click"
                color={color}
                onPress = {handleBoxClick}
            >
            </Button>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})