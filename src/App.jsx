
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div className="app">
      <nav className="navbar">
        <h2>My React App</h2>
        <span>Home</span>
      </nav>

      <main className="container">
        <h1>Welcome, {name || "Tippu"}! 👋</h1>
        <p>Explore my interactive React application.</p>

        <section className="card">
          <h2>Interactive Counter</h2>
          <h1 className="count">{count}</h1>
          <div className="buttons">
            <button onClick={() => setCount(count + 1)}>
              + Increase
            </button>
            <button className="reset"
              onClick={() => setCount(0)}>
              Reset
            </button>
          </div>
        </section>

        <section className="card">
          <h2>Enter Your Name</h2>
          <input
            type="text"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>Hello, {name || "Guest"}!</p>
        </section>
      </main>
    </div>
  );
}

export default App;