import React from 'react';
import {
    View, Text, StyleSheet,Image
} from 'react-native';
import ImageDetail from '../components/imageDetail/ImageDetail';

export default function Screen(props){
    let { navigation,route } = props;
    const arrImages =[
        {
            src: '',
            id: ''
        },
        {
            src: '',
            id: ''
        },
        {
            src: '',
            id: ''
        }
    ]

    return(
        <View style={styles.container}>
            <Text> Image Screen </Text>
            <ImageDetail/>
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