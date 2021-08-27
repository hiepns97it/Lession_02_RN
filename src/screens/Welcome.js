import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions,
  SafeAreaView,
  ScrollView,
  FlatList
} from 'react-native';
import {useSelector, useDispatch } from 'react-redux'
import * as screenRd from '../redux/screen';

var { height } = Dimensions.get('window');
var box_count = 3;
var box_height = height / box_count;


function Item({ title }) {
    //console.log(title);
    return(
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default function Screen(props){
    let {navigation,route} = props;
      
    const dispatch = useDispatch();

    const DATA =[
        {
            id: "1",
            title: "A"
        },
        {
            id: "2",
            title: "B"
        },
        {
            id: "3",
            title: "C"
        },
        {
            id: "4",
            title: "D"
        },
        {
            id: "5",
            title: "E"
        },
        {
            id: "6",
            title: "F"
        },
        {
            id: "7",
            title: "G"
        },
        {
            id: "8",
            title: "I"
        },
        {
            id: "9",
            title: "K"
        },
    ]

    return(
         <SafeAreaView style={styles.container}>
             <ScrollView style={[styles.box, styles.box1]}>
                <Text style={[styles.textStyle]}>HIEPNS</Text>
            </ScrollView>
            <ScrollView style={[styles.box, styles.box2]}>
                <Text style={[styles.textStyle]}>HIEPNS</Text>
                <Button 
                title="go to login"
                 onPress={()=>dispatch(screenRd.changeScreen('Login'))}
                />  
            </ScrollView>
            <ScrollView style={[styles.box, styles.box3]}>
                
            </ScrollView>
        </SafeAreaView>  
        
        // <FlatList
        //         horizontal={false}
        //         showsHorizontalScrollIndicator = {true}
        //         data={DATA}
        //         renderItem= {({ item }) =>  <Item title={item.title}></Item>}
        //         keyExtractor={item => item.id}
        //     >
        // </FlatList>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        flexDirection: 'column',
    },
    textStyle:{
        backgroundColor: 'white',
        opacity: 0.7,
        color: "red",
        fontSize: 40,
        borderRadius:20,
        textAlign: 'center'
    },
    box:{
        //height: box_height, // cách 1. khi cố định 1 chiều 
        flex: 1,
    },
    //header
    box1: {
        flex: 1,
        backgroundColor: '#2196F3'
    },
    //content
    box2: {
        flex: 10,
        backgroundColor: '#8BC34A'
    },
    //footer
    box3: {
        flex: .5,
        backgroundColor: '#e3aa1a'
    },
    item:{
        backgroundColor: "#e3aa1a",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    title: {
        textAlign: "center",
        fontSize: 20
    }

})