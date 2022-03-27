import React from 'react';

import { useAppDispatch, useAppSelector } from './hooks';
import { increment, decrement, addAmount } from './features/counter/counter-slice';

export const App: React.FC = () => {
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(addAmount(10))}>+10</button>
    </div>
  );
};
