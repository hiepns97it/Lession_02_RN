import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

export default function Screen(props){
    let {navigation,route} = props;

    return(
        <View style={styles.container}>
            <Text>Profile Tsab</Text>
            <Button 
                title="go to Detail"
                onPress={()=>navigation.navigate('Detail')}
            />
            <Button
                title="go to image"
                color="red"
                onPress={() => navigation.navigate('ImageScreen')}
            ></Button>
            <Button
                title="go to useState"
                color="blue"
                onPress={() => navigation.navigate('THuserState')}
            ></Button>
            <Button
                title="go to todolist"
                color="green"
                onPress={() => navigation.navigate('Todo')}
            ></Button>
            <Button
                title="go to counterscreen"
                color="pink"
                onPress={() => navigation.navigate('CounterScreen')}
            ></Button>
            <Button
                title="go to add a color"
                color="green"
                onPress={() => navigation.navigate('ColorScreen')}
            >
            </Button>

            <Button
                title="go to color square"
                color="green"
                onPress={() => navigation.navigate('SquareScreen')}
            >
            </Button>
            <Button
                title="go to layout Screen"
                color="green"
                onPress={() => navigation.navigate('LayoutScreen')}
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