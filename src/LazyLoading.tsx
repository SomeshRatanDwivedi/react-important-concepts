// This component is used to show how React.lazy and Suspense work in react

//Definition: A way to load components only when they are needed, improving performance by reducing the initial load time.

import { Suspense, lazy} from 'react';
// import HeavyComponent from './HeavyComponent';

const LazyHeavyComponent = lazy(() => import("./HeavyComponent"));

const LazyLoading = () => {
  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", marginTop: "40px" }}>
      <h1>React Lazy Loading Demo</h1>
      <p>This example shows how React.lazy and Suspense work.</p>

        <Suspense fallback={<div style={{ marginTop: "20px" }}>⏳ Loading heavy component...</div>}>
          <LazyHeavyComponent />
        </Suspense>
      {/* <HeavyComponent/> */}
    </div>
  );
};

export default LazyLoading;

