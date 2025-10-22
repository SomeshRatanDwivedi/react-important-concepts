// This component is used to show how React.memo works in react

//Definition: A higher order component that memoizes a component, preventing unnecessary re-renders when props have not changed.

import { useState, memo } from 'react';

const ChildWithMemo = memo(({ value }: { value: number }) => {
  console.count('Child with memo component rendered');
  return <div style={{marginBottom:16}}>Child Value with memo: {value}</div>;
});

const ChildWithoutMemo = ({ value }: { value: number }) => {
  console.count('Child without memo component rendered');
  return <div style={{marginBottom:16}}>Child Value without memo: {value}</div>;
}
const Memo = () => {
  const [count, setCount] = useState(0);
  const [childValue, setChildValue] = useState(0);
  console.count('Memo component rendered');
  return (
    <div style={{ border: "1px solid red", marginBottom: 16, padding: 16 }}>
      <h1>Memo Example</h1>
      <h1>Count: {count}</h1>
      <ChildWithMemo value={childValue} />
      <ChildWithoutMemo value={childValue} />
      <button style={{marginRight:8}} onClick={() => setCount((prev) => prev + 1)}>Increment Count</button>
      <button onClick={() => setChildValue((prev) => prev + 1)}>Increment Child Value</button>
    </div>
  );
};
export default Memo;