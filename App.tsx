import React from 'react';
import {Provider} from 'react-redux';
import {ColorItem} from './src/color/ColorItem';
import {SelectorColor} from './src/color/style';
import store from './src/store';
import {StyledView} from './style';

const App = () => {
  return (
    <Provider store={store}>
      <StyledView>
        <SelectorColor />
        <ColorItem />
      </StyledView>
    </Provider>
  );
};

export default App;
