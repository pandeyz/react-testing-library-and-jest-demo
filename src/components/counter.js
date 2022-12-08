import { useState } from 'react';

function Counter({ initCount=0 }) {
  const [count, setCount] = useState(initCount);

  return (
    <div>
      <button data-testid="btn-dec" disabled={(count < 1) ? true: null} onClick={() => setCount(count - 1)}>-</button>
      <span style={{ padding: 10 }} data-testid="counter-value">{count}</span>
      <button data-testid="btn-inc" onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default Counter;