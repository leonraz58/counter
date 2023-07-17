import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {SetCounter} from './components/SetCounter';

function App() {


    const [maxValue, setMaxValue] = useState(5)
    const [startValue, setStartValue] = useState(0)
    const [counterValue, setCounterValue] = useState(startValue)
    const [error, setError] = useState<string | null>(null)
    const [message, setMessage] = useState<string | null>(null)
    const [editMode, setEditMode] = useState(false)


    const incCounterValue = () => {
        setCounterValue(counterValue + 1)
    }

    const resetCounterValue = () => {
        setCounterValue(startValue)
    }

    const setValues = (maxInputValue: number, startInputValue: number) => {
        if (startInputValue > maxInputValue) {
            alert('incorrect value!')
           // setError('incorrect value!')
        } else {
            //alert('nice work')
            setError(null)
            setMaxValue(maxInputValue)
            setStartValue(startInputValue)
            setCounterValue(startInputValue)
            setEditMode(false)
        }
    }

    return (
        <div className="App">
            <SetCounter maxValue={maxValue}
                        startValue={startValue}
                        setValues={setValues}
                        setMessage={setMessage}
                        setError={setError}
                        editMode={editMode}
                        setEditMode={setEditMode}
                        error={error}
            />
            <Counter maxValue={maxValue}
                     startValue={startValue}
                     counterValue={counterValue}
                     incCounterValue={incCounterValue}
                     resetCounterValue={resetCounterValue}
                     error={error}
                     message={message}
                     editMode={editMode}

            />
        </div>
    );
}

export default App;
