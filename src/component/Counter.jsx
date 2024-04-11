import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter">
      <h1 className='text-purple-300'>Counter App</h1>
      <div className="bg-yellow-200 p-24 my-3 text-6xl rounded-lg">{count}</div>
      <div className="flex justify-between">
        <button onClick={increment} className='bg-yellow-100 text-red-400'>Increment</button>
        <button onClick={decrement} className='bg-yellow-100 text-red-400' disabled={count === 0}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
