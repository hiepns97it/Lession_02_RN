import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';
import * as Components from '../../components';

export default function Screen(props){
    let {navigation,route} = props;

    return(
        <View style={styles.container}>
            <Text>Home Tab</Text>
            <Button 
                title="go to main tab"
                onPress={()=>navigation.navigate('MainStack')}
            />
            <Components.Sample/>
            <Components.Sample2/>
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