import React from 'react';
import { Provider as ReduxProvider} from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';

import store from './src/redux/store';
import Navigator from './src/Navigator';

function App(){

  return (
      <ReduxProvider store={store}>
        <NavigationContainer>
            <Navigator/>
        </NavigationContainer>
      </ReduxProvider>
  );
};

export default App;
