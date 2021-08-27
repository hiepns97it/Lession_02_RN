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
    const {samples,isLoading,requestData} = sample;
    
    return(
        <View style={{flex:1}}>
            <Text>Component 2</Text>
            {
                samples.map((e,i)=><View key={i}>
                    <Text>{e}</Text>
                </View>)
            }
            
        </View>
    )
}

export default Component;
