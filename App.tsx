import React from 'react';
import {Provider} from 'react-redux';
import {Counter} from './src/counter/Counter';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
