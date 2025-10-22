// Context API example

//Definition: A way to pass data through the component tree without having to pass props down manually at every level.

import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext<{ value: string; setValue: React.Dispatch<React.SetStateAction<string>> } | null>(null);

const MyProvider = ({ children }: { children: React.ReactNode }) => {
  const [value, setValue] = useState('Hello, World!');
  return <MyContext.Provider value={{ value, setValue }}>{children}</MyContext.Provider>;
};

const MyComponent = () => {
  const context = useContext(MyContext);
  if (!context) throw new Error('MyComponent must be used within MyProvider');
  const { value, setValue } = context;
  return (
    <div style={{ border: "1px solid red", marginBottom: 16, padding: 16 }}>
      <h1>Context API Example</h1>
      <p>{value}</p>
      <button onClick={() => setValue('Hello, Context API!')}>Change Context</button>
    </div>
  );
};
const ContextApiExample = () => {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
};
export default ContextApiExample;