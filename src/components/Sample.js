import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import {useSelector, useDispatch } from 'react-redux'
import * as sampleRd from '../redux/sample';

const Component = (props)=>{
    const sample = useSelector(state => state.sample);
    const screen = useSelector(state => state.screen);
    const {samples,isLoading,requestData} = sample;
    const dispatch = useDispatch();
    const [count,setCount] = React.useState(0);
    const [count2,setCount2] = React.useState(0);

    const onAdd=()=>{
        dispatch(sampleRd.addSample('data'))
    }
    const onRequest=()=>{
        dispatch(sampleRd.requestSample('New Show'))
    }

    React.useEffect(()=>{
        console.log('ComponentDidMount')
    },[])
    React.useEffect(()=>{
        console.log('ComponentDidUpdate')
    })

    //Call only when count2 change
    React.useEffect(()=>{
        console.log('ComponentDidUpdate count2')
    },[count2])
    React.useEffect(()=>{
        return ()=>{
            console.log('ComponentWillUnmount')
        }
    },[]);


    return(
        <View style={{flex:1}}>
            <View>
                <Text>{screen.current}</Text>
                <TouchableOpacity onPress={()=>setCount(count+1)}>
                    <Text>Count1 {count}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setCount2(count2+1)}>
                    <Text>Count2 {count2}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onAdd}>
                    <Text>Add Data</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onRequest}>
                    <Text>Request Data</Text>
                    {
                        isLoading&&<ActivityIndicator/>
                    }
                </TouchableOpacity>
            </View>
            {
                samples.map((e,i)=><View key={i}>
                    <Text>{e}</Text>
                </View>)
            }
            {
                requestData.map((e,i)=>{
                    return <View key={i}>
                        <Text>{e.employee_name} - {e.employee_salary}</Text>
                    </View>
                })
            }
        </View>
    )
}

export default Component;
