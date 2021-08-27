import React from 'react';
import {
    View, Text, StyleSheet,Image
} from 'react-native';


export default function ImageDetail() {
    return(
        <View>
            <Text>test</Text>
            <Image
                source={require('../../assets/dog.jpg')}
                resizeMode="contain"
            />
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