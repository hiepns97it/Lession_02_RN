import React, { useState } from 'react';
import {
    View, Text, StyleSheet, Image, Button, TextInput, FlatList
} from 'react-native';


const randomRgb = () =>{
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

export default function Screen(props){
    let { navigation,route } = props;
    const [colors, setColor] = useState([]); 

    function handleColor(){
        setColor([...colors, randomRgb()]);
    }

    return (
        <View style={styles.container}>
            <Button
                title="Add a color"
                onPress={() => handleColor()}
            ></Button>
            

            <FlatList
                data={colors}
                horizontal={false}
                renderItem={({ item }) => {
                    return  (
                    <View style={{
                        height: 100,
                        width: 100,
                        backgroundColor: item}}>
                    </View>
                   ) 
                }}
                keyExtractor={(item) => item}
            ></FlatList>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    color:{
        height: 100,
        width: 100,
        backgroundColor: randomRgb()
    }
})