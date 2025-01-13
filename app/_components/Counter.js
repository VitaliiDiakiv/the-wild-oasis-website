"use client";
import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);
  console.log(users);
  return (
    <>
      <span>{count}</span>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </>
  );
}
