import React, { useState } from 'react';
import {
    View, Text, StyleSheet,Image,Button,TextInput
} from 'react-native';
import TodoList from '../components/Todo/TodoList';

export default function Screen(props){
    let { navigation,route } = props;
    const arr = [
        {
            id: 1,
            title: 'Nguyen Van A'
        },
        {
            id: 2,
            title: 'Nguyen Van B'
        },
        {
            id: 3,
            title: 'Nguyen Van C'
        }
    ]
    const [Todolist, setTodoList] = useState(arr);

    function handleTodoClick(todo){
        const index = Todolist.findIndex(x => x.id === todo.id);
        if(index < 0)   return ;
        const newTodoList = [...Todolist];
        newTodoList.splice(index, 1);
        console.log('newtodo', newTodoList);
        setTodoList(newTodoList);
    }
    return(
        <View>
            <TextInput
                style={{height: 40, borderColor: 'skyblue', margin: 20, borderWidth: 2}}
                placeholder="Nhập todo!"
            />
            <Button 
                title="go to main tab"
                onPress={()=>navigation.navigate('MainStack')}
            />
            <TodoList todos={Todolist} onTodoList={handleTodoClick}/>
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