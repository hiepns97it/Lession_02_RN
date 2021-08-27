import React from 'react';
import {TextInput} from 'react-native';

export default class MyInput extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            txt:'',
        }
    }
    getText=()=>{
        return this.state.txt;
    }
    render(){
        return(
            <TextInput
                value={this.state.txt}
                onChangeText={(txt)=>this.setState({
                    txt:txt
                })}
                {...this.props}
            />
        )
    }
}
