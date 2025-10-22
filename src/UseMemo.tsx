//This componenet is used to show how useMemo works in react

//Definition: A hook that memoizes the result of a computation, recomputing it only when one of the dependencies has changed.
import { useState, useMemo } from 'react';

const expensiveComputation = (num: number) => {
  console.count('Performing expensive computation...');
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += i * num;
  }
  return result;
};
const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  // Memoize the result of the expensive computation
  const memoizedValue = useMemo(() => expensiveComputation(multiplier), [multiplier]);
  //If we don't use useMemo, the expensiveComputation will run on every render, causing performance issues. Below is how it would look without useMemo:

  //Use this code instead of the useMemo line above to see the difference
  // const memoizedValue = expensiveComputation(multiplier);
  return (
    <div style={{ border: "1px solid red", marginBottom: 16, padding: 16 }}>
      <h1>UseMemo Example</h1>
      <h1>Count: {count}</h1>
      <h2>Multiplier: {multiplier}</h2>
      <h2>Computed Value: {memoizedValue}</h2>
      <button style={{ marginRight: 8 }} onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setMultiplier(multiplier + 1)}>Increment Multiplier</button>
    </div>
  );
};
export default UseMemo;