import React from 'react';
import {Text, View, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {red, purple} from './colorSlice';

export function Color() {
  const color = useSelector(state => state.color.value);
  const dispatch = useDispatch();

  return (
    <View>
      <View>
        <Button
          title="Red"
          aria-label="Increment value"
          onPress={() => dispatch(red())}
        />
        <Button
          title="Purple"
          aria-label="Decrement value"
          onPress={() => dispatch(purple())}
        />
      </View>

      <View>
        <Text style={{color: color}}>{color}</Text>
      </View>
    </View>
  );
}
