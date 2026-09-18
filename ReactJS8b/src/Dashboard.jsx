import { useState } from "react";

function Dashboard() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Dashboard Page</h2>

      <h3>Counter: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default Dashboard;