// This component is used to show how React.lazy and Suspense work in react



const HeavyComponent = () => {
  const data = Array.from({ length: 1000 }, (_, i) => `🚀 Item ${i + 1}`);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Heavy Component Loaded!</h2>
      <ul style={{ maxHeight: "231px", overflowY: "auto", border: "1px solid #ddd", padding: "10px" }}>
        {data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default HeavyComponent;

