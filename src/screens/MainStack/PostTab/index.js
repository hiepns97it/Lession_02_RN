import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';
import DetailPost from './DetailPost';
import { createStackNavigator } from '@react-navigation/stack';

export function Screen(props){
    let {navigation,route} = props;

    return(
        <View style={styles.container}>
            <Text>Post Tab</Text>
            <Button 
                title="go to Detail"
                onPress={()=>navigation.navigate('DetailPost')}
            />
        </View>
    )
}

const PostStack = createStackNavigator();

export default function PostStackScreen() {
  return (
    <PostStack.Navigator screenOptions={{headerShown: false,}}>
      <PostStack.Screen name="PostTab" component={Screen}/>
      <PostStack.Screen name="DetailPost" component={DetailPost} />
    </PostStack.Navigator>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})