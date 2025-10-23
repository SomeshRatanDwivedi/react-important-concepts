import React, { useCallback, useState } from "react";


//Problem- Child is rendering evering time when clicked on Click me. It should not
//I tried to use useCallback for handleClick function but due to count change we need to keep it in depenecy array of useCallback and that why
//this will not solve the issue

//we have to use 2 things 1 is useCallback without dependency, using prev method we can get the current state of count every time

//second we have to use React.memo in child component to avoid the re rendering every time when parent render

//Below is the question code and after that the solved code 
const ChildComponent = ({ onClick }) => {
  console.log("Child re-rendered");
  return <button onClick={onClick}>Click Me</button>;
}

const Rerender = () => {
  const [count, setCount] = useState(0);

  const handleClick =() => {
    setCount(count+1);
  };

  return (
    <div>
      <ChildComponent onClick={handleClick} />{" "}
      {/* This will trigger unnecessary re-renders */}
      <p>Count: {count}</p>
    </div>
  );
};
export default Rerender;



// const ChildComponent = React.memo(({ onClick }) => {
//   console.log("Child re-rendered");
//   return <button onClick={onClick}>Click Me</button>;
// });

// const Rerender = () => {
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     setCount((prev) => prev + 1);
//   }, []);

//   return (
//     <div>
//       <ChildComponent onClick={handleClick} />{" "}
//       {/* This will trigger unnecessary re-renders */}
//       <p>Count: {count}</p>
//     </div>
//   );
// };