import React from 'react';
import {Provider} from 'react-redux';
import {ColorItem} from './src/color/ColorItem';
import {SelectColor} from './src/color/SelectColor';
import store from './src/store';
import {StyledView} from './style';

const App = () => {
  return (
    <Provider store={store}>
      <StyledView>
        <SelectColor />
        <ColorItem />
      </StyledView>
    </Provider>
  );
};

export default App;
