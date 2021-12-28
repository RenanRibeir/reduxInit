import React from 'react';
import {Provider} from 'react-redux';
import {Color} from './src/color/Color';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <Color />
    </Provider>
  );
};

export default App;
