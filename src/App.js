// src/App.js
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function inc() { setCount(c => c + 1); }
  function dec() { setCount(c => c - 1); }

  return (
    <div style={{fontFamily:"sans-serif", textAlign:"center", marginTop:80}}>
      <h1>React CI Demo</h1>
      <p data-testid="count">Count: {count}</p>
      <button onClick={dec}>-</button>
      <button onClick={inc} style={{marginLeft:10}}>+</button>
    </div>
  );
}
