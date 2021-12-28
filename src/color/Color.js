import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {paleLavender, lightPastel, rhythm, cyberGrape} from './colorSlice';
import {OneButton, StyledView, ItemColor, SelectorColor} from './style';

export function Color() {
  const color = useSelector(state => state.color.value);
  const dispatch = useDispatch();

  return (
    <StyledView>
      <SelectorColor>
        <OneButton color={'#E4CDFF'} onPress={() => dispatch(paleLavender())} />
        <OneButton color={'#B19CD9'} onPress={() => dispatch(lightPastel())} />
        <OneButton color={'#816EA7'} onPress={() => dispatch(rhythm())} />
        <OneButton color={'#534278'} onPress={() => dispatch(cyberGrape())} />
      </SelectorColor>

      <ItemColor color={color} />
    </StyledView>
  );
}
