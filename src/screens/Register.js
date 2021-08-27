import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';
import {useDispatch } from 'react-redux'
import * as screenRd from '../redux/screen';

export default function Screen(props){
    let {navigation,route} = props;
    const dispatch = useDispatch();

    return(
        <View style={styles.container}>
            <Text>Register Screen</Text>
            <Button 
                title="go to login"
                onPress={()=>dispatch(screenRd.changeScreen('Main'))}
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
})