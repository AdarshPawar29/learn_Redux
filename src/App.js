import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './action';
//import './App.css';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
      {isLogged ? <h3>Valuable data You shouldn't see</h3> : <h3>Here you go!</h3>}
    </div>
  );
}

export default App;
