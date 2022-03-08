import { useState, useEffect } from 'react';
const Hooks = (props) => {
  const [count, setCount] = useState(props.count);
  const [name, setName] = useState('Webbrain');
  useEffect(() => {
    setCount(props.count);
  }, [props.count]);
  return (
    <div style={{ flex: 1 }}>
      <h1>Hooks Component</h1>
      <h1>Count:{count}</h1>
      <h1>Name:{name}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};
export default Hooks;
