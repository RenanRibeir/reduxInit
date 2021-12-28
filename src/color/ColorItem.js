import React from 'react';
import {useSelector} from 'react-redux';
import {ItemColor} from './style';

export function ColorItem() {
  const color = useSelector(state => state.color.value);

  return <ItemColor color={color} />;
}
