// This component is used to show how useCallback works in react

//Definition: A hook that returns a memoized version of the callback function that only changes if one of the dependencies has changed.

import { useState, useCallback } from 'react';

const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
// Memoize the callback functions to prevent unnecessary re-creations
  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  // Without useCallback, the handleIncrement function would be recreated on every render, which could lead to performance issues in child components that depend on this function.
  const handleDecrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  //Function without useCallback
  const handleIncrementNoCallback = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrementNoCallback = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }, []);

  console.log('UseCallBack component rendered');
  return (
    <div style={{ border: "1px solid red", marginBottom: 16, padding: 16 }}>
      <h1>UseCallBack Example</h1>
      <h1>Count: {count}</h1>
      <h2>Text: {text}</h2>
      <ChildComponent onIncrement={handleIncrement} onDecrement={handleDecrement} handleIncrementNoCallback={handleIncrementNoCallback} handleDecrementNoCallback={handleDecrementNoCallback} />
      <input type="text" value={text} onChange={handleChange} style={{ marginTop: 32 }} />
    </div>
  );
};

const ChildComponent = ({ onIncrement, onDecrement, handleIncrementNoCallback, handleDecrementNoCallback }: { onIncrement: () => void, onDecrement: () => void, handleIncrementNoCallback: () => void, handleDecrementNoCallback: () => void }) => {
  
  console.count('ChildComponent rendered');
  return (
    <div>
      <button style={{marginRight:8}} onClick={onIncrement}>Increment from Child</button>
      <button style={{marginRight:8}} onClick={onDecrement}>Decrement from Child</button>
      <button style={{marginRight:8}} onClick={handleIncrementNoCallback}>Increment No Callback</button>
      <button style={{marginRight:8}} onClick={handleDecrementNoCallback}>Decrement No Callback</button>
    </div>
  );
};
export default UseCallBack;
