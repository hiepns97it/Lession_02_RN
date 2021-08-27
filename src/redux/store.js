import { createStore,combineReducers,applyMiddleware } from 'redux'
import { combineEpics,createEpicMiddleware } from 'redux-observable'
import sample,{sampleRequestEpic} from './sample'
import screen from './screen';

const rootReducer = combineReducers({
    sample : sample,
    screen:screen,
});

const rootEpics =  combineEpics(
    sampleRequestEpic
);
const epicMiddleware = createEpicMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
);
epicMiddleware.run(rootEpics);
export default store