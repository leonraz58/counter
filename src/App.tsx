import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {SetCounter} from './components/SetCounter';

function App() {


    const [maxValue, setMaxValue] = useState(6)
    const [startValue, setStartValue] = useState(0)
    const [counterValue, setCounterValue] = useState(startValue)
    const [error, setError] = useState<string | null>(null)



    const incCounterValue = () => {
        setCounterValue(counterValue + 1)
    }

    const resetCounterValue = () => {
        setCounterValue(startValue)
    }

    const setButtonHandler = () => {
        if (startValue > maxValue) {
            setError('error')
        }
    }

    return (
        <div className="App">
            <SetCounter maxValue={maxValue}
                        startValue={startValue}
                        setButtonHandler={setButtonHandler}
                        setMaxValue={setMaxValue}
                        setStartValue={setStartValue}
            />
            <Counter maxValue={maxValue}
                     startValue={startValue}
                     counterValue={counterValue}
                     incCounterValue={incCounterValue}
                     resetCounterValue={resetCounterValue}
                     error={error}

            />
        </div>
    );
}

export default App;
