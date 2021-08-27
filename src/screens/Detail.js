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
            <Text>Detail post</Text>
            <Button 
                title="go back"
                onPress={()=>navigation.goBack()}
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