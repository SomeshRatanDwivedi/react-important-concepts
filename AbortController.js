import "./styles.css";
import { useState, useRef, useEffect, memo, useCallback } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortControllerRef = useRef(null);
  const delay = (ms) => new Promise((res, rej) => setTimeout(res, ms));
  const getTodos = useCallback(async () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const controller = new AbortController();
    abortControllerRef.current = controller;
    try {
      setLoading(true);
      await delay(1000 * 5);
      const data = await fetch("https://jsonplaceholder.typicode.com/todos", {
        signal: controller.signal,
      });
      jsonData = await data.json();
      console.log(jsonData, "jsonData");
      setData(jsonData);
    } catch (err) {
      setLoading(false);
      if (err.name === "AbortError") {
        console.log("Fetch safely aborted");
        return;
      }
      setError(err.message || "Something went wrong");
    } finally {
      console.log(abortControllerRef.current, "abortControllerRef.current");
      if (abortControllerRef.current === controller) {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div style={{ height: 300, border: "1px solid red", marginBottom: 24 }}>
          Loading
        </div>
      ) : (
        <ul
          style={{ height: 300, border: "1px solid red", overflow: "scroll" }}
        >
          {data?.map((ele) => (
            <li key={ele.id}>{ele.title}</li>
          ))}
        </ul>
      )}
      <Button getTodos={getTodos} />
    </div>
  );
}
const Button = memo(({ getTodos }) => {
  return <button onClick={getTodos}>Get Todos</button>;
});
