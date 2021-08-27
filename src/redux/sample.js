import { ofType } from 'redux-observable';
import { of} from 'rxjs';
import { mergeMap, catchError ,map} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

/*Actions type */
export const ADD_SAMPLE = "ADD_SAMPLE";
export const REQUEST_SAMPLE = "REQUEST_SAMPLE";
export const REQUEST_SAMPLE_DONE = "REQUEST_SAMPLE_DONE";
/*Actions function */
export const addSample  = data => {
    return {
        type:ADD_SAMPLE,
        payload:data
    }
}

export const requestSample = data=>{
    return {
        type: REQUEST_SAMPLE,
        payload:data
    }
}

export const requestSampleDone = data=>{
    console.log('requestSampleDone',data)
    return {
        type: REQUEST_SAMPLE_DONE,
        payload:data.data
    }
}


const initState = {
    samples:[
        'Sample 1',
        'Sample 2',
    ],
    requestData:[
    ],
    isLoading:false,
}
/*Reducers */
const sampleReducer = (state  = initState,action)=>{
    console.log(action)
    switch(action.type){
        case ADD_SAMPLE:
            return {
                ...state,
                samples:[
                    ...state.samples,
                    action.payload
                ]
            }
        case REQUEST_SAMPLE:
            return{
                ...state,
                isLoading:true,
            }
        case REQUEST_SAMPLE_DONE:
            return {
                ...state,
                isLoading:false,
                requestData:action.payload
            }
        default:
            return state;
    }
}

/*Epics */

export const sampleRequestEpic = (action$, state$) => action$.pipe(
    ofType(REQUEST_SAMPLE),
    mergeMap(action =>{
        return ajax.get('http://dummy.restapiexample.com/api/v1/employees').pipe(
            map((response=>
                requestSampleDone(response.response)
            )),
            catchError(error => of({
                type: REQUEST_SAMPLE_DONE,
                payload: [],
                error:error,
            }))
        )
    })
);

export default sampleReducer;