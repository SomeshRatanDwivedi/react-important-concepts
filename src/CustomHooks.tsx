// Custom hook to get the current window width

//Definition: A reusable function that you can use to encapsulate and share logic across components.

import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
}

const CustomHookExample = () => {
  const width = useWindowWidth();
  return <div style={{ border: "1px solid red", marginBottom: 16, padding: 16 }}>
    <h1>Custom Hook Example</h1>
    <div>Current window width: {width}px</div>
  </div>;
}

export default CustomHookExample;