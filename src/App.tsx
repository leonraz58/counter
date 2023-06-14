import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";

function App() {

    const [counterValue, setCounterValue] = useState(0)

    const incCounterValue = () => {
        setCounterValue(counterValue+1)
    }

    const resetCounterValue = () => {
        setCounterValue(0)
    }

    return (
    <div className="App">
        <Counter counterValue={counterValue}
                 incCounterValue={incCounterValue}
                 resetCounterValue={resetCounterValue}
        />
    </div>
  );
}

export default App;
