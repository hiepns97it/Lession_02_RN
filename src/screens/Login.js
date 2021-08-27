import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';
import {useDispatch } from 'react-redux'
import * as screenRd from '../redux/screen';



function eventClick() {
    console.log('click');
}

export default function Screen(props){
    let {navigation,route} = props;
    const dispatch = useDispatch();

    return(
        <View style={styles.container}>
            
            <Button 
                title="go to login"
                onPress={()=>dispatch(screenRd.changeScreen('Main'))}
            />
            <Button
                title="TEST"
                color="#ddd"
                onPress= {eventClick}
            >
           
            </Button>
            <TouchableOpacity
            
            >
                <Text>Login Screen</Text>
            </TouchableOpacity>
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