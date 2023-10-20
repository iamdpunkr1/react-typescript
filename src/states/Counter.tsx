import React, { useContext } from 'react';
import { MyContext } from './MyContext';

const counterStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '24px',
  margin: '20px',
};

const buttonStyle: React.CSSProperties = {
  padding: '10px 20px',
  fontSize: '18px',
  margin: '5px',
  cursor: 'pointer',
};

function Counter() {
  const { state, dispatch } = useContext(MyContext);
  const { count } = state;

  const increment = () => {
    dispatch({ type: "INC" });
  }

  const decrement = () => {
    dispatch({ type: "DEC" });
  }

  const reset = () => {
    dispatch({ type: "RESET" });
  }

  return (
    <div style={counterStyle}>
      <div>Count: {count}</div>
      <button style={buttonStyle} onClick={increment}>+</button>
      <button style={buttonStyle} onClick={decrement}>-</button>
      <button style={buttonStyle} onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
