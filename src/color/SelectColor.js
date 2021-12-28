import React from 'react';
import {useDispatch} from 'react-redux';
import {paleLavender, lightPastel, rhythm, cyberGrape} from './colorSlice';
import {OneButton, SelectorColor} from './style';

export function SelectColor() {
  const dispatch = useDispatch();

  return (
    <SelectorColor>
      <OneButton color={'#E4CDFF'} onPress={() => dispatch(paleLavender())} />
      <OneButton color={'#B19CD9'} onPress={() => dispatch(lightPastel())} />
      <OneButton color={'#816EA7'} onPress={() => dispatch(rhythm())} />
      <OneButton color={'#534278'} onPress={() => dispatch(cyberGrape())} />
    </SelectorColor>
  );
}
