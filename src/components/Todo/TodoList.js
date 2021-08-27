import React from 'react';
import {
    View, Text, StyleSheet,Image, FlatList
} from 'react-native';


export default function TodoList(props) {
    const { todos, onTodoList } = props;

    function handleClick(todo){
        onTodoList(todo);
    }

    function Item({ title, todo }) {
        return(
            <View style={styles.item}>
                <Text style={styles.title} onPress={() => {handleClick(todo)}}>{title}</Text>
            </View>
        )
    }
    
    return(
        <View>
            <FlatList
                horizontal={false}
                showsHorizontalScrollIndicator = {true}
                data={todos}
                renderItem= {({ item }) =>  <Item title={item.title} todo={ item }></Item>}
                keyExtractor={item => item.id}
            >
            </FlatList>
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