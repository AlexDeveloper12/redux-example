import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';
import { useEffect } from 'react';

function App() {

  const counter = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(counter);
  })

  return (
    <div className="App">
      <header>
        <h5>Welcome to my Redux tutorial</h5>
        <button onClick={() => dispatch(increment())}>Increment counter</button>
        <button onClick={() => dispatch(decrement())}>Decrement counter</button>
        <h6>Counter is:{counter}</h6>
      </header>
    </div>
  );
}

export default App;

