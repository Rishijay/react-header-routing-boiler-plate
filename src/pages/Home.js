import logo from "../logo.svg";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { decrement, increment } from "../redux/reducer";

function Home() {
  const count = useSelector((state) => state.reducers);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(count);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div
          style={{
            margin: 10,
            justifyContent: "space-evenly",
            display: "flex",
            width: "100%",
          }}
        >
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <span>Count: {count}</span>
          <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
      </header>
    </div>
  );
}

export default Home;
