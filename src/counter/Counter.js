import React from 'react';
import {Text, View, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from './counterSlice';

export function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View>
      <View>
        <Button
          title="Increment"
          aria-label="Increment value"
          onPress={() => dispatch(increment())}
        />
        <Text>{count}</Text>
        <Button
          title="Decrement"
          aria-label="Decrement value"
          onPress={() => dispatch(decrement())}
        />
      </View>
    </View>
  );
}
